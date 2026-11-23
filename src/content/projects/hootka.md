---
title: "Hootka: Platform Kuis Interaktif Realtime"
description: "Aplikasi kuis online multiplayer realtime seperti Kahoot yang dibangun dengan Laravel, Inertia, React, dan WebSocket engine Soketi."
pubDate: 2024-07-08
stack:
  - "Laravel"
  - "Inertia.js"
  - "React"
  - "Soketi WebSocket"
status: "live"
repo: "https://github.com/ajikamaludin-dev/hootka"
demoUrl: "https://hootka.ajikamaludin.id/"
credentials: "admin@admin.com / password"
draft: false
cover: "../../assets/projects/hootka.png"
coverAlt: "Screenshot antarmuka sistem Hootka: Platform Kuis Interaktif Realtime"
---

## Latar Belakang & Kebutuhan Bisnis

Kuis interaktif berformat game show merupakan metode paling efektif untuk menjaga atensi peserta dalam seminar, pelatihan kerja (*workshop*), dan kelas pembelajaran. Namun platform komersial sering mengenakan biaya lisensi berlangganan yang mahal untuk jumlah peserta tertentu.

Hootka dibangun sebagai platform kuis realtime mandiri (*self-hosted*) yang ringan dan sanggup menampung puluhan hingga ratusan pemain serentak tanpa latensi berarti.

## Fitur Kunci

- **Lobby Game dengan PIN Room:** Peserta cukup mengakses tautan via ponsel dan memasukkan PIN room tanpa perlu mendaftar akun.
- **Sinkronisasi Pertanyaan Realtime:** Tampilan soal dan opsi jawaban yang muncul serentak di layar utama presenter dan gawai peserta.
- **Perhitungan Skor Berbasis Waktu:** Makin cepat peserta memilih jawaban yang benar, makin tinggi poin yang diperoleh.
- **Leaderboard Dinamis:** Animasi papan peringkat interaktif setelah setiap sesi pertanyaan berakhir.

## Arsitektur Teknis

Sistem menggunakan **Soketi** (server WebSocket berbasis uWebSockets.js berkinerja tinggi yang kompatibel dengan protokol Pusher). Broadcast event dari Laravel dikirim dalam hitungan milidetik ke seluruh klien React yang terhubung.
