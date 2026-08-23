import { describe, expect, it } from "vitest";
import { contactHistoryInput, FOLLOW_UP_STATUSES, followUpStatusSchema, toContactHistoryFilters } from "./contactAdmin";

describe("admin contact filters", () => {
  it("accepts exactly the supported follow-up statuses", () => {
    expect(FOLLOW_UP_STATUSES).toEqual(["baru", "dihubungi", "deal", "selesai"]);
    for (const status of FOLLOW_UP_STATUSES) expect(followUpStatusSchema.parse(status)).toBe(status);
    expect(() => followUpStatusSchema.parse("dibatalkan")).toThrow();
  });

  it("converts inclusive date filters to UTC boundaries", () => {
    const input = contactHistoryInput.parse({ from: "2026-08-01", to: "2026-08-23", domisili: "Pamulang", followUpStatus: "dihubungi" });
    const filters = toContactHistoryFilters(input);
    expect(filters.from?.toISOString()).toBe("2026-08-01T00:00:00.000Z");
    expect(filters.to?.toISOString()).toBe("2026-08-23T23:59:59.999Z");
    expect(filters.domisili).toBe("Pamulang");
    expect(filters.followUpStatus).toBe("dihubungi");
  });

  it("rejects malformed date filter values", () => {
    expect(() => contactHistoryInput.parse({ from: "23-08-2026" })).toThrow();
  });
});
