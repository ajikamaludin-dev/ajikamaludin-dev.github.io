/**
 * Membuat `public/og/default.jpg` (1200x630) dari token warna di
 * `src/styles/global.css`. Self-hosted — tidak memakai layanan OG eksternal,
 * sesuai aturan proyek (tanpa pihak ketiga).
 *
 * Jalankan: bun scripts/generate-og.mjs
 * Jalankan lagi kalau warna token atau nama berubah.
 */
import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const W = 1200;
const H = 630;

// Nilai hex hasil konversi dari oklch di src/styles/global.css
const COLORS = {
  surface: "#f5f7f9", // oklch(0.975 0.004 250)
  fg: "#1b2025", // oklch(0.24 0.012 250)
  fgMuted: "#53595f", // oklch(0.46 0.012 250)
  accent: "#00636d", // oklch(0.45 0.09 205)
};

const NAME = "Aji Kamaludin";
const ROLE = "Software Engineer";
const PLACE = "Klaten, Indonesia";
const DOMAIN = "ajikamaludin.id";

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"
  xmlns="http://www.w3.org/2000/svg" font-family="DejaVu Sans, Liberation Sans, sans-serif">
  <rect width="${W}" height="${H}" fill="${COLORS.surface}"/>
  <rect x="0" y="0" width="14" height="${H}" fill="${COLORS.accent}"/>

  <text x="96" y="286" font-size="78" font-weight="700" fill="${COLORS.fg}"
    letter-spacing="-1.5">${esc(NAME)}</text>

  <text x="96" y="352" font-size="36" font-weight="400" fill="${COLORS.fgMuted}">
    ${esc(ROLE)} &#183; ${esc(PLACE)}
  </text>

  <line x1="96" y1="428" x2="${W - 96}" y2="428" stroke="${COLORS.fgMuted}"
    stroke-opacity="0.28" stroke-width="2"/>

  <text x="96" y="486" font-size="27" font-weight="700" fill="${COLORS.accent}"
    letter-spacing="0.5">${esc(DOMAIN)}</text>
</svg>`;

await mkdir(new URL("../public/og/", import.meta.url), { recursive: true });

await sharp(Buffer.from(svg))
  .resize(W, H)
  .jpeg({ quality: 88, progressive: true, mozjpeg: true })
  .toFile(new URL("../public/og/default.jpg", import.meta.url).pathname);

console.log(`public/og/default.jpg dibuat (${W}x${H})`);
