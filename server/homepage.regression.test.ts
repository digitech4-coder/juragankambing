import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

const indexHtml = fs.readFileSync(path.resolve(import.meta.dirname, "../client/index.html"), "utf8");

describe("homepage inline analytics regression guard", () => {
  it("uses a valid single-escaped trailing-slash regex", () => {
    expect(indexHtml).toContain("endpoint.replace(/\\/$/, \"\")");
    expect(indexHtml).not.toContain("endpoint.replace(/\\\\/$/, \"\")");
  });
});

