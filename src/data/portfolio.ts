/**
 * Demo aplikasi pilihan dari spreadsheet portofolio.
 * Sumber: https://docs.google.com/spreadsheets/d/16tXqmV3Yn76gHdNCjBl_eV9MqNn56O0XI_S3z85aFOU/edit?gid=0#gid=0
 * Data disalin apa adanya (URL, deskripsi, tech stack, kredensial demo).
 */

export const portfolioSheetUrl =
  "https://docs.google.com/spreadsheets/d/16tXqmV3Yn76gHdNCjBl_eV9MqNn56O0XI_S3z85aFOU/edit?gid=0#gid=0";

export interface PortfolioItem {
  name: string;
  url: string;
  description: string;
  stack: string[];
  type: "Web App" | "Android App";
  /** Kredensial demo untuk masuk ke aplikasi. */
  credentials?: string;
  /** URL halaman login admin, bila berbeda dari URL utama. */
  adminUrl?: string;
}

export const portfolio: PortfolioItem[] = [
  {
    name: "Core POS",
    url: "https://core-pos.panelawan.my.id",
    description:
      "POS dengan inventori multi-gudang: stok, penjualan, pembelian, retur, hutang, piutang, kas, stok opname, transfer stok, dan role-based access.",
    stack: ["Laravel", "Inertia.js", "React"],
    type: "Web App",
    credentials: "admin@admin.com / password",
  },
  {
    name: "CRM Klinik Kecantikan",
    url: "https://crm01.panelawan.my.id",
    description:
      "Customer relationship management untuk klinik kecantikan, sekaligus sistem pembuatan resep digital untuk pelanggan.",
    stack: ["Laravel", "Inertia.js", "React"],
    type: "Web App",
    credentials: "admin@admin.com / password",
  },
  {
    name: "Florist Order",
    url: "https://florist-order.panelawan.my.id",
    description:
      "Manajemen order, pembuatan, dan pengiriman untuk toko bunga dengan sistem multi-toko dan lokasi berbeda.",
    stack: ["Laravel", "Inertia.js", "React"],
    type: "Web App",
    credentials: "admin@admin.com / password",
  },
  {
    name: "Nusatravel",
    url: "https://nusatravel.ajikamaludin.id/en",
    description:
      "Website agen travel dengan penjualan dan reservasi pembayaran online melalui payment gateway Midtrans.",
    stack: ["Laravel", "Livewire", "Inertia.js", "React", "MySQL"],
    type: "Web App",
    credentials: "admin@admin.com / password",
    adminUrl: "https://nusatravel.ajikamaludin.id/travel/login",
  },
  {
    name: "Hootka",
    url: "https://hootka.ajikamaludin.id",
    description:
      "Aplikasi kuis online real-time seperti Kahoot — cocok untuk permainan saat workshop atau acara sejenisnya.",
    stack: ["Laravel", "Inertia.js", "React"],
    type: "Web App",
    credentials: "admin@admin.com / password",
    adminUrl: "https://hootka.ajikamaludin.id/login",
  },
  {
    name: "Voucher WiFi (TWA)",
    url: "https://play.google.com/store/apps/details?id=id.my.itworks.voucher.twa",
    description:
      "Aplikasi TWA (Trusted Web Activity) untuk penjualan voucher WiFi/internet dengan tampilan ramah mobile.",
    stack: ["Laravel", "Inertia.js", "React"],
    type: "Android App",
    credentials: "admin@admin.com / password",
    adminUrl: "https://voucher.panelawan.my.id/admin/login",
  },
  {
    name: "KasirAja Android",
    url: "https://play.google.com/store/apps/details?id=com.kasirajaandroid",
    description:
      "Aplikasi Android APK kasir POS sederhana yang sudah dipublikasikan di Google Play.",
    stack: ["React Native"],
    type: "Android App",
    credentials: "kasiraja@admin.com / password",
  },
];
