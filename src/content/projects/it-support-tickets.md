---
title: "IT Support Tickets: Dashboard Manajemen Bantuan"
description: "Sistem dashboard IT support internal berbasis Laravel dan React SPA untuk pencatatan, pelacakan status, dan penanganan tiket tim."
pubDate: 2024-11-02
stack:
  - "Laravel"
  - "React"
  - "Tailwind CSS"
  - "TanStack Query"
  - "Zustand"
status: "live"
repo: "https://github.com/ajikamaludin-dev/it-support-tickets"
draft: false
cover: "../../assets/projects/it-support-tickets.png"
coverAlt: "Screenshot antarmuka sistem IT Support Tickets Dashboard"
---

## Latar Belakang & Kebutuhan Bisnis

Operasional teknologi informasi internal pada perusahaan sering menghadapi kendala pencatatan keluhan yang tercecer di aplikasi pesan instan pribadi atau email. Tanpa sistem helpdesk terpusat, tim IT kesulitan melacak Service Level Agreement (SLA), menentukan prioritas insiden yang membutuhkan penanganan darurat, dan memantau status penyelesaian tiket.

IT Support Tickets dirancang sebagai solusi helpdesk internal terpadu untuk mendata, mengkategorikan, dan menuntaskan tiket bantuan karyawan secara transparan dan akuntabel.

## Fitur Kunci

- **Alur Kerja Tiket Terpadu:** Siklus hidup tiket terstruktur (*Open* &rarr; *In Progress* &rarr; *Resolved* &rarr; *Closed*) dengan penanda tingkat prioritas berlabel warna (*Low*, *Medium*, *High*, *Critical*).
- **Dasbor Metrik & Status Real-time:** Kartu ringkasan KPI (total tiket, tiket terbuka, antrean prioritas kritis, dan rasio penyelesaian) dengan mekanisme auto-refresh berkala.
- **Role-Based Access Control (RBAC):** Hak akses berbasis peran bertingkat antara staf pelapor (*User*), teknisi penanggung jawab (*Agent*), dan administrator sistem (*Admin*).
- **Komentar & Riwayat Penanganan Beruntai:** Catatan interaksi dan percakapan tindak lanjut terperinci pada setiap tiket untuk dokumentasi histori troubleshooting teknis.
- **Pencarian & Filter Terindeks:** Pemfilteran instan berdasarkan kategori, urgensi, status, serta pencarian kata kunci pada judul dan deskripsi masalah.

## Arsitektur Teknis

Menggunakan pendekatan **Single Deployment Architecture**: backend **Laravel 13** bertindak sebagai REST API engine sekaligus penyedia berkas statis dari antarmuka **React 19 SPA** (dibangun menggunakan Vite dan Tailwind CSS). Autentikasi memanfaatkan stateless JWT (JSON Web Token) dengan HS256 signing, sedangkan manajemen state di frontend mengombinasikan **Zustand** untuk status sesi lokal dan **TanStack Query** untuk sinkronisasi cache data server.
