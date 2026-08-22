import { z } from "zod";

export const contactRequestInput = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 karakter").max(100, "Nama terlalu panjang"),
  email: z.string().trim().email("Email belum valid").max(254, "Email terlalu panjang"),
  whatsapp: z.string().trim().min(6, "Nomor WhatsApp belum lengkap").max(30, "Nomor WhatsApp terlalu panjang"),
  service: z.enum(["Katering", "Aqiqah", "Kambing Guling", "Snack Box", "Tumpeng", "Qurban"]),
  guests: z.string().trim().max(80, "Jumlah porsi/tamu terlalu panjang").optional().default(""),
  message: z.string().trim().max(2000, "Pesan terlalu panjang").optional().default(""),
  website: z.string().max(120).optional().default(""),
});

export type ContactRequest = z.infer<typeof contactRequestInput>;

const FROM_EMAIL = "JuraganKambing.id <noreply@juragankambing.id>";
const TO_EMAIL = "digitechsmart4@gmail.com";

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}

export function buildContactEmail(input: ContactRequest) {
  const subject = `Permintaan konsultasi ${input.service} dari ${input.name}`;
  const text = [
    "Permintaan konsultasi baru dari JuraganKambing.id",
    "",
    `Nama: ${input.name}`,
    `Email: ${input.email}`,
    `Nomor WhatsApp: ${input.whatsapp}`,
    `Jenis layanan: ${input.service}`,
    `Jumlah porsi/tamu: ${input.guests || "Belum diisi"}`,
    `Pesan/kebutuhan: ${input.message || "Belum diisi"}`,
  ].join("\n");
  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#173D31">
      <h2>Permintaan konsultasi baru dari JuraganKambing.id</h2>
      <p><strong>Nama:</strong> ${escapeHtml(input.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(input.email)}</p>
      <p><strong>Nomor WhatsApp:</strong> ${escapeHtml(input.whatsapp)}</p>
      <p><strong>Jenis layanan:</strong> ${escapeHtml(input.service)}</p>
      <p><strong>Jumlah porsi/tamu:</strong> ${escapeHtml(input.guests || "Belum diisi")}</p>
      <p><strong>Pesan/kebutuhan:</strong><br />${escapeHtml(input.message || "Belum diisi").replace(/\n/g, "<br />")}</p>
    </div>
  `;

  return { from: FROM_EMAIL, to: [TO_EMAIL], reply_to: [input.email], subject, text, html };
}

export async function sendContactRequest(input: ContactRequest, apiKey: string) {
  if (!apiKey) throw new Error("Resend API key belum dikonfigurasi");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(buildContactEmail(input)),
  });

  if (!response.ok) {
    console.error("Resend email delivery failed", { status: response.status });
    throw new Error("Pengiriman email gagal");
  }

  return { accepted: true as const };
}

