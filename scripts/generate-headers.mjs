/**
 * Menghasilkan `dist/_headers` (Cloudflare Pages / Netlify) SETELAH build,
 * karena isi CSP bergantung pada hash skrip inline yang baru ada di hasil build.
 *
 * Kenapa hash, bukan 'unsafe-inline':
 *   Aturan proyek melarang `unsafe-inline` di `script-src`. Karena Astro
 *   meng-inline skrip kecilnya, cara mematuhinya tanpa mematikan skrip adalah
 *   menghitung SHA-256 tiap skrip inline dan memasukkannya ke CSP. Hash-nya
 *   berubah tiap build — makanya file ini digenerate, bukan ditulis tangan.
 *
 * Catatan: tidak ada `<style>` inline di halaman (sudah diverifikasi), jadi
 * `style-src` bisa 'self' tanpa 'unsafe-inline'.
 *
 * Jalankan: bun ./scripts/generate-headers.mjs   (biasanya lewat `bun run build`)
 */
import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const DIST = new URL("../dist/", import.meta.url).pathname;

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const files = (await walk(DIST)).filter((f) => f.endsWith(".html"));

const hashes = new Set();
for (const file of files) {
  const html = await readFile(file, "utf8");
  // Hanya skrip inline: <script ...>...</script> tanpa atribut src.
  for (const m of html.matchAll(/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/gi)) {
    const body = m[1];
    if (!body.trim()) continue;
    // JSON-LD tidak perlu hash — ia tidak dieksekusi. Tapi tidak merugikan
    // memasukkannya, dan menghindari kasus di mana ada script yang ternyata JS.
    const digest = createHash("sha256").update(body, "utf8").digest("base64");
    hashes.add(`'sha256-${digest}'`);
  }
}

const scriptSrc = [
  "'self'",
  "'wasm-unsafe-eval'",
  "https://www.googletagmanager.com",
  ...[...hashes].sort(),
].join(" ");

const csp = [
  "default-src 'self'",
  `script-src ${scriptSrc}`,
  "style-src 'self'",
  "img-src 'self' data:",
  "font-src 'self' data:",
  "connect-src 'self' https://*.google-analytics.com https://analytics.google.com " +
    "https://www.google.com/g/collect",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const headers = `/*
  Content-Security-Policy: ${csp}
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), camera=(), microphone=(), payment=(), usb=(), interest-cohort=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  Cross-Origin-Opener-Policy: same-origin
  X-Permitted-Cross-Domain-Policies: none

/*
  Cache-Control: public, max-age=0, must-revalidate

/_astro/*
  Cache-Control: public, max-age=31536000, immutable

/pagefind/*
  Cache-Control: public, max-age=3600
`;

await writeFile(path.join(DIST, "_headers"), headers, "utf8");

console.log(`dist/_headers dibuat — ${hashes.size} hash skrip inline, ${files.length} halaman`);
