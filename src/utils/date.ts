const MONTHS = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

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
