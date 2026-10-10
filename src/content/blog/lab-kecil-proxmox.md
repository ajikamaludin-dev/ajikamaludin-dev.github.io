---
title: Menyusun lab kecil dengan Proxmox dan satu mesin bekas
description:
  Cara menyusun lab virtualisasi di rumah dengan Proxmox VE pada satu mesin bekas,
  tanpa perangkat keras mahal dan tanpa cluster.
pubDate: 2026-09-10
tags: [proxmox, virtualization, linux, homelab]
draft: true
---

Lab virtualisasi sering dianggap butuh beberapa mesin dan switch terpisah. Untuk
belajar, satu mesin bekas sudah cukup. Yang dibutuhkan hanya virtualisasi yang
benar, penyimpanan yang jujur, dan jaringan yang tidak menyesatkan.

## Kenapa Proxmox

Proxmox VE berbasis Debian, jadi konfigurasi jaringan dan penyimpanannya memakai
cara yang sudah dikenal administrator Linux. Ditambah lagi, ia menggabungkan KVM
untuk mesin virtual dan LXC untuk container dalam satu antarmuka, sehingga tidak
perlu memilih dua produk terpisah.

Yang paling berguna saat belajar adalah snapshot. Kamu bisa mengubah konfigurasi
jaringan, merusaknya, lalu mengembalikan keadaan semula dalam hitungan detik.

## Satu hal yang tidak boleh ditiru

Penyimpanan lokal di mesin tunggal bukan tempat yang aman untuk data produksi.
Kalau disk mati, semua VM ikut hilang. Untuk lab, itu tidak masalah — selama kamu
tidak menyimpan sesuatu yang tidak bisa dibuat ulang.

Aturan yang saya pakai: kalau sebuah VM butuh waktu lebih dari satu jam untuk
dibangun ulang dari nol, konfigurasinya harus ikut masuk version control.

## Urutan pemasangan

1. Pasang Proxmox di mesin bekas lewat USB.
2. Buat satu VM Linux sebagai jaringan dasar, jangan langsung banyak.
3. Pelajari bridge jaringan — `vmbr0` adalah kunci untuk memahami trafik di sini.
4. Baru tambahkan service: satu per satu, dengan snapshot sebelum setiap perubahan.

Banyak orang langsung memasang dua belas service sekaligus, lalu kehilangan waktu
berhari-hari mencari masalah di jaringan yang tidak pernah mereka rancang sendiri.

## Yang bisa dicoba

Kalau kamu punya satu mesin bekas yang menganggur, pasang Proxmox di atasnya lalu
bangun tiga VM: satu router, satu web server, dan satu database. Hubungkan ketiganya
dalam satu bridge dan matikan satu per satu untuk melihat bagaimana mereka saling
bergantung.
