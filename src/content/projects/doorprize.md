---
title: "Doorprize Picker: Undian Event Multi-Sesi"
description: "Aplikasi pengelolaan undian doorprize pada gathering perusahaan dan seminar dengan animasi pengacakan nomor pemenang interaktif di layar lebar."
pubDate: 2024-09-20
stack:
  - "Laravel"
  - "Inertia.js"
  - "React"
  - "SQLite"
status: "live"
repo: "https://github.com/ajikamaludin-dev/laravel-doorprice"
demoUrl: "https://doorprize.panelawan.my.id"
credentials: "admin / password"
draft: false
cover: "../../assets/projects/doorprize.png"
coverAlt: "Screenshot antarmuka sistem Doorprize Picker: Undian Event Multi-Sesi"
---

## Latar Belakang & Kebutuhan Bisnis

Pengundian doorprize pada acara *family gathering*, seminar nasional, atau pameran bisnis sering kali memakan waktu jika menggunakan kupon sobek fisik. Selain boros kertas, kupon fisik rawan tuduhan manipulasi pemenang.

Doorprize Picker menghadirkan sistem undian digital acak yang transparan, seru, dan siap ditampilkan di proyektor panggung besar.

## Fitur Utama

- **Multi-Event & Multi-Hadiah:** Pengelompokan hadiah berdasarkan kategori (Grand Prize, Utama, Hiburan) dengan kuota pemenang terpisah.
- **Filter Kehadiran Peserta:** Memastikan hanya peserta yang sudah melakukan registrasi ulang di lokasi yang berhak memenangkan hadiah.
- **Animasi Pengacakan Dramatis:** Layar pengundian interaktif dengan visual slot-machine berputar untuk membangun antusiasme audiens.
- **Riwayat Pemenang Tervalidasi:** Pemenang yang sudah terpilih otomatis terkunci agar tidak mendapat hadiah ganda di sesi berikutnya.

## Arsitektur Teknis

Algoritma pengacakan dijalankan di sisi server dengan *cryptographically secure pseudorandom generator* (CSPRNG) untuk menjamin keadilan undian, sementara animasi visual diatur halus menggunakan React di sisi browser.
