import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

const adminContext = (role: "admin" | "user"): TrpcContext => ({
  user: { id: 7, openId: "storage-owner", name: "Owner", email: "owner@example.com", loginMethod: "manus", role, createdAt: new Date(), updatedAt: new Date(), lastSignedIn: new Date() },
  req: { protocol: "https", headers: {} } as TrpcContext["req"],
  res: {} as TrpcContext["res"],
});

describe("fileStorage", () => {
  it("rejects non-admin users from listing assets", async () => {
    const caller = appRouter.createCaller(adminContext("user"));
    await expect(caller.fileStorage.list()).rejects.toMatchObject({ code: "FORBIDDEN" });
  });

  it("rejects files larger than the configured upload limit", async () => {
    const caller = appRouter.createCaller(adminContext("admin"));
    await expect(caller.fileStorage.upload({ originalName: "large.jpg", mimeType: "image/jpeg", sizeBytes: 9 * 1024 * 1024, base64: "AA==" })).rejects.toMatchObject({ code: "BAD_REQUEST" });
  });
});
