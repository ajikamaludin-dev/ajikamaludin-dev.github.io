---
title: "Install LAMP (Apache, MariaDB 10, PHP 7.2) di Ubuntu 18.04"
description: "Panduan langkah demi langkah menginstall LAMP stack (Apache 2.4, MariaDB 10, PHP 7.2) di Ubuntu Server 18.04 lengkap dengan pengujian modul."
pubDate: 2018-06-17
tags: [lamp, ubuntu, apache, mariadb, php]
draft: false
---

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgltFMVzSdwCJqBRHlCr54EeePs9XD4Bm4QZEK4apQDoCR8EmTCuF-6c8U4kRPPjxW9pjkpvAS6r5S8QiXBLEbq1fKvFjYzTJzCYuElU0JLBDkHTE1LpN4kiXN7FUSRQCGEQgK1au1M2_cJ/s320/lamp-icon-150.png)

#### Pengenalan

LAMP stack adalah sekelompok perangkat lunak open source yang digunakan untuk server web,database server dan berjalan. akronim berdiri untuk Linux, Apache, MariaDB, dan PHP.

LAMP Server (Linux, Apache, MySQL, PHP (atau Perl) adalah salah satu yang paling penting server Anda mungkin pernah mengatur. Ini akan dengan senang hati melayani sampai dinamis, situs web database-driven. Sejak server LAMP ini yang mendasari pondasi Linux itu menikmati rock-solid kehandalan, keamanan, dan dapat diinstal pada semua jenis perangkat keras (dari yang old white-box Anda memiliki multi-CPU,sampai RAID-enabled rak server).

**Langkah - langkah installasi LAMP (Linux, Apache2.4, MariaDB 10, PHP 7.2)  di Ubuntu 18.04 ( Live Server ) :**

1. Untuk menginstall lamp di ubuntu 18.04 server maka pastikan anda sudah meng-update dan upgrade sistem anda jika belum langkah tersebut dapat anda lihat di : [https://ajikamaludin.blogspot.com/2018/06/yang-perlu-diperhatikan-setelah.html](https://ajikamaludin.blogspot.com/2018/06/yang-perlu-diperhatikan-setelah.html)

2. **( Apache2.4 )** Setelah anda melakukan langkah diatas maka anda dapat langsung melakukan installasi dengan memasukan perintah

```bash
$sudo apt install apache2
```

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIQGnqwOnY-Rie1dqwQFfTo7mkO0VkcBX7mdLbgAKMKk1bnhOr-pjY_iWcuXU717vUPhpWinnE_G5AD3d9m4XxiNOnInGFdqBdPusOJKBo7L6-kifSgXdK301h0NRAOiQvtWvZhRduNj9G/s400/1.png)

tekan enter untuk memilih Y

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghnBBSWEO55srP3DPZmUKCu85Ukgdf_Kqh19HSwWR7vJP1vTJ_RivZ2stDKTNpql7hE0nWi4zmZcWh15-gULFckhG36Q-98NXrq_fjvysPgvXinYIubIXflhbJo-tjJ3LJjjkDuVF95nIc/s400/2.png)

tunggu sampai proses installasi selesai, jika proses installasi telah selesai seperti gambar diatas maka anda dapat melakukan pengecekan apakah web server telah berjalan atau tidak dengan menggunkan perintah

```bash
$systemctl status apache2
```

atau anda dapat langsung mencoba untuk mengunjungi alamat ip web server anda seperti gambar dibawah ini, sesuaikan dengan ip server anda

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-eTtsvHy1cWDUf-Lmh1R96HF9IdM-i2K-WD8Vr_yEVe7rLVuvZs2RQ6xHtp87HhWoTjb5JE0EGzvOy9R9bR2kvTZZM-BMqM6ymbVHLjPxsrArBeHDs-T3aNKsH3npiZu83aLfteErHm-A/s400/3.png)

setelah anda menginstall apache kita dapat mengaktifkan module rewrite , tentang modul rewrite ini dapat anda baca dengan mencari referensi di internet, untuk mengaktifkan module rewrite di ubuntu 18.04 anda hanya perlu masukan perintah dibawah setelah menginstall apache

```bash
$sudo a2enmod rewrite
```

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMrRCke8Fl-pg7Tgoh89y4MNjduOYo332nd4j1pf1EfbY3GrWlDZJZ_ccEnFMG7C4j5GzOwt5ThQijg88YxwjiGCx7cOaWvQqHAOgbZ6hvvvVLOrxQon5D37tIcnOGP_NTdWL0xfb8rSpu/s400/4.png)

sebelum anda merestart apache pastikan anda menambahkan beberapa baris konfigurasi rewrite pada file site di apache anda dengan menggukan perintah

```bash
$sudo vi /etc/apache2/sites-available/000-default.conf
```

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEqE6KsYjVBpV4nwPg4YuG8Xr1QG8DdrezG6FlsQYWOfSdwJzEf2D5AzOC8yZdLSkQhudSBRyF87t6RkIjKJ0Uh1ap3G0LpcW7NtrinTGgphWlt9GS_F20qLXe3eV5E3ocZEm10sla6ca1/s400/5.png)

maka akan muncul file seperti gambar dibawah ini

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhA1q_E3tvKSkAqafj0UmsCH9r7hpJfxMdMqaDN70PKy1K0tOA6H95AZPnXHXg4Mutr1b_hF_tEpo_OVqxH25yvTTzbgaYFkg0vL9EqcFdR1GRI8WSMy1IHVg3aJBNnlEmWzvKbykaQWeWS/s400/6.png)

setelah file terbukan tekan " i " untuk masuk ke mode insert, kemudian tambahkan 5 baris konfigurasi yang ada pada gambar dibawah ini pada file konfigurasi anda

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQtcwdaMNt34WNfRx_RuUnP26_kHe5r3ewHjPC11A4voCNRpmrIM83u-3fAq-mZtLkevTcJQf0Ce8xSvva9z8k6v0rcQBzxuX6wxI07Ag_aw4SGfPmzAcFggKmUoqAHG7pxuiuqUPenqvU/s400/8.png)

anda dapat menambahkannya pada baris setelah *documentroot* seperti gambar dibawah ini

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyyfjB2VCCoMn6SHn_aYDqya1oUybAxqipv0SepRHcXMDEWPAs_Hu8Q3A_sdQbe5MDThhVQh-owlekHYSlggAC9GQcCv7EvEmlMkT9F8MQeNNpc6gJjeIrBloy0zxxSBLuHuVGvA6sznpd/s400/7.png)

setelah itu keluar dan simpan file konfigurasi anda dengan menekan " esc " untuk keluar dari mode insert kemudian tekan ":wq" untuk simpan dan keluar dan tekan enter, jika file tersebut telah anda simpan maka anda dapat merestart apache2 dengan menggunakan perintah

```bash
$sudo systemctl restart apache2
```

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQTtyCG_tNkt1evoRKgp1ImAuuI843411iTHVOGQb9DRztQK3Ln-M0FKkC156S7TtbReZwkdIu79inaJ3uSQcIGR57lHsygO589xR9dHTZL9g2EpOruCAB-KmaC-n-NculP6DZv-68SGnX/s400/9.png)

pastikan apache berhasil di restart untuk memastikannya anda dapat mengakses ip web server anda melalui browser atau dapat menggukan perintah dibawah ini

```bash
$sudo systemctl status apache2
```

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmjAl62VDhuqfZcIYeRx-XFnrsryChww9yPVcG1XJg7vAN6zfgJnNE1h_qG2hRA2aHnT5dzKvTygg3TGHALEU2JAc4uz2MsqckOq83fzSmq4L3a0E7sIn9IGaX-rrtanMQSarKogomRT4A/s400/10.png)

3. **( PHP 7.2 )** Salah satu hal yang baru di ubuntu 18.04 adalah php bawaan yang sudah menggukan versi paling akhir pada saat rilis yaitu 7.2 anda dapat menginstall php 7.2 dan beberapa ektensinya di ubuntu dan juga mod php pada apache agar dapat menjalakan php melalui web server anda dengan menggukan perintah

```bash
$sudo apt install php php-cli php-gd php-mbstring php-xml php-mysql php-zip libapache2-mod-php
```

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWpouAvaCIbHwXvZJCnwoItFnK9C-pCmQaVk8CRzzzRguyAEwOAQ3gp24uXmC4meFQoQLlPdZePIuIKOzxjdOMlDSj_qBkrTvqOL29GwzfnYOf_E76RQ4hygZNsFgpsLy7rW0uWgifAtpm/s400/11.png)

tekan enter untuk memilih Y

setelah installasi php selesai kita dapat melakukan uji coba untuk memeriksa apakah php telah berjalan di apache atau belum dengan membuat sebuah file di documentroot apache dengan menggukan perintah

```bash
$sudo vi /var/www/html/test.php
```

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkqZN-lcbVOc3b87BMiP06em7COJzjT-o6uow-C9N7FOMMcAUAoc509Nw10rox701FKfOgMzEmcCLmfslkV6rV7kX9wLyfzfVPTlYW_wfoajzSkuTq2vcp_mrPumICGHRl__WN8lxAL6ei/s400/12.png)

maka anda akan melihat tampilan kosong karena ini merupakan file baru yang belum ada

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjlNrwwx9Nr_19wss2wsflxKbLuJmimd-xvb2VD1j8gDzVDI0HzKOmE5eMhGqt-vX5RDhUz2oPe58blu2Jk_ZAAo6A1WN8J6DDozWDAVBbDgZlGirRBh42HuaAXMKN37MReUnmNnmvTLdO/s400/13.png)

tambahkan beberapa baris berikut pada file tersebut dengan masuk ke mode insert dengan menekan " i ", kemudian masukan , seperti gambar dibawah

```bash
<?php
phpinfo();
?>
```

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQPmsDt4C3m7YbQ3_a9mOhXn2q9zHXLk4zPN2u54UkPiRyzOQIMt6W15YjtCPVH6C0k5S_uEnE1ca9Sld5STKzS5ZajXEI1FUd8KtBq7IRb6TLx9XEyK_Iif7ctmeLpvKFubHja7Scx-0q/s400/14.png)

jika sudah anda dapat keluar dan simpan dengan menekan " esc " untuk keluar dari mode insert kemudian simpan dan keluar dengan menekan ":wq" kemudian enter, setelah itu coba akses file tersebut melalui web server anda seperti gambar dibawah ini, sesuaikan alamat ip dengan alamat ip web server anda

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsMdXLo7aWZo_oStnlYBQdRmWTmRPiKsItJ94n1a8eI2D31ru5JZRnAAJ0yVls8bAQQBMOlKzvwZSMlzDF1uDK-u-zwCofYUGNEgXozL3tja5lVKPhSe8iYF2-ey2KQ_wb7sD2zaCb2yOh/s400/15.png)

4. **( MariaDB 10.1 )**Setelah berhasil menginstall php anda dapat melanjutkan ke installasi database server yang akan kita gunakan yaitu mariadb, untuk menginstall mariadb di ubuntu 18.04 server maka anda dapat langsung memasukan perintah

```bash
$sudo apt install mariadb-client mariadb-server
```

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihOtmK5N5k1LnFtbQr4tmqvBEmvy87yQqq06qEgvAr3YU0OZSnpIEhR0ee1sDzpQNXto4b63b56SDG_wgd0i1ASAtyvasT-Zp-U4BGPd_x6QAjG5LXqaKk2uzGWKZVBLN2798abEe2ZVgb/s400/16.png)

tekan enter untuk memilih Y

setelah berhasil terinstall, kita harus men-set root password untuk root password agar mariadb dapat kita gunakan user root dengan perintah dibawah ini

```bash
$sudo mysql_secure_installation
```

setelah memasukan perintah diatas maka akan keluar seperti gambar dibawah ini secara default atau bawaannya mariadb tidak memiliki password root maka ketika keluar opsi seperti gambar dibawah ini cukup tekan enter saja

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBSFDVcVX-jjcyhTs0yM2svnZOjvW6X1BCJJOhBgOKjdQLWFlvI8MIsaUKsFQaMRGGTivD5cwIoHLhIACwQUulVH4Fr578MSNWBJa_brKC-dDSpv4mPToCWLgzPlRguWA5ThxmJYQ15DRh/s400/17.png)

kemudian setelah anda melewati opsi diatas maka anda akan diberi pertanyaan untuk men-set password dari user root anda dapat langsung menekan enter untuk opsi " Y " seperti gambar dibawah ini

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgboHbpyINEFjcDmC3V4GxjYyv4rdnSkwt6HGTW7nzKPX1PDfzRcAMWGCPv-Ol0uY1Q4tax45xaew2WEP0UZki-s40Ux4sNo5tvz6YSmBAu-jxojzlglhnLoVhkTncOmVA7TJie8AgfbvXl/s400/18.png)

kemudian akan muncul "New password: "<- disini anda harus memasukan password baru untuk user root mariadb kemudian tekan enter setelah itu anda harus mengulang password yang sama untuk "Re-enter new password :" kemudian tekan enter, seperti gambar dibawah ini jika anda memasukan password yang sama/sesuai maka akan keluar text " ... Success!"

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9BW-aGW1iFEKf5XkkB1n2Ry0DzZ85tUME4CCBSyk0-XxwES0xkfVwR7hc5cPApuObC5seXOA0hA7GbAS_NFY-_Wtk-MlbbXgEI3VxSzs5hpocjgnVBCtkyLYPaSbL1HN3Lh0EOcyLpSP1/s400/19.png)

selanjutnya anda akan diminta untuk menghapus anonymous user dari mariadb cukup tekan enter untuk memulih "Y", seperti gambar dibawah ini

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgY7fexnDZbmiiS8Sp1W72TFFC73lN5JfSbBcRqkkefwCr2to-kiE-kWCASS64RZSimxUFNBF85PD0SQiYkqGzS0U5nbtc5NETpzEfhPBrMmwd9dimMpsclujFE4aKkZA0DKRUEydOOMAEb/s400/20.png)

kemudian anda akan diminta untuk menghalangi agar user root tidak dimasuki secara remote cukup tekan enter untuk memilih "Y", seperti gambar dibawah ini

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-Q8o3_YqR0zOgO3gUMgoby8kinS_-2E0k9LAG3Q7raveWRNaIqzY-YekmcNr5v5XEILwHfhVXT5W8_YZ1s1lZS2Gs-G3LHCvRfV2Yd6tpYiRmyDnO7JowqSD6afCTkxhctFyVWbDg63QM/s400/21.png)

selanjutnya anda akan diminta untuk menghapus database bawaan mariadb yaitu test untuk itu cukup tekan enter saja untuk memilih "Y",seperti gambar dibawah ini

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpTvXTzGfW4RpE73jGzrQ3aXAJKGXLEPgp163Di5op35aOREN0jS3gKbRajRu7XY9qLmaBn1syWRJwSq1e_oBrtBTjAwnTEyOoGYrNxJpxnCj5y224jK3XwFw0IjezAltBbuyo3X142FfH/s400/22.png)

kemudian anda akan diminta untuk me-reload privileges tables dari mariadb tekan enter untuk memilih "Y",

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijPfWSGklCo9vGhNqgReMC07zVBgrx-LDAgpUYYjX4unZmxSfgB1GhNxcRLjpFJ4Wyy6HTLCI0hynY37hmPBUpaoYSY3XYf_WuC8py-KJid76m25HExBCdiIuYyRXY8Sa-QrdYAS1Le3Ns/s400/23.png)

setelah semua proses diatas anda penuhi dan selesai maka akan keluar text "Cleaning up ...." seperti gambar diatas ini kemudian anda akan dikembalikan ke bash, ketika anda menggunakan mariadb di ubuntu user root pada mariadb tidak akan dapat diakses oleh user diluar root maka dari itu agar user root pada mariadb dapat diakses dari mana saja kita harus menghapus plugin pada user root mariadb dengan masuk ke mariadb dengan menggunakan perintah

```bash
$sudo mysql -u root -p
```

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguFOtth0nNJ77nr9uGaOYVU4epafgwPixt98lDYFhkXfXOmNBaXweYYcLY99EW9f6nbLrAYNrDstaGvSLSiglCTN-QWNADKnU0zY1seDa16rqAayBbJOW1y1CbE_x8-ogIy2bLXYNddImp/s400/24.png)

setelah anda masuk ke console mariadb maka masukan query berikut ini atau seperti gambar diabawah :

MariaDB [(none)]> use mysql;

MariaDB [(mysql)]> update user set plugin='' where User='root';

MariaDB [(mysql)]> flush privileges;

MariaDB [(mysql)]> quit;

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpRqw-hxgGGtLooRo6o2dexIWq7GFlXQRuz-JTCJu2iGoQGbaZ6KJuRwxREb_ZIPxInXKfwEV7qQmzW7C3omKekeahNFBnl3q3uTm7q4oS4CaYtXYUCqRnS9hntdNka-3k5W-x4nsIyr7u/s400/25.png)

maka jika anda mencoba lagi masuk sebagai user biasa tanpa sudo maka anda akan dapat masuk ke console mariadb

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgviURyvABGd8NR4b_MZysSfTp4MFs2iSSZaQAJnWprGVgaT7R5hJNNZJF65TJU3AdszoVSNgCEezjGjpUfCn84EQXWRuU_LhwmMB1Tm7I9UrgTfI-FngZ8SGOh5NaamG2pd5Hv57CpHd7g/s400/26.png)

untuk mempermudah administrasi mariadb anda dapat menggunakan phpmyadmin , phpmyadmin ini merupakan salah satu tool yang digunakan untuk mengadministrasi atau mengelola database yang ada pada mariadb , anda dapat langsung menginstall phpmyadmin di ubuntu 18.04 server dengan menggukan perintah

```bash
$sudo apt install phpmyadmin
```

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjK6Qs0prnOPvXTwb6U3gapkJ8kl_PK71rmC1eHdMKm4g_xFQaXVPcMpGsVa9uSl6zhsZ4QWsS211MPnCEYCmloJM_2-F5p0xivgLk2_trvpZ7aviYp8KPZ319E5zeoB9aXjWlGpmnq30fm/s400/27.png)

tekan enter untuk Y

kemudian dalam proses installasi akan muncul opsi seperti ini pastikan anda mengisi tanda bintang pada apache2 dengan menggunakan tombol spasi kemudian jika sudah ada tanda bintang seperti gambar dibawah ini anda dapat menekan enter

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVk0pcLZ3Co74ILhLTfdpBJHYn0_jp20BkJlN-5lHVbozLSBs2skjsfcCLeS3k1e-sibJnyELixh5MwItCifl9NquR3L8r_IV3UsazI8jnUDIbtetFtkEPKRG2MiFl1NPKIBpuIkQ8SdON/s400/28.png)

kemudian akan muncul opsi kedua seperti gambar dibawah ini setelah beberapa saat agar mempercepat dan tidak menambah beban pada database mariadb maka anda dapat memilih " *No* " dengan menekan tombol arah pada keyboard anda kemudian tekan enter

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinVGRhm0IZd3XiG0_hUyaJJNH4srdD-1G5kYAGMjuuerh7a8afAoCxL3u8xOnMVc-9mZqMtXdUkTy5nx-bn4vLZnQfOdIt_pEqNuDWuz02Az_BTkd58yos_LZPKarqfPFHb_OKPOF8PTtl/s400/29.png)

jika installasi sudah selesai anda dapat masuk ke phpmyadmin dengan mengakses ip server anda /phpmyadmin seperti gambar dibawah ini,

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7R74SBHvb_6z-8-TZQXjCfYn5cq8O2CCZnz1NhshaTFZG1-OaH6QwV_KSr4tReufmF8xtHXGj2sZW3wp1LgwXAUrRaOXGnvw-eGDfh4bqJjCwT-423gs7nPOSIZSZMu2unoCoZIcjEmGM/s400/30.png)

login dapat menggukan user root dan password yang telah anda set ketika memasukan perintah mysql_secure_installation diatas yang semestinya anda sudah ketahui

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioYAbvkUflNpnTTyJOrQanO-V04TlIzRT63UeNj8gmCfWoTOA7yDer8GMq-qgJ_JdJ5F2tqDqrh70KbKGsGUTR8D6CYfWg6wdIYu9hsXHkxh_DdbM70NNQQDgyg8aXJVXNPKVBAlqnzt94/s400/31.png)
