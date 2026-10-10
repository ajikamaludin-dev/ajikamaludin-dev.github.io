import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * Validasi di build time. Field baru default-nya optional supaya lama
 * tidak langsung gagal build ketika ada entry yang belum diisi.
 */
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().min(40).max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // Gambar cover opsional. Kalau kosong, jangan isi dummy — hilangkan saja.
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
  }),
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
