import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

const indexHtml = fs.readFileSync(path.resolve(import.meta.dirname, "../client/index.html"), "utf8");

describe("homepage inline analytics and hero regression guards", () => {
  it("uses a valid single-escaped trailing-slash regex", () => {
    expect(indexHtml).toContain(String.raw`endpoint.replace(/\/$/, "")`);
    expect(indexHtml).not.toContain(String.raw`endpoint.replace(/\\/$/, "")`);
  });

  it("preloads the optimized Manus hero and its mobile candidate", () => {
    expect(indexHtml).toContain("juragankambing-hero-manus-optimized_cedec82a.webp");
    expect(indexHtml).toContain("juragankambing-hero-mobile_9dea06c1.webp");
    expect(indexHtml).not.toContain("juragankambing-hero_bd742d57.jpg");
  });

  it("keeps the header logo on an uploaded WebP with a public fallback", () => {
    expect(indexHtml).toContain("juragankambing-logo-transparent.webp");
  });

  it("keeps footer and favicon references on the shared WebP logo format", () => {
    const homeTsx = fs.readFileSync(path.resolve(import.meta.dirname, "../client/src/pages/Home.tsx"), "utf8");
    expect(homeTsx).toContain("mark: \"/manus-storage/juragankambing-mark-preview_0830733a.webp\"");
    expect(homeTsx).toContain("image.src = \"https://juragankambing.id/image/juragankambing-logo-transparent.webp\"");
    expect(indexHtml).toContain('id="site-favicon" rel="icon" type="image/webp"');
    expect(indexHtml).toContain("favicon.href = '/manus-storage/juragankambing-mark-preview_0830733a.webp'");
    expect(indexHtml).toContain("%BASE_URL%image/juragankambing-logo-transparent.webp");
  });

  it("keeps a hero skeleton and load-state handlers in the homepage", () => {
    const homeTsx = fs.readFileSync(path.resolve(import.meta.dirname, "../client/src/pages/Home.tsx"), "utf8");
    expect(homeTsx).toContain("hero-skeleton");
    expect(homeTsx).toContain("onLoad={() => setHeroLoaded(true)}");
    expect(homeTsx).toContain("aria-busy={!heroLoaded}");
  });
});
