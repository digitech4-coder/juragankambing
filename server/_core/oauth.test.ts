import { describe, expect, it } from "vitest";
import { getSafeOAuthReturnPath } from "./oauth";

describe("getSafeOAuthReturnPath", () => {
  it("keeps an internal admin route", () => {
    expect(getSafeOAuthReturnPath("/admin/requests?from=login#top")).toBe("/admin/requests?from=login#top");
  });

  it("allows the homepage root", () => {
    expect(getSafeOAuthReturnPath("/")).toBe("/");
  });

  it("falls back for external or malformed paths", () => {
    expect(getSafeOAuthReturnPath("https://example.com")).toBe("/");
    expect(getSafeOAuthReturnPath("//example.com")).toBe("/");
    expect(getSafeOAuthReturnPath("/\\example.com")).toBe("/");
    expect(getSafeOAuthReturnPath("/admin/requests\nLocation: https://example.com")).toBe("/");
    expect(getSafeOAuthReturnPath(undefined)).toBe("/");
  });
});
