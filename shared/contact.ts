export const BUSINESS_WHATSAPP_NUMBER = "6285211885000";

export type ContactWhatsAppSummary = {
  name: string;
  email: string;
  whatsapp: string;
  service: string;
  domisili: string;
  guests: string;
  message: string;
};

export function buildContactWhatsAppMessage(request: ContactWhatsAppSummary) {
  return [
    "Assalamualaikum, Juragan Kambing.",
    "",
    `Kami menerima permintaan konsultasi dari ${request.name}.`,
    `Layanan: ${request.service}`,
    `Domisili: ${request.domisili}`,
    `Jumlah porsi/tamu: ${request.guests || "Belum diisi"}`,
    `Email: ${request.email}`,
    `WhatsApp: ${request.whatsapp}`,
    `Pesan: ${request.message || "Belum diisi"}`,
    "",
    "Mohon ditindaklanjuti. Terima kasih.",
  ].join("\n");
}
