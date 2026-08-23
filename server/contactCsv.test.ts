import { describe, expect, it } from "vitest";
import { contactRequestsToCsv, escapeCsvCell } from "./contactCsv";
import type { ContactRequestRecord } from "../drizzle/schema";

const request: ContactRequestRecord = {
  id: 7,
  name: "Budi, Santoso",
  email: "budi@example.com",
  whatsapp: "081234567890",
  service: "Katering",
  domisili: "Pamulang",
  guests: "100 orang",
  message: "Mohon info\nuntuk paket \"Super\".",
  emailStatus: "sent",
  followUpStatus: "deal",
  emailSentAt: new Date("2026-08-23T01:02:03.000Z"),
  createdAt: new Date("2026-08-22T10:00:00.000Z"),
  updatedAt: new Date("2026-08-23T01:02:03.000Z"),
};

describe("contact CSV export", () => {
  it("serializes headers and request fields with RFC-style quoting", () => {
    const csv = contactRequestsToCsv([request]);
    expect(csv).toContain("ID,Tanggal,Nama,Email,WhatsApp");
    expect(csv).toContain('7,2026-08-22T10:00:00.000Z,"Budi, Santoso"');
    expect(csv).toContain('"Mohon info\nuntuk paket ""Super""."');
    expect(csv).toContain(",deal,");
  });

  it("neutralizes spreadsheet formula prefixes", () => {
    expect(escapeCsvCell("=SUM(A1:A2)")).toBe("'=SUM(A1:A2)");
    expect(escapeCsvCell("normal")).toBe("normal");
  });
});
