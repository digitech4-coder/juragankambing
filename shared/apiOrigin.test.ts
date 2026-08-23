import { describe, expect, it } from "vitest";
import { FULL_STACK_ORIGIN, getTrpcUrl } from "./apiOrigin";

describe("getTrpcUrl", () => {
  it("uses same-origin API calls on managed Manus hosts", () => {
    expect(getTrpcUrl("juragankam-5f36bibh.manus.space")).toBe("/api/trpc");
    expect(getTrpcUrl("localhost")).toBe("/api/trpc");
  });

  it("routes custom-domain calls to the full-stack origin", () => {
    expect(getTrpcUrl("juragankambing.id")).toBe(`${FULL_STACK_ORIGIN}/api/trpc`);
    expect(getTrpcUrl("www.juragankambing.id")).toBe(`${FULL_STACK_ORIGIN}/api/trpc`);
  });

  it("does not treat lookalike hosts as managed origins", () => {
    expect(getTrpcUrl("manus.space.attacker.example")).toBe(`${FULL_STACK_ORIGIN}/api/trpc`);
  });
});
