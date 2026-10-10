export interface Experience {
  company: string;
  role: string;
  location: string;
  mode: "Onsite" | "Hybrid" | "Remote";
  /** `YYYY-MM` atau `YYYY` kalau CV hanya menyebut tahun. */
  start: string;
  /** `YYYY-MM`, `YYYY`, atau `'present'`. */
  end: string | "present";
  /** true kalau posisinya paruh waktu. */
  partTime?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
}

/**
 * Diurutkan dari yang terbaru, sama seperti urutan di CV.
 *
 * Fakta yang sudah dikonfirmasi (README → "Fakta yang Sudah Dikonfirmasi"):
 * - Go dipakai nyata di PT Bank Raya, jadi ikut masuk `stack`.
 * - TechnoGIS hanya dicatat tahun + keterangan part-time.
 */
export const experience: Experience[] = [
  {
    company: "PT Mindo Small Business Solutions",
    role: "Software Engineer",
    location: "Yogyakarta, Indonesia",
    mode: "Hybrid",
    start: "2023-10",
    end: "2024-12",
    summary:
      "Merancang dan mengoptimalkan sistem distribusi properti untuk Redawning Inc di lingkungan " +
      "AWS. Pekerjaan intinya adalah pipeline pemrosesan data yang ditulis dengan Python dan PHP, " +
      "sekaligus menjaga agar listing yang tampil di berbagai saluran tetap konsisten dengan data " +
      "sumber. Bagian yang paling menentukan adalah menarik batas antara proses sinkron dan asinkron, " +
      "supaya kegagalan di satu tahap tidak menghapus hasil tahap sebelumnya.",
    highlights: [
      "Waktu proses data turun 40% dengan pipeline Python dan PHP.",
      "Akurasi listing meningkat di 300+ properti.",
    ],
    stack: ["Python", "PHP", "AWS"],
  },
  {
    company: "PT Bank Raya Indonesia Tbk",
    role: "Software Engineer",
    location: "Yogyakarta, Indonesia",
    mode: "Onsite",
    start: "2022-07",
    end: "2023-10",
    summary:
      "Merancang dan menjalankan framework backend untuk aplikasi pinjaman BRILINK menggunakan Go, " +
      "dengan integrasi microservices. Tiap tanggung jawab dipisah agar penanganan transaksi tetap " +
      "utuh walaupun melewati beberapa tahap. Karena service ini dipakai customer service setiap " +
      "hari, kegagalan yang terlihat oleh pengguna langsung terasa — sehingga penanganan error di " +
      "tengah alur menjadi bagian dari rancangan, bukan tambahan yang dipasang belakangan.",
    highlights: [
      "Penanganan transaksi berjalan mulus lewat microservices.",
      "Digunakan lebih dari 15 customer service representative setiap hari.",
    ],
    stack: ["Go", "PHP", "Microservices"],
  },
  {
    company: "PT Penerid Solusi Indonesia",
    role: "Software Engineer",
    location: "Klaten, Indonesia",
    mode: "Hybrid",
    start: "2019-11",
    end: "2021-07",
    summary:
      "Membangun aplikasi SaaS POS, CRM, dan ERP yang skalabel dengan PHP Laravel dan React.js, " +
      "melayani beberapa platform sekaligus dengan prioritas pada performa dan keandalan. Selain " +
      "mengembangkan aplikasi, saya merancang infrastruktur cloud di AWS EC2 untuk mempercepat alur " +
      "deployment, dan menulis dokumentasi backend maupun frontend supaya handover proyek tidak " +
      "bergantung pada satu orang.",
    highlights: [
      "Aplikasi POS, CRM, dan ERP dibangun dengan PHP Laravel dan React.js.",
      "Infrastruktur cloud di AWS EC2 dirancang untuk mempercepat alur deployment.",
      "Dokumentasi backend dan frontend ditulis untuk mempercehat handover proyek.",
    ],
    stack: ["PHP", "Laravel", "React", "AWS EC2"],
  },
  {
    company: "TechnoGIS Indonesia",
    role: "Web Developer",
    location: "Yogyakarta, Indonesia",
    mode: "Onsite",
    start: "2018",
    end: "2018",
    partTime: true,
    summary:
      "Pekerjaan paruh waktu sebagai web developer. Tugas utamanya menyederhanakan interaksi data " +
      "yang kompleks pada aplikasi GIS supaya mudah dipakai pengguna awam. Pekerjaan server juga ikut " +
      "dijalankan — konfigurasi, deployment, dan dokumentasi untuk aplikasi berbasis PHP — jadi " +
      "lingkupnya tidak berhenti di sisi antarmuka.",
    highlights: [
      "Antarmuka aplikasi GIS dibuat lebih ramah pengguna untuk 1.000+ pengguna.",
      "Peningkatan pemakaian harian 15% menurut analitik pengguna.",
      "Server dikonfigurasi, aplikasi di-deploy, dan dokumentasi PHP ditulis.",
    ],
    stack: ["PHP"],
  },
  {
    company: "SMK Umar Fatah Rembang",
    role: "IT Support",
    location: "Rembang, Indonesia",
    mode: "Onsite",
    start: "2015-08",
    end: "2016-01",
    summary:
      "Merawat komputer lab dan jaringan sekolah: perawatan berkala perangkat, pemecahan masalah " +
      "koneksi, dan penanganan gangguan di ruang laboratorium. Lingkupnya perangkat dan jaringan, " +
      "bukan pengembangan aplikasi.",
    highlights: ["Perawatan berkala komputer dan jaringan lab sekolah."],
    stack: [],
  },
  {
    company: "Freelance",
    role: "Software Engineer",
    location: "Remote",
    mode: "Remote",
    start: "2015",
    end: "present",
    summary:
      "Berjalan sejak 2015 dan berdampingan dengan pekerjaan kantoran. Klien dan kebutuhan yang " +
      "berbeda-beda memaksa adaptasi cepat dengan stack dan keputusan teknis yang berbeda pula. " +
      "Kombinasi pekerjaan profesional, riset mandiri, dan proyek freelance inilah yang membentuk " +
      "kemampuan saya bekerja lintas tim dan lintas domain.",
    highlights: [
      "Kombinasi pekerjaan profesional, riset mandiri, dan proyek freelance memperluas kapabilitas engineering.",
      "Terbiasa berkolaborasi lintas tim.",
    ],
    stack: ["PHP", "Laravel", "React"],
  },
];

export interface Education {
  institution: string;
  degree: string;
  start: string;
  end: string;
}

export const education: Education[] = [
  {
    institution: "Universitas AMIKOM Yogyakarta",
    degree: "Bachelor of Informatics",
    start: "2016",
    end: "2019",
  },
];
