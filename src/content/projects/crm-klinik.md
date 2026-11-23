---
title: "CRM Klinik Kecantikan & Resep Digital Pasien"
description: "Sistem CRM untuk klinik estetika dan dokter kecantikan dengan riwayat treatment, rekam medis pasien, dan pembuatan formulasi resep digital."
pubDate: 2024-05-02
stack:
  - "Laravel"
  - "Inertia.js"
  - "React"
  - "MySQL"
status: "live"
demoUrl: "https://crm01.panelawan.my.id"
credentials: "admin@admin.com / password"
draft: false
cover: "../../assets/projects/crm-klinik.png"
coverAlt: "Screenshot antarmuka sistem CRM Klinik Kecantikan & Resep Digital Pasien"
---

## Latar Belakang & Kebutuhan Bisnis

Klinik kecantikan memiliki kebutuhan pencatatan yang sangat spesifik: riwayat perawatan kulit pasien (*treatment logs*), reaksi alergi terhadap bahan aktif tertentu, serta formula racikan krim medis dokter yang harus disesuaikan secara berkala.

Sistem CRM Klinik Kecantikan mengintegrasikan pencatatan rekam medis dermatologi dengan relasi pelanggan untuk meningkatkan kepuasan dan repeat visit pasien.

## Fitur Kunci

- **Profil & Rekam Medis Pasien:** Riwayat konsultasi, foto kondisi kulit sebelum-sesudah tindakan (*before/after*), dan catatan alergi.
- **Formulasi Resep Digital:** Dokter dapat menyusun racikan obat dan krim dengan dosis yang terkontrol rapi.
- **Jadwal Janji Temu (*Appointment*):** Manajemen antrean dokter dan reservasi treatment per ruangan/beautician.
- **Riwayat Belanja & Produk Rekomendasi:** Membantu tim konsultan klinik memberikan saran produk skincare lanjutan yang relevan.

## Arsitektur Teknis

Data privasi pasien dilindungi dengan enkripsi di level aplikasi dan pembatasan peran ketat antara dokter, perawat, kasir, dan manajemen klinik.
