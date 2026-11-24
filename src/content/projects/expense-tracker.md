---
title: "Expense Tracker: Keuangan & Budgeting DaisyUI"
description: "Aplikasi pelacakan pengeluaran dan anggaran keuangan pribadi/usaha dengan visualisasi kategori serta database SQLite hemat resource."
pubDate: 2024-10-20
stack:
  - "Laravel"
  - "Inertia.js"
  - "React"
  - "DaisyUI"
  - "SQLite"
status: "live"
repo: "https://github.com/ajikamaludin-dev/expense-tracker-inertiajs"
demoUrl: "https://expense.ajikamaludin.id/"
draft: false
cover: "../../assets/projects/expense-tracker.png"
coverAlt: "Screenshot antarmuka sistem Expense Tracker: Keuangan & Budgeting DaisyUI"
---

## Latar Belakang & Kebutuhan Bisnis

Mengelola arus kas operasional bagi pekerja lepas (*freelancer*) dan unit usaha kecil sering terhambat oleh aplikasi keuangan yang terlalu birokratis dengan grafik akuntansi rumit. Dibutuhkan alat pencatatan cepat yang langsung memperlihatkan kesehatan finansial dalam sekejap.

Expense Tracker memberikan pengalaman budgeting intuitif dengan estetika antarmuka modern menggunakan DaisyUI.

## Fitur Utama

- **Pencatatan Transaksi Kilat:** Input pemasukan dan pengeluaran dengan tagging kategori dan catatan lampiran bukti struk.
- **Plafon Anggaran Bulanan (*Budgeting Cap*):** Peringatan otomatis saat pengeluaran untuk pos tertentu telah mendekati atau melebihi batas target.
- **Visualisasi Arus Kas:** Diagram distribusi belanja per kategori untuk mengevaluasi kebocoran anggaran operasional.
- **Portabilitas Database:** Berjalan di atas SQLite lokal yang aman, privat, dan mudah dipindahkan.

## Arsitektur Teknis

Dibangun menggunakan stack **Laravel**, **Inertia.js**, dan komponen **DaisyUI** di atas Tailwind CSS, menghasilkan bundle aplikasi yang sangat ringan dan responsif di berbagai perangkat.
