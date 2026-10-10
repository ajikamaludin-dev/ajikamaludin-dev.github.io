import { profile } from "./profile.ts";

export interface Link {
  label: string;
  url: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  status: "live" | "beta" | "discontinued" | "idea";
  /** Hanya diisi kalau tahunnya ada di sumber terverifikasi. */
  year?: string;
  description: string;
  features: string[];
  links: Link[];
  stack: string[];
}

/**
 * Produk = sesuatu yang dipakai orang lain secara nyata.
 * Project/demo yang bukan produk masuk ke `src/content/projects/`.
 *
 * Tidak ada metrik pengguna atau pendapatan yang dicatat karena tidak ada
 * sumber yang terverifikasi. Kalau datanya ada, tambahkan dengan label jelas.
 */
export const products: Product[] = [
  {
    slug: "kasiraja",
    name: "KasirAja",
    tagline: "Aplikasi POS sederhana untuk kebutuhan kasir harian.",
    status: "live",
    description:
      "Aplikasi point-of-sale berbasis SAAS. Tersedia sebagai aplikasi Android dan versi web, " +
      "dibangun dengan JavaScript, React, dan React Native.",
    features: ["Versi Android di Google Play Store", "Versi web yang bisa diakses langsung"],
    links: [
      { label: "KasirAja Web", url: "http://kasiraja.ajikamaludin.id/" },
      {
        label: "KasirAja Android",
        url: "https://play.google.com/store/apps/details?id=com.kasirajaandroid",
      },
    ],
    stack: ["JavaScript", "React", "React Native"],
  },
];

export const otherLinks: Link[] = [
  // Diambil dari `profile.contacts.github` — URL diketik sekali saja.
  { label: "GitHub Portfolio", url: profile.contacts.github },
  { label: "Kumpulan Proyek Lain", url: "https://s.ajikamaludin.id/portofolio" },
];
