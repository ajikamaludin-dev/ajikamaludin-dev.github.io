---
title: "DTI Event: Manajemen Acara & Kalender Jadwal"
description: "Aplikasi pengelolaan konferensi dan pelatihan kerja terpadu dengan basis data peserta, pemateri, panitia, dan visualisasi kalender interaktif."
pubDate: 2024-03-10
stack:
  - "Laravel"
  - "Inertia.js"
  - "React"
  - "FullCalendar"
status: "live"
repo: "https://github.com/ajikamaludin-dev/laravel-event"
demoUrl: "https://dti.panelawan.my.id/"
credentials: "admin@admin.com / password"
draft: false
cover: "../../assets/projects/dti-event.png"
coverAlt: "Screenshot antarmuka sistem DTI Event: Manajemen Acara & Kalender Jadwal"
---

## Latar Belakang & Kebutuhan Bisnis

Penyelenggaraan acara pelatihan, workshop, dan seminar berseri sering terkendala tumpang tindih (*clashing*) jadwal antara ketersediaan ruangan, pemateri, dan kelompok peserta.

DTI Event dirancang untuk memberikan transparansi penuh kepada Event Organizer dalam mengatur kalender kegiatan dan koordinasi panitia.

## Fitur Utama

- **Tampilan Kalender Interaktif:** Integrasi kalender visual untuk melihat agenda acara harian, mingguan, dan bulanan secara komprehensif.
- **Database Peserta & Kehadiran:** Rekap pendaftaran peserta dengan status konfirmasi kehadiran di hari-H.
- **Manajemen Pemateri & Narasumber:** Penjadwalan materi sesuai slot waktu dan ruang pertemuan yang tersedia.
- **Role Panitia Terarah:** Pembagian tugas kepanitiaan mulai dari bagian registrasi, logistik, hingga koordinator acara.

## Arsitektur Teknis

Memadukan backend **Laravel** dengan antarmuka **React** dan library kalender interaktif yang disinkronkan secara mulus melalui Inertia.js.
