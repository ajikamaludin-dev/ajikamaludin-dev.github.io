const MONTHS = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

/**
 * Tanggal publikasi dari frontmatter.
 *
 * Dua bentuk yang diterima:
 * - `YYYY-MM-DD` → tengah malam UTC (bentuk bawaan YAML).
 * - `YYYY-MM-DD HH:mm` → jam WIB (UTC+07:00), mis. `2026-11-10 22:10`.
 *
 * Balikin `time` hanya kalau jamnya memang ditulis di frontmatter, supaya
 * UI tidak pernah mengarang jam untuk post yang hanya punya tanggal.
 */
export function parsePublished(raw: Date | string): { date: Date; time?: string } {
  if (raw instanceof Date) return { date: raw };

  const match = /^(\d{4}-\d{2}-\d{2})(?:[ T](\d{2}:\d{2}))?$/.exec(raw.trim());
  if (!match) throw new Error(`Tanggal publikasi tidak valid: ${raw}`);

  const [, day, time] = match;
  if (!time) return { date: new Date(`${day}T00:00:00Z`) };
  return { date: new Date(`${day}T${time}:00+07:00`), time };
}

/** Tanggal absolut dalam bahasa Indonesia, mis. `10 November 2026`. */
export function formatPublishedDate(date: Date): string {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  }).format(date);
}

/** `YYYY-MM` → `Okt 2023`. `YYYY` → `2023`. Angka lain → dikembalikan apa adanya. */
export function formatYearMonth(value: string): string {
  const match = /^(\d{4})-(\d{2})$/.exec(value);
  if (!match) return value;
  const month = Number(match[2]) - 1;
  return `${MONTHS[month] ?? match[2]} ${match[1]}`;
}

/** Rentang periode kerja, mis. `Okt 2023 — Des 2024`, `2018`, atau `2015 — sekarang`. */
export function formatRange(start: string, end: string | "present"): string {
  const from = formatYearMonth(start);
  if (end === "present") return `${from} — sekarang`;
  const to = formatYearMonth(end);
  return from === to ? from : `${from} — ${to}`;
}
