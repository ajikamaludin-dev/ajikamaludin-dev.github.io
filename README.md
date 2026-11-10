# ajikamaludin.id

Static personal portfolio, blog, projects, dan products.
Dibangun dengan **Astro 7** + **Tailwind CSS 4**, output **HTML/CSS/JS murni**.

Domain: <https://ajikamaludin.id>

---

## Kenapa SSG

Alasan teknisnya, bukan cuma tren:

- **Nol runtime.** Setelah build, tidak ada Node, tidak ada PHP, tidak ada proses yang berjalan. Tidak ada CVE server yang bisa dieksploitasi karena tidak ada server.
- **Deploy sesederhana menyalin folder.** Hasil build = folder berisi file statis. Bisa ditaruh di Cloudflare Pages, GitHub Pages, Netlify, Nginx, bahkan S3 + CDN. Tidak perlu container, tidak perlu SSH.
- **Performa.** Tidak ada request ke API, tidak ada hydration yang tidak perlu. Halaman mostly nol JS.
- **Biaya.** Free tier cukup untuk traffic pribadi. Tidak ada tagihan yang membengkak tak terduga.

Yang **tetap** jadi risiko: supply-chain saat build ( compromised npm package, dependency malicious). Mitigasinya: dependency sedikit, lockfile di-commit, Dependabot aktif, audit berkala. Detailed di [AGENTS.md](./AGENTS.md).

---

## Stack

| Layer           | Tool                                       | Versi              |
| --------------- | ------------------------------------------ | ------------------ |
| Framework       | [Astro](https://astro.build)               | `7.3.8`            |
| Build           | Vite                                       | `8.3.4`            |
| Styling         | [Tailwind CSS v4](https://tailwindcss.com) | `4.3.3`            |
| Tailwind plugin | `@tailwindcss/vite`                        | `4.3.3`            |
| Content         | `@astrojs/mdx`, `@astrojs/rss`             | `8.0.3`, `4.0.19`  |
| SEO             | `@astrojs/sitemap`                         | `3.7.4`            |
| Search          | [Pagefind](https://pagefind.app)           | `1.5.2`            |
| Image           | `sharp` via Astro `<Image>`                | `0.35.5`           |
| Icon            | `astro-icon` (Iconify)                     | `1.2.0`            |
| Font            | `@fontsource-variable/*`                   | `5.3.0`            |
| Lint/format     | [Biome](https://biomejs.dev)               | `2.5.15`           |
| Type check      | `@astrojs/check` + TypeScript              | `0.9.10` + `6.0.3` |
| Runtime         | [Bun](https://bun.sh)                      | `1.4.2`            |

> Versi dari registry npm, Oktober 2026, **semua sudah terpasang dan terverifikasi** `bun run lint` / `check` / `build` semuanya OK.

---

## Mulai Cepat

```bash
bun install

bun run dev        # http://localhost:4321
bun run build      # astro build -> pagefind -> generate dist/_headers
bun run preview    # serve dist/ seperti production
bun run check      # astro check (TypeScript)
bun run lint       # biome check
bun run format     # biome format --write
bun run og         # regenerate public/og/default.jpg
```

> `npm` di mesin ini cuma shim ke Bun. Pakai `bun` langsung.

---

## Struktur Folder

```
personal-profile/
├── public/
│   ├── pp.jpg                  # avatar — dipakai apa adanya
│   ├── og/default.jpg          # gambar Open Graph 1200x630
│   └── robots.txt
├── scripts/
│   ├── generate-og.mjs         # `bun run og` — regenerasi OG image
│   └── generate-headers.mjs    # jalan otomatis di akhir build
├── src/
│   ├── components/
│   │   ├── global/             # Nav, Footer
│   │   └── islands/            # ThemeToggle, SearchBox — JS inline saja
│   ├── content/
│   │   ├── blog/               # 3 artikel: 2 terbit, 1 draft
│   │   └── projects/           # 2 file, keduanya draft: true (section kosong)
│   ├── content.config.ts       # schema Zod untuk semua collection
│   ├── data/                   # single source of truth (TS, bukan YAML)
│   │   ├── profile.ts          # identitas, kontak, navLinks
│   │   ├── experience.ts       # riwayat kerja + pendidikan
│   │   ├── skills.ts
│   │   ├── certifications.ts   # 24 sertifikasi + pencapaian
│   │   └── products.ts         # KasirAja + tautan lain
│   ├── layouts/                # BaseLayout, PostLayout
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro         # termasuk Keahlian & Tautan Lain
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── projects/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── products/index.astro
│   │   └── rss.xml.ts
│   ├── styles/global.css       # @theme token + .prose + hero glass
│   └── utils/date.ts
├── .agents/skills/             # 6 pi skills — project-local, bukan global
├── astro.config.mjs
├── biome.json
├── package.json
├── tsconfig.json
└── AGENTS.md
```

### Aturan arsitektur

- **`components/islands/`** — hanya komponen yang butuh interaksi (tema, search, filter, copy-to-clipboard). Astro melakukan hydrate otomatis hanya untuk file di sini.
- **Komponen `.astro` lain** nol JS. Kalau butuh interaksi, ekstrak ke `islands/`. Jangan pakai `<script client:load>` di `.astro`.
- **Static assets** (font, gambar yang tidak diproses) → `public/`. Gambar yang perlu optimasi → `src/assets/` lalu pakai `<Image>` dari `astro:assets`.
- **Data statis** (profil, pengalaman, sertifikasi) → file TS di `src/data/`. Bukan YAML, bukan JSON, supaya type-safe dan bisa dipakai sebagai argumen komponen.

---

## Struktur Situs

| URL                | Isi                                                                | Sumber data                   |
| ------------------ | ------------------------------------------------------------------ | ----------------------------- |
| `/`                | Hero (gradient + glassmorphism), ringkasan, experience, CTA        | `profile.ts`, `experience.ts` |
| `/about`           | Cerita, pendidikan, keahlian, sertifikasi, pencapaian, tautan lain | semua `data/*.ts`             |
| `/blog`            | Indeks artikel + pencarian Pagefind                                | `content/blog/`               |
| `/blog/[slug]`     | Artikel                                                            | `content/blog/`               |
| `/projects`        | Kosong — belum ada project                                         | `content/projects/`           |
| `/projects/[slug]` | Detail project (hanya dibangun kalau ada entry)                    | `content/projects/`           |
| `/products`        | Produk & SaaS (KasirAja)                                           | `data/products.ts`            |
| `/rss.xml`         | Feed                                                               | `@astrojs/rss`                |

Navigasi: About · Blog · Projects · Products · **Hire Me!** (eksternal ke `wa.me`).
Tidak ada halaman `/uses` — isinya sudah digabung ke `/about`.

**Prinsip routing:** semua URL ending `/blog/*` dan `/projects/*` harus valid sebagai file statis. Tidak ada routing client-side yang bergantung JS. Link eksternal (`Hire Me!`, GitHub, LinkedIn, tautan produk) wajib `target="_blank" rel="noopener"`.

---

## Model Konten

### Menambah artikel blog

```bash
# 1. Buat file
src/content/blog/nama-slug.md
```

```markdown
---
title: Judul Artikel
description: Ringkasan satu kalimat — dipakai untuk meta description dan excerpt.
pubDate: 2026-10-12
updatedDate: 2026-10-20 # opsional
tags: [laravel, aws]
draft: false
cover: ../../assets/blog/nama-slug.webp
coverAlt: Deskripsi gambar cover
---

Isi artikel dalam Markdown/MDX.
```

Schema divalidasi Zod di **`src/content.config.ts`** (satu file untuk semua collection — Astro 7 tidak lagi memakai `src/content/*/config.ts`). Kalau frontmatter salah, `bun run build` gagal dengan pesan yang menyebut field mana.

Field baru sebaiknya dibuat optional dulu; kalau wajib, semua entry harus ikut diisi.

### Menambah project

Sama seperti blog, tapi di `src/content/projects/` dengan frontmatter tambahan: `stack`, `status` (`live` | `beta` | `archived` | `idea`), `repo`, `demoUrl`.

Frontmatter project mengharuskan `pubDate` untuk pengurutan. **Isi dengan tanggal penulisan**, bukan tanggal pekerjaan — tanggal pekerjaan bukan fakta yang terverifikasi dari sumber mana pun.

### Menambah produk

Edit `src/data/products.ts`. Produk berbeda dari project: produk = sesuatu yang dipakai orang lain secara nyata (ada pengguna, ada nilai), project = eksperimen atau case study.

---

## Sistem Desain

Tailwind v4 **CSS-first** — token ditulis di CSS, bukan `tailwind.config.js`.

```css
/* src/styles/global.css */
@import 'tailwindcss';

@theme {
  --font-sans: 'Inter Variable', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono Variable', ui-monospace, monospace;

  --color-accent-400: oklch(0.78 0.17 145); /* satu aksen utama */
  --color-accent-500: oklch(0.7 0.19 145);

  --spacing-gutter: 1.5rem;
  --radius-card: 1rem;
}

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-surface text-fg antialiased;
  }
}
```

Prinsip:

- **Fluid type.** Semua ukuran heading pakai `clamp()`, bukan breakpoint tetap. Contoh: `text-[clamp(2rem,5vw,3.5rem)]`.
- **Container queries** untuk komponen, bukan media query global. Komponen harus benar sendiri di lebar container-nya, bukan hanya di lebar viewport.
- **Breakpoint mobile-first.** Style dasar untuk mobile, baru `sm:`/`md:`/`lg:` untuk tambahan.
- **Aksesibilitas.** Kontras teks minimal 4.5:1. Semua elemen interaktif punya `focus-visible` yang jelas. `prefers-reduced-motion` dihormati di setiap animasi. Ada skip link ke `<main>`.
- **Tema gelap + terang** lewat `prefers-color-scheme` dan toggle manual. Menyimpan pilihan di `localStorage`. Terapkan tema sebelum first paint (script inline di `<head>`, bukan island) supaya tidak ada flash.
- **Self-hosted font** via `@fontsource-variable`. Tidak ada request ke Google Fonts — lebih baik untuk privasi dan performa.
- **Tanpa framework component library.** Tampilan generik "bootstrap-uman" harus dihindari.

---

## Deployment

### Cloudflare Pages (rekomendasi)

Build command `bun run build`, output directory `dist`.

- Free, global CDN, SSL otomatis, preview URL untuk setiap PR
- Deployment dari branch = branch alias, dari commit = unik

Catatan penting:

- **Hash berubah tiap build.** Jangan copy-paste nilai hash dari file lama. Cukup jalankan `bun run build`.
- **Jangan tambahkan `<style>` inline.** Saat ini `style-src` bisa `'self'` karena nol inline style. Begitu ada `<style>` inline tanpa hash, halaman jadi kosong.
- `style-src 'unsafe-inline'` baru boleh ditambahkan kalau Astro mulai meng-inject style — dan itu harus disertai alasan tertulis.
- Pagefind perlu `'wasm-unsafe-eval'` dan `worker-src blob:`.

### GitHub Pages

Passthrough `base` di `astro.config.mjs` kalau situs dilayani dari `user.github.io/repo`.

### Verifikasi sebelum publish

```bash
bun run build
du -sh dist/                       # target: < 5 MB
find dist -name "*.html" | wc -l   # sanity check jumlah halaman
bun run preview                    # cek manual di browser
```

`_headers` tidak bisa diuji lewat `astro preview` — header itu fitur host. Verifikasi hash-nya dengan membaca `dist/_headers` dan membandingkan dengan `<script>` inline di `dist/**/*.html`; kalau ada yang tidak cocok, theme toggle / menu / search akan mati di produksi.

Deploy hanya dari branch `main`. Pull request = preview, tidak menyentuh production.

---

## Skills (project-local)

Skills untuk agent disimpan di `.agents/skills/` di dalam project ini — **bukan** di `~/.pi/skills/` atau `~/.agents/skills/`. Jadi hanya aktif saat bekerja di repo ini, dan ikut masuk version control untuk tim atau agent lain.

| Skill               | Gunanya                             |
| ------------------- | ----------------------------------- |
| Skill               | Sumber                              | Installasi | Gunanya                                                                 |
| ---                 | ---                                 | ---        | ---                                                                     |
| `astro`             | Astro Team (MIT)                    | 16.7K      | Komponen & halaman Astro, content collections, islands, SSG, deploy     |
| `frontend-design`   | anthropics/skills                   | 968.7K     | Arah visual yang distinctive — tipografi, hindari gaya template default |
| `article-writing`   | affaan-m/ecc                        | 11.2K      | Artikel/guide/blog panjang dengan voice yang konsisten                  |
| `seo`               | addyosmani/web-quality-skills (MIT) | 49.5K      | Meta tag, structured data, sitemap, ranking pencarian                   |
| `content-strategy`  | coreyhaines31/marketingskills       | 153.8K     | Strategi & pemilihan topik konten, apa yang sebaiknya ditulis           |
| `web-quality-audit` | addyosmani/web-quality-skills (MIT) | 30K        | Audit berbasis bukti: performa, a11y, SEO, Lighthouse                   |

Semua terpasang **project-local** lewat `bunx skills add <pkg>` (tanpa `-g`), tercatat di `skills-lock.json`. Lokasi fisik `.agents/skills/`, dan `.claude/skills/` hanya berisi symlink **relatif** — nol file di luar folder ini.

> `profile-data` (milik saya, sudah dihapus) tidak punya padanan publik yang layak. Yang terdekat cuma skill bikin CV dengan 754–1.2K install dan isinya tidak relevan dengan menjaga `src/data/`. Fakta proyek yang terkonfirmasi tetap ada di [Fakta yang Sudah Dikonfirmasi](#fakta-yang-sudah-dikonfirmasi) di bawah.

Cara paksa pakai: `/skill:nama-skills`

---

## Lisensi

Konten (blog, proyek, teks) © Aji Kamaludin.
Kode, kecuali dinyatakan lain, MIT.

---

<div align="center">

**Dibangun untuk <https://ajikamaludin.id>**

</div>
