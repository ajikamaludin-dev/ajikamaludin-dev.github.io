---
title: "Autoparts POS: Alur Order Toko Sparepart"
description: "Sistem POS dengan kontrol alur lengkap dari store order, purchase order, pembelian barang masuk, penjualan kasir, hingga retur suku cadang."
pubDate: 2024-11-10
stack:
  - "Laravel"
  - "Inertia.js"
  - "React"
  - "MySQL"
status: "live"
demoUrl: "https://autoparts.panelawan.my.id"
credentials: "admin@admin.com / password"
draft: false
cover: "../../assets/projects/autoparts-pos.png"
coverAlt: "Screenshot antarmuka sistem Autoparts POS: Alur Order Toko Sparepart"
---

## Latar Belakang & Kebutuhan Bisnis

Industri suku cadang dan bengkel otomotif menghadapi tantangan berupa variasi SKU yang mencapai ribuan item dengan tingkat kompatibilitas suku cadang yang spesifik. Seringkali kasir toko perlu memesan part langka ke distributor (*store order*) sebelum transaksi pembelian formal disetujui.

Autoparts POS mengimplementasikan flow control berantai untuk mengunci setiap tahapan pengadaan dan pelepasan barang ke pelanggan.

## Alur Sistem (*Flow Control*)

1. **Store Order (SO):** Permintaan kebutuhan part dari front-desk saat stok menipis atau ada pemesanan khusus konsumen.
2. **Purchase Order (PO):** Approval pemesanan ke distributor/supplier dengan penguncian harga beli.
3. **Purchase & Good Receipt:** Pencatatan part fisik masuk gudang dan pembaruan harga pokok penjualan (HPP).
4. **Sale / POS:** Checkout kasir dengan pencarian instan nomor part atau nomor seri.
5. **Return:** Retur barang cacat ke supplier maupun penanganan retur dari konsumen.

## Arsitektur & Pendekatan Teknis

Katalog part dioptimalkan dengan indeks full-text pada nomor part OEM dan nama part untuk memastikan pencarian super cepat saat melayani antrean pembeli di toko.
