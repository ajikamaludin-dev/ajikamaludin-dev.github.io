---
title: "PO Email Approval: Persetujuan Pengadaan Barang"
description: "Sistem persetujuan Purchase Order berbasis email untuk mempercepat pengadaan barang perusahaan melalui one-click signed URL tanpa login rumit."
pubDate: 2024-02-20
stack:
  - "Laravel"
  - "Inertia.js"
  - "React"
  - "Signed URL"
status: "live"
demoUrl: "https://approval.panelawan.my.id/"
credentials: "admin@admin.com / password"
draft: false
cover: "../../assets/projects/approval-po.png"
coverAlt: "Screenshot antarmuka sistem PO Email Approval: Persetujuan Pengadaan Barang"
---

## Latar Belakang & Kebutuhan Bisnis

Proses persetujuan pengadaan barang (*Purchase Order*) di perusahaan sering terhambat saat pejabat pengambil keputusan sedang dinas luar atau rapat eksternal. Membuka sistem ERP desktop hanya untuk menekan satu tombol persetujuan dinilai lambat dan memperlambat rantai pasok perusahaan.

PO Email Approval menyajikan solusi ringkas di mana rincian belanja dikirim langsung ke email direksi lengkap dengan tombol keputusan instan.

## Alur Kerja One-Click Approval

1. **Pengajuan PO:** Tim purchasing memasukkan rincian item, perbandingan vendor, dan estimasi biaya ke sistem.
2. **Pengiriman Notifikasi Email:** Sistem mengirimkan email resmi berisi ringkasan belanja dan lampiran PDF penawaran harga.
3. **Persetujuan Instan:** Pimpinan cukup menekan tombol *Approve* atau *Reject* langsung dari aplikasi email di ponsel.
4. **Verifikasi Kriptografis:** Permintaan divalidasi menggunakan *temporary signed URL* dengan batas waktu berlaku, tanpa mengharuskan pimpinan login ulang.

## Arsitektur Teknis

Mengandalkan fitur **Signed URLs** bawaan Laravel yang dilindungi tanda tangan kriptografis SHA-256 untuk menjamin integritas parameter persetujuan terhadap risiko manipulasi link.
