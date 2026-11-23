---
title: "tui-workflow: Lingkungan Kerja Terminal Berbasis Go"
description: "Lingkungan kerja terminal (TUI) modern berbasis Go dan Bubble Tea dengan editor teks modeless, split diff Git, dan live preview Markdown."
pubDate: 2024-11-25
stack:
  - "Go"
  - "Bubble Tea"
  - "Lipgloss"
  - "Glamour"
  - "Chroma"
  - "go-git"
status: "live"
repo: "https://github.com/ajikamaludin-dev/tui-workflow"
draft: false
cover: "../../assets/projects/tui-workflow.png"
coverAlt: "Screenshot antarmuka terminal tui-workflow"
---

## Latar Belakang & Kebutuhan Pengembang

Banyak pengembang menghabiskan sebagian besar waktunya di lingkungan command-line interface (CLI). Namun, berpindah-pindah antara editor desktop berat dan terminal untuk sekadar memeriksa perbedaan (*diff*) commit Git, meninjau dokumentasi Markdown, atau melakukan perbaikan kode cepat sering memecah konsentrasi.

`tui-workflow` menghadirkan lingkungan kerja serba-ada di dalam terminal terminal dengan pengalaman visual modern bergaya editor grafis (desktop-like), tetapi tetap mempertahankan efisiensi sumber daya yang ekstrem (< 30 MB RAM) dan responsivitas rendering 60 FPS.

## Fitur Utama

- **Tata Letak 4-Zona Adaptif:** Dilengkapi bar navigasi menu atas (*Top Menu Bar*), bilah sisi pohon berkas (*Explorer Sidebar*), area kerja buffer multi-tab fleksibel, dan baris status interaktif di bagian bawah.
- **Modeless Text Editor & Syntax Highlighting:** Pendekatan penyuntingan intuitif tanpa modalitas tombol yang rumit, didukung mesin pewarnaan sintaksis real-time menggunakan pustaka **Chroma** untuk berbagai bahasa pemrograman.
- **Git Source Control & Split Diff:** Integrasi langsung dengan **go-git/v5** untuk komputasi perbedaan baris side-by-side (LCS algorithm) tanpa perlu mengeksekusi binary Git eksternal.
- **Live Markdown Preview:** Pratinjau Markdown instan menggunakan mesin rendering **Glamour** yang dilengkapi caching hash SHA-256 cerdas untuk navigasi dokumen teknis yang mulus.
- **Multi-Tab Manager & Persistensi Sesi:** Pengaturan tab buffer dengan proteksi sematan (*pinned tabs*), penataan urutan via drag-and-drop mouse, serta penyimpanan dan pemulihan sesi kerja per workspace secara deterministik.

## Arsitektur Teknis

Dibangun sepenuhnya dalam bahasa **Go** dengan memanfaatkan ekosistem Charmbracelet (**Bubble Tea** berbasis The Elm Architecture, **Lipgloss** untuk styling terminal layout, dan **Bubbles** untuk komponen UI interaktif). Mengadopsi arsitektur event-loop non-blocking dengan optimasi struktur memori bebas memory-leak (tab churn resilience) dan integrasi subshell PTY pseudoterminal.
