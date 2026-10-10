---
title: Backend aplikasi pinjaman BRILINK
description:
  Merancang framework backend berskala besar untuk aplikasi pinjaman BRILINK dengan
  integrasi microservices agar penanganan transaksi berjalan mulus.
pubDate: 2026-10-10
stack: [Microservices, Backend]
status: live
draft: true
---

## Konteks

Aplikasi pinjaman BRILINK menangani alur transaksi yang melibatkan beberapa layanan.
Kebutuhannya bukan sekadar menerima request, tetapi memastikan satu transaksi tetap
konsisten walau melalui beberapa tahap.

## Yang dikerjakan

Framework backend dirancang dan dijalankan dengan pendekatan microservices. Setiap
tanggung jawab dipisah dengan jelas, dan integrasi antar layanan disusun supaya
penanganan transaksi tetap utuh.

Service ini dipakai lebih dari 15 customer service representative setiap hari, jadi
kegagalan yang terlihat oleh pengguna langsung terasa.

## Catatan teknis

Microservices sering dianggap sebagai jawaban atas skala, padahal yang sebenarnya
menentukan adalah kejelasan batas tanggung jawab. Layanan yang dipisah tanpa batas yang
jelas hanya memindahkan masalah ke jaringan antar layanan.

Hal yang paling mudah diabaikan adalah perilaku saat integrasi gagal di tengah jalan.
Tanpa penanganan yang disengaja, transaksi bisa berhenti di tahap separuh jalan dan
menyisakan keadaan yang sulit direkonsiliasi.

Karena itu urutan kerjanya: tentukan dulu apa yang terjadi ketika salah satu layanan
tidak merespons, baru kemudian pecah layanannya.
