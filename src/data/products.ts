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

/** Tagline resmi — sumber: docs/PRD.md (Dotkasir). Dipakai lintas halaman. */
export const dotkasirTagline = "Jualan rapi, usaha tenang";

/** Tujuan CTA download Dotkasir — Play Store resmi (sudah rilis). */
export const dotkasirDownloadUrl =
  "https://play.google.com/store/apps/details?id=id.ajikamaludin.intikasir";

/**
 * Produk = sesuatu yang dipakai orang lain secara nyata.
 * Project/demo yang bukan produk masuk ke `src/content/projects/`.
 *
 * Tidak ada metrik pengguna atau pendapatan yang dicatat karena tidak ada
 * sumber yang terverifikasi. Kalau datanya ada, tambahkan dengan label jelas.
 */
export const products: Product[] = [
  {
    slug: "dotkasir",
    name: "Dotkasir",
    tagline: dotkasirTagline,
    status: "live",
    description:
      "Aplikasi kasir Android offline untuk warung dan UMKM Indonesia: penjualan, stok, " +
      "dan uang masuk–keluar di satu aplikasi. Gratis, tanpa iklan dan tanpa langganan; " +
      "open source (GPL-3.0). Sudah tersedia di Google Play.",
    features: [
      "Kasir cepat: scan barcode kamera, hitung kembalian otomatis",
      "Pembayaran tunai dan QRIS Static tampil di layar pembayaran",
      "Stok otomatis terhubung dengan penjualan dan pembelian",
      "Struk thermal Bluetooth dan struk PDF",
      "Laporan penjualan, laba/rugi (estimasi), arus kas; export Excel",
      "100% offline — backup lokal atau Google Drive (opsional)",
    ],
    links: [
      { label: "Kenali Dotkasir", url: "/dotkasir/" },
      { label: "Download di Google Play", url: dotkasirDownloadUrl },
    ],
    stack: ["Flutter", "Dart", "SQLite"],
  },
  {
    slug: "kasiraja",
    name: "KasirAja",
    tagline: "Aplikasi POS sederhana untuk kebutuhan kasir harian.",
    status: "discontinued",
    description:
      "Aplikasi point-of-sale berbasis SAAS. Tersedia sebagai aplikasi Android dan versi web, " +
      "dibangun dengan JavaScript, React, dan React Native.",
    features: ["Versi Android di Google Play Store", "Versi web yang bisa diakses langsung"],
    links: [
      { label: "KasirAja Web", url: "https://kasiraja.ajikamaludin.id/" },
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
  {
    label: "Kumpulan Proyek Lain",
    url: "https://s.ajikamaludin.id/portofolio",
  },
  {
    label: "Arsip Blog Lama (Blogspot)",
    url: "https://ajikamaludin.blogspot.com/",
  },
];
