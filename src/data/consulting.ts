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
  eyebrow: "Konsultan MVP & Infrastruktur VPS",
  headline: "Dari ide aplikasi sampai server yang aman.",
  subheadline:
    "Saya bantu UMKM dan startup membangun aplikasi MVP dari nol hingga rilis, " +
    "sekaligus mengelola dan mengamankan VPS agar sistem tetap stabil. 6+ tahun pengalaman fullstack & Linux.",
  ctaPrimary: "Konsultasi sekarang",
  ctaSecondary: "Lihat layanan",
  consultationMessage:
    "Halo, saya ingin konsultasi terkait pengembangan aplikasi MVP / pengelolaan & keamanan VPS. Bisa kita diskusi?",
} as const;

export const services: Service[] = [
  {
    title: "Konsultasi & Pengembangan MVP",
    description:
      "Dari discovery, prioritas fitur, sampai produk pertama yang siap dipakai pengguna nyata — " +
      "dibangun dengan React, PHP/Laravel, atau Go sesuai kebutuhan bisnis.",
  },
  {
    title: "Pengelolaan VPS",
    description:
      "Setup server dari nol, konfigurasi web server & reverse proxy, automasi deployment, " +
      "monitoring uptime, dan backup berkala agar aplikasi berjalan stabil.",
  },
  {
    title: "Keamanan VPS",
    description:
      "Audit & hardening OS/SSH, konfigurasi firewall & mitigasi brute-force, isolasi " +
      "service/container, SSL/TLS, dan pembaruan patch keamanan rutin.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Konsultasi awal",
    description: "Diskusi gratis via WhatsApp untuk memahami kebutuhan aplikasi atau kondisi VPS Anda.",
  },
  {
    title: "Discovery & audit",
    description:
      "Memetakan kebutuhan fitur MVP atau mengaudit konfigurasi, arsitektur, dan celah keamanan server.",
  },
  {
    title: "Proposal & kesepakatan",
    description: "Lingkup, estimasi, dan timeline ditetapkan sebelum pekerjaan dimulai.",
  },
  {
    title: "Eksekusi + review berkala",
    description:
      "Pembangunan bertahap atau setup & hardening server dengan titik review supaya arah tetap selaras.",
  },
  {
    title: "Handover & pendampingan",
    description:
      "Dokumentasi, serah terima akses, serta opsi pendampingan atau maintenance berkelanjutan.",
  },
];

export const engagementModel = "Project-based (MVP & setup/audit VPS) atau retainer bulanan.";
