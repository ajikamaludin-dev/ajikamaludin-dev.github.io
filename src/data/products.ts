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
  {
    slug: "intikasir",
    name: "Intikasir",
    tagline: "Jualan rapi, usaha naik kelas",
    status: "beta",
    description:
      "Aplikasi kasir Android offline untuk warung dan UMKM Indonesia: penjualan, stok, " +
      "dan uang masuk–keluar di satu aplikasi. Gratis, tanpa iklan dan tanpa langganan; " +
      "open source (GPL-3.0). Masih dalam tahap persiapan rilis di Google Play.",
    features: [
      "Kasir cepat: scan barcode kamera, hitung kembalian otomatis",
      "Pembayaran tunai dan QRIS Static tampil di layar pembayaran",
      "Stok otomatis terhubung dengan penjualan dan pembelian",
      "Struk thermal Bluetooth dan struk PDF",
      "Laporan penjualan, laba/rugi (estimasi), arus kas; export Excel",
      "100% offline — backup lokal atau Google Drive (opsional)",
    ],
    links: [
      { label: "Kenali Intikasir", url: "/intikasir/" },
      { label: "WhatsApp", url: "https://wa.me/62895392034000" },
    ],
    stack: ["Flutter", "Dart", "SQLite"],
  },
];

export const otherLinks: Link[] = [
  // Diambil dari `profile.contacts.github` — URL diketik sekali saja.
  { label: "GitHub Portfolio", url: profile.contacts.github },
  { label: "Kumpulan Proyek Lain", url: "https://s.ajikamaludin.id/portofolio" },
];
