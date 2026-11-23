---
title: "Core POS: Kasir & Inventori Multi-Gudang"
description: "Aplikasi POS dengan fitur inventori multi-gudang, kontrol stok opname, transfer stok, penjualan, pembelian, dan sistem role-based access control."
pubDate: 2024-02-15
stack:
  - "Laravel"
  - "Inertia.js"
  - "React"
  - "MySQL"
  - "Tailwind CSS"
status: "live"
demoUrl: "https://core-pos.panelawan.my.id"
credentials: "admin@admin.com / password"
draft: false
cover: "../../assets/projects/core-pos.png"
coverAlt: "Screenshot antarmuka sistem Core POS: Kasir & Inventori Multi-Gudang"
---

## Latar Belakang & Kebutuhan Bisnis

Bisnis ritel dan distribusi yang berkembang pesat sering menghadapi bottleneck pada pengelolaan stok saat membuka cabang atau gudang baru. Masalah klasik seperti selisih stok fisik, keterlambatan pencatatan mutasi antar gudang, hingga kebocoran kas akibat tidak adanya pemisahan wewenang kasir dan gudang menjadi tantangan utama.

Core POS dirancang untuk memecahkan masalah ini dengan menyediakan satu sistem terpusat yang menghubungkan proses kasir di garda depan (*point of sale*) dengan manajemen pergudangan di bagian belakang.

## Fitur Unggulan

- **Manajemen Multi-Gudang & Multi-Cabang:** Pelacakan stok secara terisolasi per lokasi, mendukung transfer barang antar gudang dengan status pengiriman dan verifikasi penerimaan.
- **Siklus Pembelian & Penjualan Lengkap:** Mulai dari Purchase Order (PO), pencatatan barang masuk (*goods receipt*), retur pembelian/penjualan, hingga penerbitan faktur.
- **Manajemen Kas & Piutang:** Pelacakan jatuh tempo piutang pelanggan dan hutang supplier, lengkap dengan rekapitulasi arus kas harian.
- **Stok Opname Digital:** Perhitungan berkala stok fisik terhadap stok sistem dengan audit trail penyesuaian (*adjustment*) otomatis.
- **Role-Based Access Control (RBAC):** Hak akses berjenjang untuk kasir, kepala gudang, supervisor, dan manajemen pemilik usaha.

## Arsitektur & Pendekatan Teknis

Aplikasi dibangun menggunakan kombinasi **Laravel 10**, **Inertia.js**, dan **React**. Pendekatan monolitik modern ini memberikan performa layaknya Single Page Application (SPA) tanpa memerlukan API layer terpisah yang memperumit sinkronisasi validasi data.

Transaksi sensitif seperti penjualan dan mutasi stok dibungkus dalam *database transaction* (ACID) untuk memastikan integritas data neraca stok tetap terjaga meski terjadi gangguan jaringan. Antarmuka kasir dirancang dengan navigasi keyboard-first guna mempercepat proses checkout pelanggan di jam sibuk.
