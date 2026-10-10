# AGENTS.md

Aturan kerja untuk agent di repo `personal-profile` — situs statis <https://ajikamaludin.id>.

Baca file ini sebelum ngubah apa pun. Kalau ada instruksi global (`~/.pi/agent/AGENTS.md`) yang bertentangan, yang menang adalah yang lebih ketat.

---

## 1. Deskripsi Project

Static personal portfolio: profil, blog, projects, products.
Astro 7 + Tailwind CSS 4. Output akhir `dist/` = HTML/CSS/JS statis, tanpa server.

Read `README.md` dulu untuk struktur folder dan model konten.

---

## 2. Hard Rules

Tidak boleh dilanggar. Kalau sebuah task mengharuskan salah satu di bawah, berhenti dan tanya user — jangan dipaksa jalan.

### Larangan Arsitektur

- **Jangan pernah menambahkan server.** Tidak ada SSR, tidak ada API route, tidak ada middleware, tidak ada database, tidak ada form handler, tidak ada serverless function. `output: 'static'` di `astro.config.mjs` adalah batas mutlak.
- **Jangan menambahkan `client:load` / `client:visible` / `client:idle` di file `.astro`.** Interaksi hanya boleh lewat komponen di `src/components/islands/`.
- **Jangan menambah dependency tanpa alasan tertulis.** Satu library baru harus bisa dibenarkan: mengurangi kode, atau mendapat fitur yang tidak mungkin ditulis sendiri dalam waktu wajar. Kalau ragu, tanya dulu.
- **Jangan pernah meng-commit `dist/`, `.astro/`, `node_modules/`, atau `.env`.** Semua sudah ada di `.gitignore` — jangan dihapus barisnya.
- **Jangan edit file di `node_modules/` atau `vendor/`.** Kalau ada bug di dependency, upgrade atau patch via `patch-package`, jangan edit langsung.

### Larangan Keamanan

Proyek ini menjanjikan "aman karena tidak ada server" — jangan mengadalkan itu sepenuhnya:

- **Tidak boleh menjalankan kode dari input user di halaman statis.** Kalau butuh input, validasinya di **build time** (Zod schema di content collection), bukan di browser.
- **Jangan menambahkan `unsafe-inline` atau `unsafe-eval` tanpa alasan.** Kalau `style-src 'unsafe-inline'` dipakai, itu untuk style yang di-inject Astro — bukan untuk JS.
- **Isi `public/` dianggap tidak tepercaya.** Jangan pernah menaruh file sensitif di sana; `dist/` publik.
- **Jangan pernah membocorkan `NODE_ENV`, secret, atau API key ke dalam build.** Isi `dist/` hanya berisi apa yang benar-benar dirujuk oleh halaman.

### Larangan Workflow

- **Jangan `git commit`, `git add`, `git push`, `git stash`, `git restore`, `git tag`, atau operasi git write apapun.** User yang pegang kendali git. Read-only command (`git status`, `git diff`, `git log`) boleh.
- **Jangan unstage file.**
- **Jangan menghapus branch.**
- **Plan mode by default.** Kalau belum ada persetujuan eksplisit, riset dulu dan ajukan rencana — jangan langsung edit.
- **Skip `bun run build` / `bun run check` kecuali diminta.** Don't waste cycles.

---

## 3. Environment

```bash
bun install
bun run dev       # localhost:4321
bun run build     # -> dist/
bun run preview
bun run check     # astro check
bun run lint      # biome check
bun run format    # biome format --write
```

- `npm` adalah shim ke Bun di mesin ini. Kalau `npm` gagal dengan "node asli tidak ditemukan", itu bukan bug project — memang begitu. Pakai `bun`.
- Kalau butuh Python, buat virtualenv sendiri di dalam project (`python -m venv .venv`). Jangan install ke system Python.
- Jangan ganti package manager repo (packageManager di `package.json` = bun). Jangan regenerate lockfile kecuali diminta.

---

## 4. Arsitektur

### Layer

```
pages/          routing saja, tipis
components/     presentasi, tidak tahu data dari mana
content/        blog + projects (Markdown/MDX, schema Zod)
data/           profil, pengalaman, produk (TypeScript)
utils/          fungsi murni, tanpa dependency ke Astro
styles/         token Tailwind v4 + base style
```

Aturan ketergantungan: **`data` tidak boleh meng-import `components`. `components` boleh meng-import `data`. `pages` boleh meng-import keduanya.** Kalau butuh sebaliknya, abstraksikan.

### Islands

Satu-satunya tempat JS hydrated. Aturan:

- islands harus **kecil**. Kalau butuh lebih dari ~150 baris,pertimbangkan pakai plain JS di `<script>` daripada framework island.
- islands tidak boleh meng-import `data/` secara langsung kalau data itu sudah bisa dilewati sebagai prop atau dioperasikan lewat `Astro.props`.
- tidak boleh ada lebih dari satu sumber kebenaran — kalau data dibutuhkan di server (SSR-like, misal `getStaticPaths`) **dan** di client, pass lewat prop, jangan fetch ulang.

### Content Collections

- Schema selalu di `src/content/*/config.ts`, selalu pakai Zod. Validasi di build time, bukan runtime.
- Field baru harus optional Unless semua entry punya data. Kalau sebuah field wajib dan belum ada isinya, build gagal — itu memang yang mau.
- Tanggal pakai format `YYYY-MM-DD`. Jangan pakai `Date` object di frontmatter.

### Data directory

`src/data/*.ts` adalah **sumber kebenaran tunggal**. Halaman dan komponen baca dari sini, tidak pernah hardcode data profil di dalam `.astro`.

Kalau ada nilai yang dipakai di ≥3 tempat (misal URL GitHub), jadikan konstanta di `src/data/profile.ts` dan import.

---

## 5. Sistem Desain

Token di `src/styles/global.css` (`@theme` block Tailwind v4). **Token baru selalu lewat `@theme`, bukan warna hex inline di component.** Pengecualian hanya untuk warna yang benar-benar one-off dan disengaja.

- **Fluid type:** heading pakai `clamp()`. Contoh: `text-[clamp(1.8rem,4vw,3rem)]`. Jangan `text-4xl` untuk heading utama.
- **Container queries:** komponen wajib responsif terhadap lebar container-nya sendiri, bukan hanya viewport. Pakai `@container` + `@sm:`/`@md:` di dalam komponen.
- **Mobile-first:** style dasar = mobile, Enhanced = `sm:` ke atas.
- **Dark/light:** dua-duanya harus benar-benar selesai dan rapi. Toggle manual override `prefers-color-scheme`, disimpan di `localStorage`, dan diterapkan **sebelum first paint** (script inline di `<head>`). Kalau flash tema muncul, itu bug.
- **Aksesibilitas:**
  - kontras teks ≥ 4.5:1 (≥ 3:1 untuk teks besar)
  - `focus-visible` visible di setiap elemen interaktif, jangan pernah `outline: none` tanpa pengganti
  - setiap animasi dibungkus `@media (prefers-reduced-motion: reduce)`
  - `<main>` punya `id`, ada skip link dari `Nav`
  - alt text wajib dan deskriptif, bukan `"gambar"` atau `"img"`
  - heading level tidak boleh lompat (h1 → h2 → h3)
- **Gambar:** selalu lewat `<Image>` dari `astro:assets` dan selalu punya `alt` serta dimensi intrinsik (layout shift = 0).
- **Animasi:** pakai `animation`/`transition` yang pendek (150–300ms). Tidak ada parallax, tidak ada animasi yang terkait scroll, tidak ada scroll-jacking.

Anti-pattern yang akan ditolak: framework component library generik, gradient ungu-biru yang terasa generik, glassmorphism berlebihan, animasi yang mengganggu Reduced Motion, layout yang cuma benar di lebar 1440px.
