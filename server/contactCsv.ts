import type { ContactRequestRecord } from "../drizzle/schema";

const CSV_HEADERS = [
  "ID",
  "Tanggal",
  "Nama",
  "Email",
  "WhatsApp",
  "Layanan",
  "Domisili",
  "Porsi/Tamu",
  "Status Email",
  "Status Follow-up",
  "Pesan",
] as const;

function escapeCsvCell(value: unknown) {
  const text = value == null ? "" : String(value);
  const formulaSafe = /^[=+\-@]/.test(text) ? `'${text}` : text;
  return /[",\n\r]/.test(formulaSafe)
    ? `"${formulaSafe.replace(/"/g, '""')}"`
    : formulaSafe;
}

export function contactRequestsToCsv(requests: ContactRequestRecord[]) {
  const rows = requests.map(request => [
    request.id,
    new Date(request.createdAt).toISOString(),
    request.name,
    request.email,
    request.whatsapp,
    request.service,
    request.domisili,
    request.guests,
    request.emailStatus,
    request.followUpStatus,
    request.message,
  ]);
  return [CSV_HEADERS, ...rows].map(row => row.map(escapeCsvCell).join(",")).join("\r\n") + "\r\n";
}

export const contactCsvHeaders = CSV_HEADERS;
export { escapeCsvCell };
