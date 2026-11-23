---
title: "Petty Cash: Kas Kecil & Cetak Nota Invoice"
description: "Aplikasi manajemen kas kecil operasional kantor dengan alur verifikasi pengeluaran bertingkat dan modul cetak nota/invoice kustom."
pubDate: 2024-10-10
stack:
  - "Laravel"
  - "Inertia.js"
  - "React"
  - "MySQL"
status: "live"
repo: "https://github.com/ajikamaludin-dev/pettycash"
demoUrl: "https://pettycash.ajikamaludin.id"
credentials: "kasir@portal.com / password"
draft: false
cover: "../../assets/projects/pettycash.png"
coverAlt: "Screenshot antarmuka sistem Petty Cash: Kas Kecil & Cetak Nota Invoice"
---

## Latar Belakang & Kebutuhan Bisnis

Biaya operasional harian kantor seperti pembelian alat tulis, konsumsi lembur, bahan bakar kendaraan dinas, dan perbaikan minor sering menggunakan kas kecil (*petty cash*). Jika tidak ada pencatatan ketat, kas kecil menjadi celah kebocoran anggaran paling rawan di perusahaan.

Petty Cash Manager mengotomasi alur pengajuan dan pertanggungjawaban dana kas kecil dengan kontrol berjenjang.

## Peran & Alur Pengguna

1. **Kasir (*Cashier*):** Melakukan pencatatan pengeluaran harian dan mengunggah lampiran foto kuitansi/bukti fisik.
2. **Operasional (*Operation*):** Melakukan verifikasi keabsahan kebutuhan belanja sebelum diajukan ke level manajemen.
3. **Manajer (*Approval*):** Otorisasi pencairan dana penggantian kas kecil (*reimbursement*) secara digital.

## Fitur Cetak Invoice

Aplikasi dilengkapi modul printer nota dan kwitansi yang dapat dikustomisasi format kop suratnya untuk keperluan pelaporan pajak dan pembukuan akuntansi.
