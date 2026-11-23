---
title: "App Notes: Manajemen Klien & Tracking Proyek"
description: "Aplikasi pencatatan klien dan pelacakan progres proyek sederhana untuk agensi digital, software house, dan konsultan independen."
pubDate: 2024-11-20
stack:
  - "Laravel"
  - "Inertia.js"
  - "React"
  - "MySQL"
status: "live"
demoUrl: "https://app-notes.panelawan.my.id"
credentials: "admin@admin.com / password"
draft: false
cover: "../../assets/projects/app-notes.png"
coverAlt: "Screenshot antarmuka sistem App Notes: Manajemen Klien & Tracking Proyek"
---

## Latar Belakang & Kebutuhan Bisnis

Sebagai software developer independen atau agensi skala kecil, mencatat kesepakatan fitur (*scope of work*), kontak penanggung jawab klien, tenggat waktu penyerahan (*milestone*), serta status termin pembayaran sering tercecer di berbagai aplikasi perpesanan.

App Notes dirancang sebagai mini-CRM terfokus untuk menjaga riwayat seluruh proyek pengembangan aplikasi tetap rapi dan terorganisir.

## Fitur Kunci

- **Daftar Klien Terpusat:** Profil perusahaan, penanggung jawab utama (PIC), nomor kontak, dan riwayat kerja sama.
- **Tracking Milestone Proyek:** Pemantauan progres tahap demi tahap (Analisis, Desain, Development, UAT, Rilis).
- **Catatan Teknis & Kredensial Lingkungan:** Repositori catatan arsitektur, tautan repository, dan catatan konfigurasi server klien.
- **Status Invoice & Termin:** Pengawasan jadwal penagihan pembayaran termin proyek.

## Arsitektur Teknis

Dibangun dengan arsitektur **Laravel** dan **Inertia.js/React**, menawarkan respon halaman yang gesit dan antarmuka bersih yang memprioritaskan keterbacaan data.
