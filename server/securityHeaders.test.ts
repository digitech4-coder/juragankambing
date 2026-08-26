import { describe, expect, it } from "vitest";
import { applySecurityHeaders } from "./securityHeaders";

function responseDouble() {
  const headers = new Map<string, string>();
  return {
    headers,
    setHeader(name: string, value: string) {
      headers.set(name, value);
    },
  };
}

describe("security headers", () => {
  it("sets baseline headers and HSTS in production", () => {
    const res = responseDouble();
    applySecurityHeaders(res as never, "production");

    expect(res.headers.get("X-Content-Type-Options")).toBe("nosniff");
    expect(res.headers.get("Referrer-Policy")).toBe("strict-origin-when-cross-origin");
    expect(res.headers.get("X-Frame-Options")).toBe("SAMEORIGIN");
    expect(res.headers.get("Permissions-Policy")).toContain("geolocation=()");
    expect(res.headers.get("Strict-Transport-Security")).toContain("max-age=31536000");
  });

  it("does not emit HSTS during local development", () => {
    const res = responseDouble();
    applySecurityHeaders(res as never, "development");

    expect(res.headers.get("X-Content-Type-Options")).toBe("nosniff");
    expect(res.headers.has("Strict-Transport-Security")).toBe(false);
  });
});

