/**
 * Sumber kebenaran untuk positioning konsultasi & MVP.
 * Dipakai homepage sebagai konten utama. Angka bukti HANYA yang bisa
 * diverifikasi di `experience.ts` dan `products.ts` — tidak ada klaim karangan.
 */

export interface Service {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export const consultingCopy = {
  eyebrow: "Konsultan MVP & Pengembang Aplikasi",
  headline: "Dari ide bisnis jadi aplikasi yang bisa dipakai.",
  subheadline:
    "Saya bantu UMKM besar dan startup mewujudkan produk digital — dari perencanaan, " +
    "arsitektur, sampai rilis. 6+ tahun membangun sistem untuk bisnis.",
  ctaPrimary: "Konsultasi proyek",
  ctaSecondary: "Lihat layanan",
  consultationMessage: "Halo, saya ingin konsultasi proyek aplikasi. Bisa kita diskusi?",
} as const;

export const services: Service[] = [
  {
    title: "Discovery & MVP Scoping",
    description:
      "Dari ide yang masih kabur jadi rencana build yang jelas: workshop, prioritas fitur, " +
      "dan estimasi yang bisa dipertanggungjawabkan.",
  },
  {
    title: "MVP Development",
    description:
      "Membangun produk pertama yang benar-benar bisa dipakai pengguna nyata — dengan " +
      "React, PHP, atau Go sesuai kebutuhan.",
  },
  {
    title: "Arsitektur & Infrastruktur",
    description:
      "Fondasi teknis yang siap tumbuh: AWS, microservices, dan alur deployment yang " +
      "tidak bergantung pada satu orang.",
  },
  {
    title: "Optimasi & Audit Teknis",
    description:
      "Memperbaiki sistem yang sudah ada — performa, keandalan, dan penanganan error di " +
      "tengah alur, bukan tambahan belakangan.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Konsultasi awal",
    description: "Diskusi gratis via WhatsApp untuk memahami masalah dan tujuan Anda.",
  },
  {
    title: "Discovery & scoping",
    description: "Memetakan kebutuhan, menentukan prioritas fitur, dan menyusun rencana build.",
  },
  {
    title: "Proposal & kesepakatan",
    description: "Lingkup, estimasi, dan timeline ditetapkan sebelum pekerjaan dimulai.",
  },
  {
    title: "Build + review berkala",
    description: "Pembangunan bertahap dengan titik review supaya arah tetap selaras.",
  },
  {
    title: "Handover & pendampingan",
    description: "Dokumentasi, serah terima, dan pendampingan saat produk mulai dipakai.",
  },
];

export const engagementModel = "Project-based MVP & retainer konsultasi.";
