---
title: "Payroll POS: Penggajian Buruh & Output Produksi"
description: "Aplikasi penggajian untuk buruh harian lepas dan pekerja borongan berdasarkan pencatatan hasil produksi riil serta slip gaji otomatis."
pubDate: 2024-09-30
stack:
  - "Laravel"
  - "Inertia.js"
  - "React"
  - "MySQL"
status: "live"
repo: "https://github.com/ajikamaludin-dev/payroll-pos-inertiajs"
demoUrl: "https://payroll-pos.ajikamaludin.id"
credentials: "admin@admin.com / password"
draft: false
cover: "../../assets/projects/payroll-pos.png"
coverAlt: "Screenshot antarmuka sistem Payroll POS: Penggajian Buruh & Output Produksi"
---

## Latar Belakang & Kebutuhan Bisnis

Pabrik manufaktur, bengkel garmen, dan industri kreatif sering kali menerapkan sistem upah borongan (*piece-rate pay*), di mana gaji karyawan dihitung berdasarkan berapa banyak unit barang yang berhasil mereka selesaikan setiap harinya. Perhitungan manual di buku besar sering memicu sengketa perhitungan upah antara pekerja dan mandor.

Payroll POS mengintegrasikan pelacakan output kerja harian dengan formula penggajian buruh secara transparan.

## Fitur Kunci

- **Pencatatan Produksi Harian:** Input kuantitas unit yang diselesaikan per pekerja dengan verifikasi mandor.
- **Formula Upah Fleksibel:** Menghitung kombinasi upah pokok harian, komisi per unit produk jadi, dan uang lembur.
- **Penerbitan Slip Gaji Cetak:** Format slip gaji ringkas dan jelas yang dapat langsung dicetak mingguan atau bulanan.
- **Laporan Biaya Tenaga Kerja (*Labor Cost*):** Menganalisis proporsi biaya tenaga kerja langsung terhadap harga pokok penjualan barang.

## Pendekatan Teknis

Menggunakan **Inertia.js** dan **React** untuk kalkulasi instan di sisi antarmuka, mencegah salah input data kuantitas produksi buruh.
