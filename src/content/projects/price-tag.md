---
title: "Price Tag Generator: Label Rak Minimarket"
description: "Aplikasi manajemen katalog produk untuk mencetak price tag dan label harga rak minimarket dengan ukuran presisi standar display toko."
pubDate: 2024-05-15
stack:
  - "Laravel"
  - "Inertia.js"
  - "React"
  - "CSS Paged Media"
status: "live"
demoUrl: "https://price-tag.panelawan.my.id/"
credentials: "admin@admin.com / password"
draft: false
cover: "../../assets/projects/price-tag.png"
coverAlt: "Screenshot antarmuka sistem Price Tag Generator: Label Rak Minimarket"
---

## Latar Belakang & Kebutuhan Bisnis

Di industri ritel dan minimarket, kesesuaian antara label harga di rak dengan harga di sistem kasir adalah kepatuhan wajib bagi kepuasan konsumen. Namun proses pembuatan label harga sering dilakukan manual menggunakan software pengolah kata yang memakan waktu dan berantakan ukurannya saat dicetak.

Price Tag Generator menyederhanakan proses ini menjadi beberapa klik saja langsung dari basis data produk toko.

## Fitur Kunci

- **Template Label Standar Ritel:** Desain label siap cetak yang memuat nama produk, barcode EAN-13, SKU, harga normal, harga promo, dan tanggal cetak.
- **Batch Printing:** Pilihan cetak massal berdasarkan kategori produk atau rak tertentu untuk efisiensi kertas label.
- **Layout Presisi Grid:** Menggunakan CSS Paged Media standar industri untuk memastikan setiap label terpotong pas di kertas stiker berlubang (*die-cut label paper*).

## Arsitektur Teknis

Menggunakan rendering SVG barcode di sisi browser dengan React untuk menjamin ketajaman hasil cetak barcode saat discan oleh pemindai optik kasir.
