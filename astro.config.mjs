// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import { generateSW } from "workbox-build";

/** @returns {import('astro').AstroIntegration} */
function pwaIntegration() {
  return {
    name: "pwa-workbox",
    hooks: {
      "astro:build:done": async () => {
        await generateSW({
          globDirectory: "dist",
          globPatterns: ["**/*.{html,js,css,svg,png,jpg,jpeg,webp,woff,woff2,txt,webmanifest}"],
          swDest: "dist/sw.js",
          navigateFallback: null,
          cleanupOutdatedCaches: true,
          clientsClaim: true,
          skipWaiting: true,
        });
      },
    },
  };
}

export default defineConfig({
  site: "https://ajikamaludin.id",
  output: "static",
  trailingSlash: "ignore",
  integrations: [mdx(), sitemap(), icon(), pwaIntegration()],
  vite: {
    plugins: [tailwindcss()],
  },
});
