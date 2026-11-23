---
title: "Install KVM Server Di Debian 7 Full CLI"
description: "Panduan instalasi dan konfigurasi hypervisor KVM (Kernel-based Virtual Machine) di Debian 7 murni berbasis Command Line Interface (CLI)."
pubDate: 2014-08-13
tags: [kvm, virtualization, debian, linux, sysadmin]
draft: false
---

**KVM (Kernel-based Virtual Machine)** adalah virtualisasi infrastruktur untuk kernel Linux yang mengubahnya menjadi sebuah hypervisor , yang bergabung ke dalam kernel utama Linux pada Februari 2007. KVM membutuhkan prosesor dengan ekstensi virtualisasi hardware . KVM juga telah porting ke FreeBSD dan Illumos dalam bentuk modul kernel loadable.

Sumber : [http://en.wikipedia.org/wiki/Kernel-based_Virtual_Machine](http://en.wikipedia.org/wiki/Kernel-based_Virtual_Machine)

Aplikasi ini sama halnya seperti VirtualBox, berikut langkah installasi dan konfigurasinya :

> ! konfigurasi dibawah server di remote menggunakan
aplikasi OPENSSH ! bukan masalah dan tidak apa-apa

1.Sebelumnya cek apakah komputer anda mendukung virtualisasi atau tidak, dengan perintah

```bash
egrep -c '(svm|vmx)' /proc/cpuinfo
```

Hasil Angka yang muncul menunjukan jumlah os virtual yang dapat dibuat

Anda Juga perlu Menperhatikan type prosessor anda dengan perintah

```bash
arch
```

Ada satu hasil yang muncul contoh : i686 type 32bit mengunakan installer i386

atau x86_64 untuk 64bit atau amd64

2.Install Aplikasi Untuk KVM dengan Perintah

```bash
apt-get install qemu-kvm libvirt-bin virtinst bridge-utils
```

3.Enablekan vhost_net

ikuti perintah-perintah yang ada pada gambar dibawah

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4IfEXKI8EWvbZ8Lk5IaSbvjoV2dglvRwZIfVVzHgnUur_goBGaPIuw8fUL_cPql2_vmaJT8kBqHyVHoD4jVDCTBX_TrYT7nGBdgjvxg8s2CE7j1XSIitKrTzvgVhp3qk2kWhRVTpH0SoX/s1600/Screenshot+from+2014-08-13+14:03:37.png)

4.Konfigurasi kan brigde network anda

ikuti perintah pada gambar dibawah dan isikan yang sesuai

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLyTWo1WgAT5TuUt2RVEpsgDRFJL1pOUYGGPZEdVOeV4ovAG9fBKukZy0754xfmGCUd4OBe3u3aeuD9U2fjCLTM71uutSWKYajh1gR7vc9GGOIJsih8g3lVQbqzGW5e6OFTF55Z4Cj_EuJ/s1600/Screenshot+from+2014-08-13+14:04:41.png)

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8H73GcfzbWl0gLlKpC4EzvIWd3JfPlyE_lzwItjCx8y2iFJfzYJ_3agEhbwOH5RxcBLoI9LcEDinHBOwVR8VimbwJ_IC0zbhZEs-slv47G02b7NsxCPagiv8VsRo70wI1AYXb016vjCrF/s1600/Screenshot+from+2014-08-13+14:05:04.png)

dari yang diatas menjadi yang dibawah

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIqrzV_DGnZodXeSJulp4vI-lFSteZktAvOD_ulyEEQxVnMQUo-_I1W3Di-HoWJT55tDT2R-mocNmZ6fLCGxKspaFvGmpWU433zrHOEgAQggxgKUTM0wf0fZC0GA4T0HIU8Opsd9UvirV7/s1600/Screenshot+from+2014-08-13+16:06:21.png)

restart network anda dengan perintah " *service networking restart* " dan reboot server anda

5.Buat lokasi Penyimpanan dengan perintah

```bash
mkdir -p /var/kvm/images/
```

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjC85zd5LFE7AtmAin4ULQaVJKnuElkePEwLa0AGY_QdTbDkcRu4cLMG1meC6dtzZW_7nhV8mpZm4qvGo7ljz7yB07bzu6SNuWdEcnYtQPEaHG0zLnI4uEL1DDgvhlXAbIcluogCl9OpWyW/s1600/Screenshot+from+2014-08-13+16:08:04.png)

6.Memulai Mengistall OS Virtual secara CLI

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWer7f4mcqUW4ubt5yhIPPC21c71-4bCLz_Y4THifW7cDYBErQbew-Y76wq1ztjoP1aQg-7gKkIvG3nje64zvdfT_7SmC6nN2I-a7xd-c7USLF_v4G5XXkLZkfkYnyurLIKFOw3cZq9EEs/s1600/Screenshot+from+2014-08-13+16:10:50.png)

```bash
virt-install -n namaVM -r 2048 -f /var/kvm/images/namaVM.img
-s 10 --vcpus=1 --os-type linux --os-variant=debianwheezy --network bridge=br0 --nographics --location='http://ftp.riken.jp/Linux/debian/debian/dists/wheezy/main/installer-amd64/' --extra-args='console=tty0 console=ttyS0,115200n8 serial'
```

virt-install berarti aplikasi yang kita gunakan secara cli untuk membuat VM(virtual machine)
-n adalah nama VM yang kita akan buat
-r adalah kapasitas ram yang akan digunakan VM
-f adalah lokasi disk dari VM
-s adalah ukuran disk yang digunakan VM
--vcups adalah banyak cpu virtual yang akan digunakan
--os-type adalah veri OS dari VM
--network adalah network yang digunakan VM
--location adalah lokasi instalasi di mana

link location 32bit debian : http://ftp.riken.jp/Linux/debian/debian/dists/wheezy/main/installer-i386/

link location 64bit debian : http://ftp.riken.jp/Linux/debian/debian/dists/wheezy/main/installer-amd64/

link location 32bit CentOS : http://mirror.facebook.net/centos/6.5/os/i386/

link location 64bit CentOS :http://mirror.facebook.net/centos/6.5/os/x86_64/

--extra-args menentukan parameter yang diatur dalam kernel

Untuk lebih jelas dan gamblang masukan perintah "man virt-install"

7. Anda dapat melanjutkan proses installasi seperti biasa yang anda pilih seperti gambar-gambar dibawah :

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-Wa3ZgtYEuIN9wGoAgNlLIBCpZZAYPf5ud98T-4mFPAr44XW936b-0hfaXgy-rnwI_QFx8PYOOrJj8MmlYQYJs1Dfyy6ovCf4CJDjqjyvgGd_ouEkCk6iO9gVnwQuxVzelZ__776HZED0/s1600/Screenshot+from+2014-08-13+16:10:56.png)

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSYzDJfjZeKlH_Qu90Bts4BCEt4s16DmskgXxNLGcE1uaJl8GhkUQqmhmAQPzVUSElTLF5L-jeMjYdMduUtSGohHYyJ4iBeT5WyD-x0IOmK0yRxi7MeV4gtjleaBFP1r5RjuF0O3aPbiey/s1600/Screenshot+from+2014-08-13+16:10:57.png)

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2dCe635y6q4dk0AcmQbLactvUSdL6KsQTBxAL9kLt95R7_i-3eM21-WhlPUNDwqZQIsYfCSxku6fvx-e2wQgUB3OpKQ1qs8I8soDyGdYJnYT_LbUebBbqmusuwJV5I_EdOrSjII4Q4X5F/s1600/Screenshot+from+2014-08-13+16:11:01.png)

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtoimWzklcuET1OiRr_MVJSuaJLaJvDtS026u5yvqIHXB8xAU9RXyfkvSLko2GZpH_q_EjiEK7FF4WcP-xHRXBeWgSq63P4vmjFv4MjKPDPA6c7J8BjQ_AvGwbIayt6pm8ZAVrVlWWLw8c/s1600/Screenshot+from+2014-08-13+16:11:11.png)

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtGjlKQIoss43rvVyQV3KvMxiZ_Apa2_j4ViC8zGq7ZVKMbClJ3UAfn58pHvSnuMDWS1PL54XpaIiMIHh84-h9rpJqSFUYMBxSB6I0sfpsuGhpuEm5o0D2J4atE_rySK_3JiBn84j7MNmv/s1600/Screenshot+from+2014-08-13+16:11:18.png)

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihSO92j76OMmW-exsoJZOxn7pzLoFwA99qtAiRbUrat7k9NixJaVbnvfxQeSyY-JOl-ljHcdoBUbHd3HlRqrWxwsrn21lCqlkmo00xmHO5mTCx7BjuVNtkXUsZMB0DSk-_eikGXs6VmRoo/s1600/Screenshot+from+2014-08-13+16:11:23.png)

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhac5OhetzxrckTpsD2GoKvfYqrSLq5-C2e5u1esxBnOZR5EbrQ-lrW3n0o5QD0kS70TcqlMY5mS6ptnBGL_Ih3H1goHNu4ZQcLJk7Qco4i7hiiXBz9ID1eGlULPgajMfbhc1krDJOWafhG/s1600/Screenshot+from+2014-08-13+16:11:25.png)

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPItDYn-SGKyQhmDsTWad7UnxuR5RdEFsq7eS9S7NR93zeybRedUbiBPaDORVkyj-MNbeLQDZWYCbEC7aJGG3RAcW792CgrG6mYUBB5Q8qwrhj_8UALao99mQrOahyyCxOAAiGbujpLr7k/s1600/Screenshot+from+2014-08-13+16:11:31.png)

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgre_YKT7vuLY_unmPguVvRyqEWtvRw11Egr9addPEMqC24T4qsmDPMacWSMpGXzuoxzUsFKXGoFwwqRwPCKFNDsOqpOc7-vmkSQxeR4Pn7SoRRf9e941sx9hAPKclx7zgpczviufJD05G4/s1600/Screenshot+from+2014-08-13+16:11:35.png)

Gambar Dibawah ini adalah Grub linux yang sudah selesain terinstall

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiuxYLaSgTLdbJrwfOfYMyfmUBwctaMOAo5U7yXcTYxr-Ojfjp_9g1wt-GRjBBPYysbvycmJUkYShUfdaEoVJsB548jMnJH4fY3I2GVzQVmiGOYq4LfgKlmTa0ynJ54T8pybrdwoGJK9DY/s1600/Screenshot+from+2014-08-13+16:12:44.png)

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKmcbWg3nKz566MYOcSBi19LypB8DApeSaVx47XfuQGYGLylKEdfx8oFvkvjqI8HvPyKsWmXdkeXAcWyxdWX9L-dzSkLtIaPArUrrlQjnLoUwdYf2r4bqlSCI6O9sZDVfh-Q-SvJP-73Hf/s1600/Screenshot+from+2014-08-13+16:12:47.png)

Gambar Dibawah ini login ke VM yang anda install

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmR2Vhg0gwzNgCBOrwomp8b9bZMZWl8toO42fz2tzG4894ru-vp0PJ4_-92b0tK0SZklLy54J9HACGEdIvxbE9zuWBJo8NslKCju3RLP5wPmFXtxzxVv0S8J07ilgD9hsbTwxgn4V4CCBC/s1600/Screenshot+from+2014-08-13+16:12:53.png)

Setelah Login Anda dapat kembali ke OS server anda yang sebenarnya dengan menekan kombinasi CTRL + ]

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZryiLsPpCNfdibda7sqy_T_CdnJww2yC3VuzRyh6fwhkA_NrRVVJOYIEdTcIUdWEtljqo7XShBQPGBVbgNm9OhcvntnaWeDXARnMbb6d1goxEFo_g0k_Ni2s6SnYLG3wVpWiV_ggk9-Ut/s1600/Screenshot+from+2014-08-13+16:14:36.png)

untuk masuk ke VM anda lagi cukup masukan perintah ' virsh console (name dari VM)'.

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtLPvVrzc-9ehakeKIHdAsev2AQlNR5jkFhWlACjnZJhouzDdXe4qgSv5tZhg6SnQFKuFauR5OurBkbQFe7jHiJhqpVtZjLHFCtb7NWUWxjAnfzqOerRXajxNi5OUS6Gno9Prb0PNT6aRN/s1600/Screenshot+from+2014-08-13+16:13:23.png)

Seperti gambar dibawah tekan ENTER ketika muncul Escape character is ^]

![Gambar](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoB-P3JfW5XO-2Ys5EyjE3iP-eRgijVCDLeRlGzIbfjGXsAGVdHr9OiIwUkfMznTh54nIM53R6y7kk9K1Yf9mhTsNXRnyQS69GRuCGUJO-oIXzcCF_ULnNSHEPU78qI0nYExWCnMQD4Gys/s1600/Screenshot+from+2014-08-13+16:14:17.png)

Masing Belum paham [Klik disini](http://www.server-world.info/en/note?os=Debian_7.0&p=kvm&f=1)
