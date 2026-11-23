---
title: "Voucher WiFi Shop: Toko Voucher Internet TWA"
description: "Aplikasi penjualan voucher internet/hotspot dengan UI mobile-first serta integrasi Trusted Web Activity (TWA) untuk aplikasi Android di Google Play."
pubDate: 2024-04-05
stack:
  - "Laravel"
  - "Inertia.js"
  - "React"
  - "Android TWA"
status: "live"
repo: "https://github.com/ajikamaludin-dev/laravel-voucher-shop"
demoUrl: "https://voucher.panelawan.my.id"
credentials: "admin@admin.com / password"
draft: false
cover: "../../assets/projects/voucher-wifi.png"
coverAlt: "Screenshot antarmuka sistem Voucher WiFi Shop: Toko Voucher Internet TWA"
---

## Latar Belakang & Kebutuhan Bisnis

Penyedia internet RT/RW Net dan pengelola hotspot kafe sering kesulitan mendistribusikan voucher WiFi kepada pengguna. Metode lama dengan mencetak kertas voucher rentan hilang dan merepotkan.

Voucher WiFi Shop menghadirkan katalog digital voucher internet yang dapat diakses langsung via browser smartphone pelanggan maupun melalui aplikasi Android resmi di Google Play Store.

## Fitur Utama

- **Katalog Paket Internet:** Pilihan durasi (jam, harian, mingguan, bulanan) dengan rincian kuota dan batas bandwidth.
- **Penerbitan Kode Voucher Otomatis:** Pembuatan kode voucher yang siap dimasukkan ke captive portal MikroTik.
- **Antarmuka Mobile-First:** Navigasi yang nyaman digunakan satu tangan pada layar ponsel.
- **Aplikasi Android (TWA):** Dibungkus menggunakan standar *Trusted Web Activity* sehingga berukuran sangat ringan (di bawah 2MB) dan sudah dipublikasikan di Google Play.

## Arsitektur & Pendekatan Teknis

Backend memanfaatkan **Laravel** untuk mengelola inventori voucher dan transaksi. Frontend menggunakan **Inertia.js** dan **React** yang dikemas ke dalam manifest PWA berstandar TWA Android.
