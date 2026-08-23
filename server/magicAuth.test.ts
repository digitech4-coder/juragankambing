import { describe, expect, it } from "vitest";
import { hashToken, isAllowedOrigin, normalizeEmail } from "./magicAuth";

describe("magic-link authentication helpers", () => {
  it("normalizes admin email input", () => {
    expect(normalizeEmail("  DIGITECHSMART4@GMAIL.COM ")).toBe("digitechsmart4@gmail.com");
  });

  it("allows only same-site HTTPS origins", () => {
    expect(isAllowedOrigin("https://juragankam-5f36bibh.manus.space")).toBe(true);
    expect(isAllowedOrigin("https://juragankambing.id")).toBe(true);
    expect(isAllowedOrigin("https://evil.example/".replace(/\/$/, ""))).toBe(false);
    expect(isAllowedOrigin("javascript:alert(1)")).toBe(false);
  });

  it("hashes tokens deterministically without exposing the raw token", () => {
    expect(hashToken("sample-token")).toBe(hashToken("sample-token"));
    expect(hashToken("sample-token")).not.toBe("sample-token");
  });
});
