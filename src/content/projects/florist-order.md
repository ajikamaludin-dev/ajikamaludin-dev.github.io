---
title: "Florist Order: Manajemen Toko Bunga Multi-Cabang"
description: "Aplikasi manajemen pesanan karangan bunga dan buket untuk toko florist dengan sistem multi-cabang, tahapan produksi, dan tracking pengiriman."
pubDate: 2024-03-20
stack:
  - "Laravel"
  - "Inertia.js"
  - "React"
  - "MySQL"
status: "live"
repo: "https://github.com/ajikamaludin-dev/laravel-florist"
demoUrl: "https://florist-order.panelawan.my.id"
credentials: "admin@admin.com / password"
draft: false
cover: "../../assets/projects/florist-order.png"
coverAlt: "Screenshot antarmuka sistem Florist Order: Manajemen Toko Bunga Multi-Cabang"
---

## Latar Belakang & Kebutuhan Bisnis

Bisnis karangan bunga (*florist*) memiliki tenggat waktu pengiriman yang sangat ketat (misalnya ucapan belasungkawa atau pernikahan yang harus tiba sebelum acara dimulai). Ketiadaan koordinasi antara admin penerima pesanan, perangkai bunga (*florist maker*), dan driver pengantar berpotensi menimbulkan keterlambatan fatal.

Florist Order dibangun khusus untuk menghubungkan alur kerja pembuatan karangan bunga dari hulu ke hilir lintas cabang toko.

## Alur Kerja Terintegrasi

1. **Input Pesanan Pelanggan:** Pencatatan model bunga, teks kartu ucapan/banner, alamat acara, dan jam pengantaran target.
2. **Penugasan Perangkai:** Pesanan dialokasikan ke cabang toko terdekat dan perangkai bunga yang bertugas.
3. **Dokumentasi Hasil Rangkaian:** Foto bunga setelah selesai dirangkai diunggah untuk konfirmasi ke pemesan sebelum dikirim.
4. **Dispatching Kurir:** Penugasan armada kurir lengkap dengan tanda terima digital di lokasi tujuan.

## Pendekatan Teknis

Memanfaatkan antarmuka **Kanban-style** berbasis React untuk memudahkan pemantauan status pesanan secara visual dari antrean desain hingga terkirim.
