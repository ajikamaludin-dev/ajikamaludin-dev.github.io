---
title: "Stack AI Agentic Dev Hemat: Pi.dev, Bili Proxy, dan MiniMax"
description: "Arsitektur agentic dev hemat: pi.dev, Billion-Context proxy, 9router (RTK + Headroom), CommandCode MiniMax m3.1-flash, context-mode, dan codebase-memory."
pubDate: 2026-11-10
tags: [ai, agentic-dev, llm, terminal, pi-dev, devops]
draft: false
---
Menjalankan autonomous coding agent di mesin lokal sering berakhir dengan tagihan API yang membengkak dan context window yang lekas rusak karena timbunan output terminal mentah. Sekali agent mengeksekusi test suite atau memeriksa git diff tanpa filter, puluhan ribu token terbuang dan akurasi penalaran model anjlok akibat context bloat.

Banyak developer mengira solusi coding agent berkualitas harus selalu memakai model kelas atas (Claude 3.5 Sonnet atau GPT-4o) dengan tagihan $10–$30 per hari di dalam GUI editor yang berat. Nyatanya, dengan rekayasa konteks yang tepat di terminal, kita bisa membangun alur agentic mandiri yang tangguh dengan biaya harian di bawah $0.50 tanpa kehilangan presisi.

Artikel ini membedah arsitektur yang saya gunakan sehari-hari: kombinasi harness terminal ringan, rantai proxy lokal untuk kompresi dan stabilitas prompt caching, serta model berbiaya sangat rendah via **CommandCode (MiniMax-m3.1-flash)**.

---

## 1. Topologi Arsitektur: Rantai Proxy dan Aliran Data

Kunci efisiensi sistem ini bukan prompt engineering magis, melainkan arsitektur jaringan lokal sebelum request menyentuh server upstream provider.

Setiap request dari CLI diproses melalui pipeline berantai (*chained proxy*) berikut:

```
[ Developer Terminal ]
         │
    ┌────▼────────────────────────────────────────────────────┐
    │ pi.dev (Terminal Agent Harness & Sub-agent Engine)      │
    └────┬────────────────────────────────────────────────────┘
         │
    ┌────▼────────────────────────────────────────────────────┐
    │ 1. Billion-Context (/bili/ Proxy Interceptor)           │
    │    • Hierarchical conversation compression              │
    │    • On-demand tool trace decompression                 │
    └────┬────────────────────────────────────────────────────┘
         │
    ┌────▼────────────────────────────────────────────────────┐
    │ 2. 9router (RTK Gateway + Headroom Cache Stabilizer)     │
    │    • Router-Toolkit (RTK) multi-provider fallback       │
    │    • Headroom prompt caching & token headroom manager   │
    │    • Unified cost & rate-limit throttling               │
    └────┬────────────────────────────────────────────────────┘
         │
    ┌────▼────────────────────────────────────────────────────┐
    │ 3. Model Provider: CommandCode ($1 Package)             │
    │    • Model Default: MiniMax-m3.1-flash                  │
    │    • Escalation: Claude 3.5 Sonnet / Opus (arsitektur)  │
    └─────────────────────────────────────────────────────────┘
```

Secara paralel di workstation lokal, `pi.dev` dikawal oleh dua server Model Context Protocol (MCP):
- **codebase-memory-mcp**: Graph database AST untuk query dependensi simbol kode.
- **context-mode**: Subshell runner terisolasi agar output kompilasi/perintah tidak membanjiri prompt.

---

## 2. Bedah Komponen dan Tautan Repositori GitHub

Setiap alat dalam rantai ini memegang satu batas tanggung jawab yang tegas:

### A. Harness: [pi.dev (pi-coding-agent)](https://github.com/earendil-works/pi-coding-agent)
Harness terminal yang mengeksekusi loop interaktif REPL agent.
- **Tautan Repositori**: [github.com/earendil-works/pi-coding-agent](https://github.com/earendil-works/pi-coding-agent)
- **Peran**: Menangani sesi terminal, parsing input, koordinasi sub-agent (`worker`, `reviewer`, `planner`), serta mengelola tool protocol.
- **Nilai Unggul**: Dibangun di atas TypeScript/Bun murni tanpa Electron. Waktu startup instan, konsumsi RAM minimal, dan fleksibilitas penuh untuk membelokkan *base URL* upstream ke proxy lokal.

### B. Proxy Kompresi Konteks: [Billion-Context](https://github.com/ranxianglei/billion-context)
Proxy interceptor (`/bili/`) yang duduk di antara harness dan router gateway.
- **Tautan Repositori**: [github.com/ranxianglei/billion-context](https://github.com/ranxianglei/billion-context)
- **Mekanisme Kerja**:
  1. **Hierarchical Compression**: Ketika sesi koding melampaui puluhan turn, `bili` secara otomatis mengidentifikasi tool traces yang sudah selesai dikonsumsi dan melipatnya menjadi rangkuman terstruktur bertag referensi (`m00150–m00220`).
  2. **On-Demand Decompression**: Berbeda dengan summarizer konvensional yang merusak data permanen, jika agent memerlukan kembali stack trace persis atau baris kode lama, ia dapat memicu pemanggilan `decompress` untuk membaca ulang payload asli ke host file.

### C. Router Gateway & Cache Stabilizer: [9router (RTK)](https://github.com/router-toolkit) + [Headroom](https://github.com/headroom-ai/headroom)
Pintu gerbang API cerdas yang menggabungkan Router Toolkit (RTK) dan Headroom.
- **Tautan Repositori 9router / RTK**: [github.com/router-toolkit](https://github.com/router-toolkit)
- **Tautan Repositori Headroom**: [github.com/headroom-ai/headroom](https://github.com/headroom-ai/headroom)
- **Mekanisme Kerja**:
  - **9router (RTK)**: Menangani multi-provider routing, load balancing, per-session cost tracking, dan auto-failover ketika provider mengalami HTTP 429 (*Rate Limit*).
  - **Headroom**: Mengawasi token headroom dan stabilitas prompt prefix. Provider modern memberikan diskon hingga 90% untuk token yang terkena *prompt cache hit*. Sedikit saja pergeseran timestamp atau metadata di awal pesan sistem akan merusak cache (*cache miss*). Headroom memastikan prefix prompt tetap stabil sehingga cache hit rate bertahan di angka 85%–95%.

### D. Provider Model Hemat: [CommandCode](https://commandcode.ai) (MiniMax-m3.1-flash)
Penyedia API model dengan rasio harga-ke-kecepatan luar biasa.
- **Tautan Layanan**: [commandcode.ai](https://commandcode.ai)
- **Model Utama**: `minimax-m3.1-flash`
- **Unit Economics**: CommandCode menyediakan paket model hemat ($1 package) dengan kuota token masif. Karakteristik `minimax-m3.1-flash`:
  - Latensi *time-to-first-token* sangat rendah (< 400ms).
  - Biaya input/output yang sangat murah, ideal untuk tugas iteratif seperti scouting, verifikasi linting, atau penulisan unit test.
  - **Prinsip Eskalasi**: 90% waktu agent berjalan di atas MiniMax. Model mahal (Claude 3.5 Sonnet / Opus) hanya dipanggil saat perancangan fondasi arsitektur atau bedah bug logika yang sangat rumit.

### E. Graph Code Discovery: [codebase-memory-mcp](https://github.com/codebase-memory/codebase-memory-mcp)
Peladen MCP untuk navigasi kode berbasis Abstract Syntax Tree (AST).
- **Tautan Repositori**: [github.com/codebase-memory/codebase-memory-mcp](https://github.com/codebase-memory/codebase-memory-mcp)
- **Peran**: Menghindarkan agent dari pola membaca file secara buta. Alih-alih melakukan `cat` ke seluruh direktori, agent memanfaatkan perintah graf seperti `search_graph` dan `trace_path` untuk melacak hirarki pemanggilan fungsi dan relasi dependensi secara terarah.

### F. Sandbox Output Filter: [context-mode](https://github.com/mizdra/context-mode)
Peladen MCP untuk memfilter eksekusi shell.
- **Tautan Repositori**: [github.com/mizdra/context-mode](https://github.com/mizdra/context-mode)
- **Peran**: Mengeksekusi perintah terminal (`ctx_execute`) di subshell terisolasi. Jika perintah menghasilkan ribuan baris log build atau test runner, output disimpan di file lokal sementara dan hanya ringkasan terstruktur yang dikembalikan ke context agent.

---

## 3. Komparasi Tool Harness: Mengapa Memilih pi.dev?

Di ekosistem AI coding saat ini, ada banyak harness dan antarmuka. Berikut komparasi teknis mengapa opsi lain ditinggalkan untuk workflow ini:

| Tool Harness | Format | Karakteristik Utama | Alasan Menolak untuk Setup Ini |
| :--- | :--- | :--- | :--- |
| **pi.dev** | CLI / Terminal | Native Bun/TypeScript, extensible via sub-agent, bebas manipulasi upstream URL. | **Pilihan Utama**: Ringan, konsumsi RAM < 100MB, integrasi mulus dengan rantai proxy `bili -> 9router`. |
| **Cursor** | IDE (GUI) | Fork VS Code dengan tab autocomplete halus dan indexing cloud. | Terikat pada GUI Electron yang memakan RAM 2GB–4GB. Sulit diotomasi di lingkungan headless/SSH, dan tertutup untuk disisipkan proxy chain kustom lokal. |
| **Cline** | VS Code Extension | Agent otonom di sidebar dengan permission dialog per file. | Masih bergantung pada runtime VS Code. Sering mengalami kelambatan pada sesi panjang (100+ turn) dan kaku untuk koordinasi sub-agent konkuren. |
| **Aider** | CLI | Terminal coding tool berbasis Git diff dan repo map ctags. | Sangat handal untuk pengeditan single-file diff, namun kaku untuk arsitektur multi-agent terpisah (`worker`, `reviewer`, `planner`) dan tidak memiliki mekanisme kompresi dua arah. |
| **OpenCode** | CLI / Agent | Kerangka open-source agent dengan code interpreter runtime. | Dependensi lingkungan runtime cukup berat dan ekosistem MCP-nya tidak semudah pi.dev dalam mengelola tool subshell terisolasi. |
| **Antigravity (agy)**| CLI | Tool agentic Google dengan mode `plan` dan `accept-edits`. | Sangat tangguh untuk ekosistem Gemini/Claude, tetapi terkunci pada workflow internal dan kuota Antigravity. Tidak dapat dialihkan secara bebas ke arbitrary provider pihak ketiga seperti paket $1 CommandCode. |

---

## 4. Simulasi Biaya Nyata: Sonnet Murni vs Chained Proxy Stack

Berikut kalkulasi kasar sesi refactoring aplikasi backend berskala menengah (estimasi 100 turns interaktif, mencakup pembacaan dependensi, penulisan kode, pengetesan, dan audit):

| Metrik | Setup Standar (Claude 3.5 Sonnet Langsung) | Setup Chained Proxy (MiniMax + bili + 9router) |
| :--- | :--- | :--- |
| **Model Utama** | Claude 3.5 Sonnet ($3 / $15 per 1M token) | MiniMax-m3.1-flash ($1 Package) |
| **Context Lifespan** | Membengkak hingga 120k+ token di akhir sesi | Terkunci stabil di 15k–25k token berkat `bili` |
| **Prompt Cache Hit** | 40%–60% (sering jebol akibat terminal noise) | 85%–95% (distabilkan oleh Headroom) |
| **Terminal Tool Dump** | Ribuan baris compiler log masuk prompt | Difilter oleh `context-mode` (hanya summary) |
| **Estimasi Biaya Sesi** | **$12.50 – $28.00 per sesi** | **$0.15 – $0.40 per sesi** |

Penghematan biaya mencapai lebih dari **90%**, dengan waktu respons generasi yang jauh lebih cepat untuk langkah-langkah mekanis harian.

---

## 5. Kelebihan dan Kekurangan (Pros & Cons)

### Kelebihan (Pros)
1. **Efisiensi Finansial Ekstrem**: Biaya harian coding agent menjadi dapat diprediksi dan sangat murah berkat paket $1 CommandCode.
2. **Konteks Bebas Sampah**: Duet `context-mode` dan `codebase-memory` menjaga context window tetap ramping dan relevan.
3. **Ketahanan Sesi Panjang**: `billion-context` memungkinkan sesi koding berjalan berjam-jam tanpa amnesia dan tanpa kehilangan detail teknis penting.
4. **Portabilitas Terminal**: Bekerja sempurna di dalam tmux, sesi SSH jarak jauh, atau terminal lokal mana pun tanpa ketergantungan GUI.

### Kekurangan dan Tantangan (Cons)
1. **Setup Awal Memerlukan Pemahaman Sysadmin**: Anda harus mengonfigurasi beberapa port proxy lokal, MCP daemon, dan file JSON konfigurasi. Ini bukan perkakas *plug-and-play* untuk pemula.
2. **Model Ringan Perlu Guardrail Ketat**: MiniMax-m3.1-flash sangat cepat, tetapi rentan menghasilkan argumen tidak valid jika skema JSON tool terlalu bersarang. Perlu instruksi prompt yang tegas dan defensif.
3. **Sensitivitas Terhadap Perubahan Graf**: Indeks `codebase-memory` harus diperbarui secara berkala setelah git checkout atau rebase besar agar agent tidak merujuk file yang sudah dihapus.

---

## 6. Kesimpulan Praktis

Agentic development yang matang bukan tentang menyerahkan seluruh pekerjaan ke model termahal di pasar. Produktivitas berkelanjutan dibangun di atas disiplin context engineering:
- Batasi apa yang boleh masuk ke context window sejak dari level subshell.
- Lindungi stabilitas prompt cache menggunakan proxy lokal.
- Alihkan beban kerja rutin ke model ekonomis berkecepatan tinggi, dan simpan model flagship hanya untuk keputusan arsitektural yang paling menentukan.
