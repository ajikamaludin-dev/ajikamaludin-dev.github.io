export interface Certification {
  issuer: string;
  name: string;
  year: string;
}

/** 24 sertifikasi persis seperti tercantum di CV. */
export const certifications: Certification[] = [
  { issuer: "Dicoding", name: "SOLID Programming Principles", year: "2023" },
  { issuer: "Dicoding", name: "Belajar Membuat Aplikasi Flutter untuk Pemula", year: "2023" },
  { issuer: "Dicoding", name: "Memulai Pemrograman dengan Dart", year: "2023" },
  { issuer: "Dicoding", name: "Architecting on AWS", year: "2021" },
  { issuer: "Dicoding", name: "Cloud Practitioner Essentials", year: "2021" },
  { issuer: "Dicoding", name: "Belajar Fundamental Aplikasi Back-End", year: "2021" },
  { issuer: "Dicoding", name: "Belajar Membuat Aplikasi Back-End untuk Pemula", year: "2021" },
  { issuer: "Dicoding", name: "Belajar Dasar Pemrograman JavaScript", year: "2021" },
  { issuer: "Dicoding", name: "Belajar Dasar Pemrograman Web", year: "2021" },
  { issuer: "Adinusa", name: "Certified Cloud, Network, and DevOps Linux", year: "2021" },
  { issuer: "Adinusa", name: "Linux System Administration", year: "2021" },
  { issuer: "Adinusa", name: "Docker For DevOps", year: "2021" },
  { issuer: "Adinusa", name: "Monitoring with Prometheus", year: "2021" },
  { issuer: "Adinusa", name: "GitLab Administration", year: "2021" },
  { issuer: "Adinusa", name: "Pemrograman Dasar dengan Python", year: "2021" },
  { issuer: "Adinusa", name: "Automation with Ansible", year: "2021" },
  { issuer: "Adinusa", name: "Getting Started with ELK Stack", year: "2021" },
  { issuer: "Nol Satu", name: "Certified Cloud, Network, and DevOps Linux", year: "2018" },
  { issuer: "MikroTik", name: "Certified Routing Engineer", year: "2018" },
  { issuer: "MikroTik", name: "Certified IPv6 Engineer", year: "2018" },
  { issuer: "MikroTik", name: "Certified Network Associate", year: "2017" },
  { issuer: "Cisco", name: "Certified Network Associate 1", year: "2018" },
  { issuer: "Cisco", name: "Certified Network Essential", year: "2018" },
  { issuer: "Cisco", name: "IT Essential", year: "2017" },
];

export interface Achievement {
  title: string;
  detail: string;
  year: string;
}

export const achievements: Achievement[] = [
  {
    title: "Best Software Award",
    detail: "GelarKaryaMahasiswa",
    year: "2017",
  },
  {
    title: "Juara 3",
    detail: 'Web Design Competition "Pima Posma"',
    year: "2017",
  },
  {
    title: "Co-author",
    detail: 'Buku "Linux System Administration & Debian Server"',
    year: "2015",
  },
  {
    title: "Juara 3",
    detail: "LKS Kab. Klaten System & Network Administration Competition",
    year: "2015",
  },
];
