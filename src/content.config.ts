import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { parsePublished } from "./utils/date.ts";

/**
 * `pubDate` menerima dua bentuk, keduanya tetap satu field:
 * - `YYYY-MM-DD` → hanya tanggal.
 * - `YYYY-MM-DD HH:mm` → tanggal + jam (WIB).
 *
 * Hasil normalisasi: `pubDate` selalu `Date`, `pubTime` hanya ada kalau jamnya
 * benar-benar ditulis di frontmatter — jadi UI tidak pernah mengarang jam.
 */
const publishedSchema = z
  .object({
    title: z.string().max(70),
    description: z.string().min(40).max(160),
    pubDate: z.union([
      z.date(),
      z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}(?:[ T]\d{2}:\d{2})?$/,
          "Format: YYYY-MM-DD atau YYYY-MM-DD HH:mm",
        ),
    ]),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // Gambar cover opsional. Kalau kosong, jangan isi dummy — hilangkan saja.
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
  })
  .transform((data) => {
    const { date, time } = parsePublished(data.pubDate);
    return { ...data, pubDate: date, pubTime: time };
  });

/**
 * Validasi di build time. Field baru default-nya optional supaya lama
 * tidak langsung gagal build ketika ada entry yang belum diisi.
 */
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: publishedSchema,
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().min(40).max(160),
    pubDate: z.coerce.date(),
    stack: z.array(z.string()).default([]),
    status: z.enum(["live", "beta", "archived", "idea"]).default("idea"),
    repo: z.url().optional(),
    demoUrl: z.url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
