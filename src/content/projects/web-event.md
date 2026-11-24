---
title: "Web Event: Pemesanan Tiket Online Konser"
description: "Website pemesanan tiket konser musik dan pertunjukan daring dengan pemilihan tier tiket, proteksi overbooking, dan e-ticket barcode."
pubDate: 2024-03-05
stack:
  - "Laravel"
  - "Inertia.js"
  - "React"
  - "MySQL"
status: "live"
repo: "https://github.com/ajikamaludin-dev/web-event"
demoUrl: "https://web-event.ajikamaludin.id/"
credentials: "admin@admin.com / password"
draft: false
cover: "../../assets/projects/web-event.png"
coverAlt: "Screenshot antarmuka sistem Web Event: Pemesanan Tiket Online Konser"
---

## Latar Belakang & Kebutuhan Bisnis

Penjualan tiket konser (*ticket war*) selalu menjadi ujian berat bagi kestabilan aplikasi web. Ketika ribuan penggemar mengakses halaman checkout pada menit yang sama, sistem harus menjamin bahwa kuota tiket tidak terjual melebihi kapasitas (*overselling*).

Web Event dibangun untuk menangani reservasi tiket hiburan dengan arsitektur checkout yang terisolasi dan aman.

## Fitur Utama

- **Tier Kategori Tiket:** Manajemen variasi tiket seperti VIP, Early Bird, Festival, dan Regular dengan batasan kuota terpisah.
- **Pencegahan Overbooking:** Penguncian kuota sementara (*atomic reservation lock*) saat pengguna memasuki alur pembayaran.
- **Penerbitan E-Ticket QR Code:** Tiket elektronik terenkripsi yang langsung dikirimkan ke email pembeli untuk validasi gate scanner saat acara.
- **Dasbor Penyelenggara:** Monitoring real-time persentase keterisian venue dan pendapatan penjualan tiket.

## Arsitektur Teknis

Sistem memanfaatkan transaksi database dengan isolasi tinggi pada PostgreSQL/MySQL guna mencegah kondisi balapan (*race condition*) antar calon pembeli.
