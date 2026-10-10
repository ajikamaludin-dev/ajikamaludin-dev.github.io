/**
 * Sumber kebenaran tunggal untuk identitas & kontak.
 * Isi diambil dari `[ATS] CV - Aji Kamaludin.pdf`.
 * Nilai yang dipakai di ≥3 tempat harus konstan di sini, bukan disalin.
 */
export const profile = {
  name: "Aji Kamaludin",
  role: "Software Engineer",
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
  /**
   * Deskripsi pendek untuk hero homepage — sengaja bahasa Inggris sebagai
   * default, karena pembaca pertama halaman depan kemungkinan besar perekrut
   * internasional. `summary` di atas tetap bahasa Indonesia untuk halaman About.
   */
  heroTagline:
    "Six years building backends and infrastructure with PHP, Go, and AWS — based in Klaten, Indonesia.",
  contacts: {
    whatsapp: "+62 838 4074 5543",
    email: "aji19kamaludin@gmail.com",
    github: "https://github.com/ajikamaludin-dev",
    linkedin: "https://www.linkedin.com/in/19ajikamaludin",
  },
} as const;

export type Profile = typeof profile;

export interface NavLink {
  href: string;
  label: string;
  /** true kalau keluar dari situs — tambahkan `target`/`rel` dan jangan tandai aria-current. */
  external?: boolean;
}

/**
 * Satu sumber untuk navigasi. Dipakai Nav dan Footer.
 * `Hire Me!` sengaja memakai `wa.me` yang dihitung dari `contacts.whatsapp`
 * supaya nomor hanya diketik sekali.
 */
export const navLinks: readonly NavLink[] = [
  { href: "/about/", label: "About" },
  { href: "/blog/", label: "Blog" },
  { href: "/projects/", label: "Projects" },
  { href: "/products/", label: "Products" },
  {
    href: `https://wa.me/${profile.contacts.whatsapp.replace(/[^0-9]/g, "")}`,
    label: "Hire Me!",
    external: true,
  },
];
