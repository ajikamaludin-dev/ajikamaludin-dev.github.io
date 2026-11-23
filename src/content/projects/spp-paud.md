---
title: "SPP PAUD: Pembayaran Sekolah & Tabungan Siswa"
description: "Aplikasi administrasi pembayaran SPP bulanan, uang kegiatan, dan pencatatan buku tabungan siswa untuk jenjang PAUD, TK, dan TPA."
pubDate: 2024-10-28
stack:
  - "Laravel"
  - "Blade"
  - "SQLite"
  - "Bootstrap"
status: "live"
repo: "https://github.com/ajikamaludin-dev/spp-paud"
demoUrl: "https://spp-paud.ajikamaludin.id"
credentials: "admin@admin.com / password"
draft: false
cover: "../../assets/projects/spp-paud.png"
coverAlt: "Screenshot antarmuka sistem SPP PAUD: Pembayaran Sekolah & Tabungan Siswa"
---

## Latar Belakang & Kebutuhan Komunitas

Sekolah jenjang anak usia dini (PAUD/TK) umumnya dikelola oleh yayasan swadaya atau kelompok guru dengan staf administrasi terbatas. Mereka memerlukan software yang ramah pengguna awam untuk mencatat uang iuran SPP bulanan serta tabungan harian anak-anak.

Proyek open source **spp-paud** dibangun dengan tujuan memberikan solusi administrasi sekolah yang mudah dipasang, gratis, dan stabil, yang kini telah memperoleh puluhan bintang di GitHub.

## Fitur Utama

- **Pencatatan SPP Bulanan:** Matriks 12 bulan pembayaran per tahun ajaran untuk melihat status lunas/tunggakan tiap siswa dalam satu pandangan.
- **Buku Tabungan Digital Siswa:** Pencatatan setor dan tarik tabungan anak dengan cetak buku tabungan mini.
- **Kwitansi Pembayaran:** Cetak bukti setor SPP yang dapat diserahkan langsung kepada wali murid.
- **Laporan Kas Masuk Sekolah:** Rekapitulasi pendapatan sekolah per bulan dan per semester untuk laporan pertanggungjawaban yayasan.

## Arsitektur Teknis

Dibangun dengan pendekatan klasik **Laravel Blade** dan database ringan **SQLite**. Aplikasi dapat dijalankan di server mini lokal sekolah (bahkan di laptop kasir/admin) tanpa perlu koneksi internet terus-menerus.
