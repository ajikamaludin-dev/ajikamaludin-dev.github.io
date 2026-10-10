---
title: Sistem distribusi properti untuk Redawning
description:
  Merancang ulang pipeline pemrosesan data properti di lingkungan AWS sehingga waktu
  proses turun dan akurasi listing meningkat di ratusan properti.
pubDate: 2026-10-10
stack: [Python, PHP, AWS]
status: live
draft: true
---

## Konteks

Redawning adalah perusahaan yang mengelola distribusi listing properti. Masalahnya bukan
kurangnya data, melainkan waktu yang dibutuhkan untuk memproses data itu sehingga listing
yang tampil di berbagai saluran tetap akurat.

Sebelum dioptimalkan, pemrosesan berjalan lama dan selalu ada jeda antara data masuk dan
listing diperbarui. Di ratusan properti, jeda itu langsung terasa.

## Yang dikerjakan

Pemrosesan data dirancang ulang dengan Python dan PHP di lingkungan AWS. Fokusnya pada
dua hal: memangkas waktu proses, dan mencegah data yang tidak konsisten sampai ke listing.

Hasilnya terukur di dua sisi — waktu pemrosesan data turun 40%, dan akurasi listing
meningkat di lebih dari 300 properti.

## Catatan teknis

Bagian yang paling menentukan bukan pilihan bahasa, melainkan di mana batas antara
proses sinkron dan asinkron ditarik. Memproses semua data di satu request terasa sederhana
sampai volume naik, dan saat itulah pemisahan tahap menjadi penting.

Integrasi dengan layanan AWS yang dipakai harus dirancang supaya kegagalan di satu tahap
tidak menghapus hasil tahap sebelumnya. Tanpa itu, satu retry dapat mengulang pekerjaan
yang sudah selesai.
