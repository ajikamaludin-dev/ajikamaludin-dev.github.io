---
title: "Tabungan Sekolah: Rekap Simpanan Siswa"
description: "Aplikasi pencatatan tabungan nasabah/siswa sederhana untuk sekolah dasar dan TPA dengan rekap transaksi setor-tarik dan cetak mutasi saldo."
pubDate: 2024-09-25
stack:
  - "Laravel"
  - "Inertia.js"
  - "React"
  - "MySQL"
status: "live"
repo: "https://github.com/ajikamaludin-dev/laravel-tabungan"
demoUrl: "https://tabungan-demo.panelawan.my.id"
credentials: "admin@admin.com / password"
draft: false
cover: "../../assets/projects/tabungan-sd.png"
coverAlt: "Screenshot antarmuka sistem Tabungan Sekolah: Rekap Simpanan Siswa"
---

## Latar Belakang & Kebutuhan Bisnis

Kegiatan menabung di sekolah dasar melatih literasi keuangan anak sejak dini. Namun, jika guru kelas harus mencatat ratusan setoran uang koin dan kertas di buku tulis setiap pagi, waktu belajar mengajar menjadi tersita untuk tugas administratif.

Tabungan Sekolah mendigitalisasi proses teller mini sekolah dengan alur setor-tarik yang secepat kasir minimarket.

## Fitur Kunci

- **Buku Nasabah Per Kelas:** Manajemen data siswa berdasarkan kelas dan tahun ajaran aktif.
- **Transaksi Setor & Tarik:** Input nominal dengan validasi otomatis saldo mencukupi saat proses penarikan dana.
- **Buku Mutasi Siswa:** Riwayat saldo tabungan siswa yang dapat diekspor atau dicetak berkala untuk laporan kepada orang tua.
- **Rekapitulasi Total Kas Bank Mini:** Memastikan jumlah fisik uang tabungan di brankas sekolah selalu klop dengan neraca sistem.

## Arsitektur Teknis

Menggunakan **Laravel** dan **Inertia.js/React** dengan validasi form instan untuk meminimalkan salah ketik digit nominal setoran tabungan.
