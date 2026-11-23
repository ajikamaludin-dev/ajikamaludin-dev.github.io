---
title: "PG POS: Kasir Toko & Surat Jalan Pengiriman"
description: "Aplikasi kasir toko modern dengan manajemen stok, retur penjualan, pencatatan piutang pelanggan, kas toko, dan cetak surat jalan pengiriman barang."
pubDate: 2024-02-28
stack:
  - "Laravel"
  - "Inertia.js"
  - "React"
  - "MySQL"
status: "live"
demoUrl: "https://pgpos.panelawan.my.id"
credentials: "admin@admin.com / password"
draft: false
cover: "../../assets/projects/pg-pos.png"
coverAlt: "Screenshot antarmuka sistem PG POS: Kasir Toko & Surat Jalan Pengiriman"
---

## Latar Belakang & Kebutuhan Bisnis

Toko bahan bangunan, kelontong grosir, dan distributor barang konsumsi memiliki alur penjualan unik: barang yang dibeli sering kali tidak langsung dibawa oleh pembeli, melainkan dikirimkan bertahap melalui armada toko. Dibutuhkan dokumen resmi seperti surat jalan pengiriman yang terikat langsung dengan nomor transaksi kasir.

PG POS hadir memenuhi kebutuhan operasional toko yang memerlukan koordinasi cepat antara meja kasir dan tim ekspedisi toko.

## Fitur Utama

- **Penerbitan Surat Jalan Terintegrasi:** Otomasi pembuatan dokumen jalan pengiriman langsung dari invoice transaksi yang valid.
- **Pencatatan Piutang Pelanggan:** Pengelolaan pembayaran tempo dan pelunasan bertahap dengan riwayat pembayaran yang transparan.
- **Retur Barang & Pengembalian Dana:** Mekanisme pengembalian barang dagangan yang secara otomatis mengembalikan kuota stok ke etalase.
- **Laporan Kas Masuk & Kas Keluar:** Pemisahan buku kas harian untuk operasional toko dan setoran kasir.

## Arsitektur & Pendekatan Teknis

Sistem menggunakan **Inertia.js** dan **React** di atas backend **Laravel**. Fitur pencetakan nota dan surat jalan dioptimalkan dengan CSS print stylesheet media presisi, memungkinkan pencetakan langsung ke printer kasir continuous form atau printer dot matrix tanpa layout berantakan.
