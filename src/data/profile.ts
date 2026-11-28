import { consultingCopy } from "./consulting.ts";

/**
 * Sumber kebenaran tunggal untuk identitas & kontak.
 * Isi diambil dari `[ATS] CV - Aji Kamaludin.pdf`.
 * Nilai yang dipakai di ≥3 tempat harus konstan di sini, bukan disalin.
 */
export const profile = {
  name: "Aji Kamaludin",
  role: "Konsultan MVP, Pengembang Aplikasi & Infrastruktur VPS",
  location: "Klaten, Indonesia",
  site: "https://ajikamaludin.id",
  /** Bukan placeholder — avatar ini memang dipakai sebagaimana adanya. */
  avatar: "/pp.jpg",
  summary:
    "Software engineer dengan pengalaman 6+ tahun di fullstack development PHP dan Laravel, " +
    "ditambah pemakaian Go. Di sisi frontend saya memakai React untuk membangun antarmuka " +
    "responsif. Ada pengalaman langsung di full-stack, cloud platform, dan Linux system " +
    "administration, dengan latar belakang network engineering, virtualization, dan praktik DevOps. " +
    "Saya rutin riset dan eksperimen teknologi baru supaya tidak tertinggal perkembangan industri.",
  /** Deskripsi pendek untuk hero homepage — berorientasi hasil, Bahasa Indonesia. */
  heroTagline:
    "Membantu UMKM besar dan startup membangun aplikasi yang benar-benar dipakai — dari ide sampai rilis.",
  contacts: {
    whatsapp: "6281325307692",
    email: "aji19kamaludin@gmail.com",
    github: "https://github.com/ajikamaludin-dev",
    linkedin: "https://www.linkedin.com/in/19ajikamaludin",
    blog: "https://ajikamaludin.blogspot.com",
  },
} as const;

/**
 * Satu-satunya jalan membuat tautan WhatsApp. Nomor hanya diketik sekali di
 * `profile.contacts.whatsapp`; pesan opsional di-encode sebagai query `text`.
 */
export function whatsappUrl(message?: string): string {
  const digits = profile.contacts.whatsapp.replace(/[^0-9]/g, "");
  return message
    ? `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${digits}`;
}

export type Profile = typeof profile;

export interface NavLink {
  href: string;
  label: string;
  /** true kalau keluar dari situs — tambahkan `target`/`rel` dan jangan tandai aria-current. */
  external?: boolean;
}

/**
 * Satu sumber untuk navigasi. Dipakai Nav dan Footer.
 * "Konsultasi" memakai `whatsappUrl` supaya nomor dan pesan tidak ditulis dua kali.
 */
export const navLinks: readonly NavLink[] = [
  { href: "/about/", label: "Tentang" },
  { href: "/blog/", label: "Blog" },
  { href: "/projects/", label: "Proyek" },
  { href: "/products/", label: "Produk" },
  {
    href: whatsappUrl(consultingCopy.consultationMessage),
    label: "Konsultasi",
    external: true,
  },
];
