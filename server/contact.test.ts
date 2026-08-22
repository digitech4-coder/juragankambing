import { afterEach, describe, expect, it, vi } from "vitest";
import { buildContactEmail, contactRequestInput, sendContactRequest } from "./contact";

describe("contact request email", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("accepts the public form fields and builds the verified sender payload", () => {
    const input = contactRequestInput.parse({
      name: "Budi Santoso",
      email: "budi@example.com",
      whatsapp: "081234567890",
      service: "Katering",
      domisili: "Pamulang",
      guests: "100 orang",
      message: "Acara pada 20 September di Pamulang.",
    });

    const email = buildContactEmail(input);

    expect(email.from).toBe("JuraganKambing.id <noreply@juragankambing.id>");
    expect(email.to).toEqual(["digitechsmart4@gmail.com"]);
    expect(email.reply_to).toEqual(["budi@example.com"]);
    expect(email.subject).toContain("Katering");
    expect(email.text).toContain("081234567890");
    expect(email.text).toContain("Domisili: Pamulang");
    expect(email.html).toContain("Domisili:</strong> Pamulang");
    expect(email.html).toContain("20 September");
  });

  it("escapes untrusted form content in the HTML body", () => {
    const input = contactRequestInput.parse({
      name: "<script>alert(1)</script>",
      email: "budi@example.com",
      whatsapp: "081234567890",
      service: "Qurban",
      domisili: "Ciputat",
      message: "<b>Mohon info</b>",
    });

    const email = buildContactEmail(input);

    expect(email.html).not.toContain("<script>");
    expect(email.html).toContain("&lt;script&gt;");
    expect(email.html).toContain("&lt;b&gt;Mohon info&lt;/b&gt;");
  });

  it("posts the validated email to Resend with the server-side bearer key", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ id: "email_123" }), { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);

    await sendContactRequest(contactRequestInput.parse({
      name: "Budi Santoso",
      email: "budi@example.com",
      whatsapp: "081234567890",
      service: "Katering",
      domisili: "BSD",
      message: "Mohon dikirimkan pilihan paket.",
    }), "re_test_key");

    expect(fetchMock).toHaveBeenCalledWith("https://api.resend.com/emails", expect.objectContaining({
      method: "POST",
      headers: expect.objectContaining({ Authorization: "Bearer re_test_key" }),
    }));
    const request = fetchMock.mock.calls[0]?.[1] as RequestInit;
    expect(JSON.parse(String(request.body))).toMatchObject({
      from: "JuraganKambing.id <noreply@juragankambing.id>",
      to: ["digitechsmart4@gmail.com"],
      reply_to: ["budi@example.com"],
    });
  });

  it("rejects an unknown Domisili", () => {
    expect(() => contactRequestInput.parse({
      name: "Budi Santoso",
      email: "budi@example.com",
      whatsapp: "081234567890",
      service: "Aqiqah",
      domisili: "Kota Fiktif",
    })).toThrow();
  });

  it("rejects an incomplete name or WhatsApp number", () => {
    expect(() => contactRequestInput.parse({
      name: "A",
      email: "not-an-email",
      whatsapp: "0812",
      service: "Aqiqah",
      domisili: "Lainnya",
    })).toThrow();
  });
});
