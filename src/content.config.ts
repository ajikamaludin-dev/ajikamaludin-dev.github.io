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
 *
 * Schema ditulis sebagai fungsi supaya `image()` bisa dipakai untuk `cover`:
 * helper ini mengubah path relatif di frontmatter jadi objek ImageMetadata
 * yang bisa langsung diteruskan ke komponen `<Image>` dari `astro:assets`.
 */
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z
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
        cover: image().optional(),
        coverAlt: z.string().optional(),
      })
      .transform((data) => {
        const { date, time } = parsePublished(data.pubDate);
        return { ...data, pubDate: date, pubTime: time };
      }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(70),
      description: z.string().min(40).max(160),
      pubDate: z.coerce.date(),
      stack: z.array(z.string()).default([]),
      status: z.enum(["live", "beta", "archived", "idea"]).default("idea"),
      repo: z.url().optional(),
      demoUrl: z.url().optional(),
      credentials: z.string().optional(),
      draft: z.boolean().default(false),
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

export const collections = { blog, projects };
