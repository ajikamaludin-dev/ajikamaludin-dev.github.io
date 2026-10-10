---
title: Kapan backend PHP lebih masuk akal daripada Go
description:
  Go sering dipromosikan sebagai pengganti PHP untuk backend. Catatan ini membandingkan
  keduanya berdasarkan bentuk masalah, bukan benchmark sintetis.
pubDate: 2026-09-24
tags: [go, php, laravel, backend]
draft: false
---

Pertanyaan "PHP atau Go?" terlalu luas untuk dijawab tanpa konteks. Keduanya sudah
dipakai di backend produksi berskala besar, jadi pilihannya bukan soal kemampuan
melainkan bentuk masalah yang sedang dihadapi.

## Dimana Go menang

Go terasa paling tepat ketika service harus menangani banyak koneksi yang saling
menunggu, misalnya proxy, worker antrean, atau service yang menangani puluhan ribu
koneksi WebSocket sekaligus. Model goroutine membuat kode semacam itu tetap terbaca
tanpa library event loop tambahan.

Service seperti ini umumnya bersifat sempit: menerima request, memproses, membalas.
Satu tanggung jawab, sedikit dependensi, dan tidak butuh ekosistem framework.

## Dimana PHP menang

PHP dengan Laravel menang ketika masalahnya adalah **banyak aturan bisnis yang
berubah**. CRUD, alur persetujuan, hak akses per peran, laporan, dan integrasi
payment gateway — semua itu laju perubahannya tinggi dan timbutuh ekosistem yang
sudah menyediakan sebagian besar solusinya.

Kecepatan menulis dan memelihara aturan bisnis biasanya lebih menentukan biaya
jangka panjang daripada kecepatan eksekusi satu request.

## Bukan pemisahan yang kaku

Pengalaman saya: keduanya sering dipakai bersamaan dalam satu sistem. Sebuah service
untuk pinjaman dapat menyediakan API utamanya lewat Go sementara sisi admin, pelaporan,
dan aturan produk tetap ditulis dalam PHP. Yang penting bukan jumlah service, melainkan
batas tanggung jawab yang jelas di antaranya.

Batas itu lebih sulit dijaga daripada memutuskan bahasa pemrogramannya.

## Yang bisa dicoba

Kalau kamu sedang memilih untuk service baru, tulis dulu dua daftar pendek: daftar
kebutuhan yang akan berubah minggu ini, dan daftar yang tidak akan berubah setahun
ke depan. Banyaknya isi daftar pertama biasanya sudah cukup untuk menentukan pilihan
tanpa perlu benchmark.
