---
title: "Install PostGIS Extension pada PostgreSQL 9.6 di CentOS 7"
description: "Langkah-langkah instalasi dan konfigurasi ekstensi spatial database PostGIS pada PostgreSQL 9.6 di CentOS 7 lengkap dengan pengujian query GIS."
pubDate: 2018-06-11
tags: [postgis, postgresql, centos, gis, database]
draft: false
---

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirONcOyzVpGVrubGv66lEU7LJzAoRN8rPVdMTbwVwGiA84bdy0cFnNUaK5TcrqEMqcgESp6PCbcz8O-3loEsWrJ1hYlcxZEsaVSs4c7cuC8zYK5Hpiqd6sxatGXT45qhHodX5kGHPw4af2/s1600/postgis-logo.png)

**Pengenalan**

PostGIS is a spatial database extender for PostgreSQL object-relational database. postgis menambahkan support untuk geographic objects allowing location queries untuk dijalankan dalam  SQL.

**Langkah - langkah Installasi PostGIS pada PostgreSQL di CentOS 7 :**

1. Pastikan anda sudah menjalankan tutorial sebelumnya untuk installasi postgresql 9.6 di centos 7 di [https://ajikamaludin.blogspot.com/2018/06/langkah-installasi-postgresql-96-di.html](https://ajikamaludin.blogspot.com/2018/06/langkah-installasi-postgresql-96-di.html)

2. Untuk menginstall postgis mengikuti dari tutorial sebelumnya anda dapat langsung memasukan perintah , seperti gambar dibawah ini

```bash
#yum install postgis2_96 postgis2_96-client ogr_fdw96 pgrouting_96
```

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixpLFFCCBgbxsxQRgU5Pri5vcNiVmk7-FHMiroi9aSffEuUFYu8zqGzXrSTqeMwV00ka4-EDiy7DLzFtbwiktY8H3lFEDlgkSucMpbsM5guKLPvhV6-QnETzOVjY3LpIhjCCvGDNj2e9cS/s400/1.png)

installasi postgis extensial harus menyesuikan dengan versi postgres yang anda gunakan dan pastikan anda sudah menambahkan repostori EPEL pada centos yang dapat anda lihat pada tutorial saya sebelumnya di Langkah awal setelah installasi CentOS 7 : [https://ajikamaludin.blogspot.com/2018/06/langkah-awal-dalam-konfigurasi-centos-7.html](https://ajikamaludin.blogspot.com/2018/06/langkah-awal-dalam-konfigurasi-centos-7.html)

3. Setelah menginstall extension postgis pada database yang akan anda gunakan sebagai database gis harus anda berikan query dibawah ini , sekaligus kita akan melakukan uji coba seperti gambar dibawah ini masukan query di bawah ini secara berurutan

```bash
#su - postgres
```

```bash
$psql
```

```bash
#create database gistest;
```

```bash
#\connect gistest;
```

```bash
#CREATE EXTENSION postgis;
```

```bash
#CREATE EXTENSION postgis_topology;
```

```bash
#CREATE EXTENSION ogr_fdw;
```

```bash
#SELECT postgis_full_verison();
```

pastikan menghasilkan output yang sama seperti gambar dibawah bawah ini,

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOUpdLXaEPljshfFGnxJciWe7tSKVvggxHIH1Kcng6nT6oJ8rxn7D-xF2MghaxS8CI5lK9K_p0DUhyphenhyphen3yHv64iW-NwPfiucRD8zOnFchdgFQFABkhStpAFnTZ4H0ynTY4Di0Z4Q8gm_021e/s400/2.png)

ingat untuk setiap database yang anda buat anda harus memasukan perintah dibawah secara manual jika database tersebut akan digunakan untuk gis

```bash
#CREATE EXTENSION postgis;
```

```bash
#CREATE EXTENSION postgis_topology;
```

```bash
#CREATE EXTENSION ogr_fdw;
```

```bash
#SELECT postgis_full_verison();
```

pada perintah  '#SELECT postgis_full_verison();' pastikan output sesuai pada gambar diatas.

Link Terkait :

**Installasi CentOS 7** : [https://ajikamaludin.blogspot.com/2018/06/langkah-langkah-installasi-centos-7.html](https://ajikamaludin.blogspot.com/2018/06/langkah-langkah-installasi-centos-7.html)

**Langkah awal setelah installasi CentOS 7** : [https://ajikamaludin.blogspot.com/2018/06/langkah-awal-dalam-konfigurasi-centos-7.html](https://ajikamaludin.blogspot.com/2018/06/langkah-awal-dalam-konfigurasi-centos-7.html)

**Installasi Apache2 dengan PHP 7.2 di CentOS 7**:

[https://ajikamaludin.blogspot.com/2018/06/langkah-installasi-web-server-apache-24.html](https://ajikamaludin.blogspot.com/2018/06/langkah-installasi-web-server-apache-24.html)

**Installasi MariaDB 10 di CentOS 7**:

[https://ajikamaludin.blogspot.com/2018/06/langkah-installasi-mariadb-102-di.html](https://ajikamaludin.blogspot.com/2018/06/langkah-installasi-mariadb-102-di.html)

**Installasi PostgreSQL 9.6 di CentOS 7**:

[https://ajikamaludin.blogspot.com/2018/06/langkah-installasi-postgresql-96-di.html](https://ajikamaludin.blogspot.com/2018/06/langkah-installasi-postgresql-96-di.html)

**Installasi PostgreSQL 9.6 PostGIS extension di CentOS 7** : [https://ajikamaludin.blogspot.com/2018/06/langkah-installasi-postgis-extension.html](https://ajikamaludin.blogspot.com/2018/06/langkah-installasi-postgis-extension.html)
