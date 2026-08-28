import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

const projectRoot = path.resolve(import.meta.dirname, "..");
const viteConfig = fs.readFileSync(path.join(projectRoot, "vite.config.ts"), "utf8");
const appSource = fs.readFileSync(path.join(projectRoot, "client/src/App.tsx"), "utf8");

describe("production chunking guards", () => {
  it("keeps vendor dependencies in stable cacheable chunks", () => {
    expect(viteConfig).toContain("manualChunks(id)");
    expect(viteConfig).toContain('return "vendor-react"');
    expect(viteConfig).toContain('return "vendor-data"');
    expect(viteConfig).toContain('return "vendor-icons"');
  });

  it("keeps admin-only pages out of the homepage entry", () => {
    expect(appSource).toContain('lazy(() => import("@/pages/AdminRequests"))');
    expect(appSource).toContain('lazy(() => import("@/pages/FileStorage"))');
    expect(appSource).toContain('lazy(() => import("@/pages/AdminMagicLogin"))');
  });
});
