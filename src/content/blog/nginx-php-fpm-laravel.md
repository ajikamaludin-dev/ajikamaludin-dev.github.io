---
title: Menjalankan Laravel di belakang Nginx dengan PHP-FPM
description:
  Catatan konfigurasi Nginx dan PHP-FPM untuk aplikasi Laravel, termasuk perintah yang
  biasanya terlewat ketika situs muncul 502 Bad Gateway di produksi.
pubDate: 2026-10-08
tags: [php, laravel, linux, nginx]
draft: false
---

Bagian paling membingungkan ketika Laravel pertama kali dijalankan di server bukan
kodenya, melainkan menentukan siapa yang melayani file `.php`. Nginx tidak menjalankan
PHP sendiri — ia meneruskan request ke PHP-FPM melalui socket. Kalau keduanya tidak
sepakat soal lokasi socket, hasilnya adalah `502 Bad Gateway`.

## Masalahnya

Nginx dan PHP-FPM sama-sama punya file konfigurasi, dan masing-masing punya pendapat
sendiri tentang socket yang dipakai. PHP-FPM cenderung dipasang dengan satu konfigurasi
pool bawaan, sementara Nginx perlu tahu path yang persis sama.

Cara cepat memeriksa: lihat `listen` di file pool PHP-FPM.

```bash
grep -R "^listen" /etc/php/*/fpm/pool.d/www.conf
```

Umumnya keluar `/run/php/php8.3-fpm.sock` atau `127.0.0.1:9000`. Keduanya sah, tetapi
Nginx harus memakai salah satu yang sama.

## Konfigurasi Nginx

```nginx
server {
    listen 80;
    server_name contoh.test;
    root /var/www/contoh/public;

    index index.php;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_pass unix:/run/php/php8.3-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }
}
```

Dua baris yang paling sering salah:

- `root` harus menunjuk folder `public`, bukan folder proyek.
- `SCRIPT_FILENAME` memakai `$realpath_root`, bukan `$document_root`. Perbedaannya baru
  terasa kalau folder proyek mengandung symlink.

## Urutan pemeriksaan

Kalau tetap muncul 502, cek berurutan — jangan lompat:

1. Apakah PHP-FPM berjalan? `systemctl status php8.3-fpm`
2. Apakah socket benar-benar ada? `ls -l /run/php/`
3. Apakah path `root` di Nginx valid? `nginx -t`
4. Apakah `public/index.php` bisa diakses user `www-data`?

Langkah keempat sering terlewat. Sistem Linux dengan AppArmor aktif dapat menolak
`www-data` membaca folder proyek walaupun permission Unix sudah benar.

## Yang bisa dicoba

Kalau kamu punya aplikasi Laravel yang belum pernah dijalankan di server, pasang
Nginx dan PHP-FPM di mesin percobaan dulu, lalu jalankan urutan di atas tanpa menambah
konfigurasi lain. Begitu halaman kosong Laravel tampil, barulah tambahkan konfigurasi
demi konfigurasi. Memasang semuanya sekaligus membuat sumber masalahnya tidak
terlacak.
