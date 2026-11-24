---
title: "Docmon: Monitoring Dokumen & Reminder Email"
description: "Aplikasi pemantauan masa berlaku dokumen legal dan kontrak dengan notifikasi email berkala serta alur approval dokumen instan via email."
pubDate: 2024-10-05
stack:
  - "Laravel"
  - "Inertia.js"
  - "React"
  - "Cron Queue"
status: "live"
repo: "https://github.com/ajikamaludin-dev/monitor-doc"
demoUrl: "https://docmon.panelawan.my.id/"
credentials: "admin@admin.com / password"
draft: false
cover: "../../assets/projects/docmon.png"
coverAlt: "Screenshot antarmuka sistem Docmon: Monitoring Dokumen & Reminder Email"
---

## Latar Belakang & Kebutuhan Bisnis

Perusahaan memiliki ratusan dokumen penting dengan masa kedaluwarsa: izin operasional usaha, polis asuransi armada, kontrak sewa gedung, sertifikasi ISO, hingga perjanjian kerja waktu tertentu (PKWT). Terlewatnya perpanjangan izin dapat berujung sanksi administratif dan kerugian bisnis besar.

Docmon menyediakan sistem pengawasan otomatis masa berlaku dokumen perusahaan agar perpanjangan izin tidak pernah terlambat lagi.

## Fitur Utama

- **Reminder Email Bertingkat:** Pengiriman email peringatan berkala sebelum dokumen kedaluwarsa (misalnya H-60, H-30, H-7, dan H-1) kepada pihak yang bertanggung jawab.
- **Persetujuan (*Approval*) via Email:** Manajemen dapat menyetujui perpanjangan dokumen langsung dari tautan aman di email tanpa harus membuka aplikasi di desktop.
- **Repositori Berkas Terenkripsi:** Arsip digital dokumen fisik tersimpan aman di server dengan akses berlisensi.
- **Dasbor Status Dokumen:** Visualisasi lampu indikator warna (hijau, kuning, merah) untuk membedakan dokumen aktif, mendekati kedaluwarsa, dan kedaluwarsa.

## Arsitektur Teknis

Menggunakan sistem **Laravel Task Scheduling (Cron)** dan **Queue Workers** untuk memastikan ribuan pengecekan tanggal dokumen berjalan efisien di background tanpa membebani server utama.
