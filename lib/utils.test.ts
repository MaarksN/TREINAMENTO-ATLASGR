import { describe, expect, it } from "vitest";
import { cn, genId, sha256Hex } from "./utils";

describe("cn", () => {
  it("merges class names and resolves tailwind conflicts", () => {
    expect(cn("p-2", "p-4")).toBe("p-4");
  });

  it("drops falsy values", () => {
    expect(cn("a", false, undefined, "b")).toBe("a b");
  });
});

describe("genId", () => {
  it("prefixes the id and uppercases it", () => {
    const id = genId("atlas");
    expect(id.startsWith("ATLAS-")).toBe(true);
  });

  it("generates distinct ids across calls", () => {
    const a = genId("x");
    const b = genId("x");
    expect(a).not.toBe(b);
  });
});

describe("sha256Hex", () => {
  it("produces a stable 64-char hex digest for the same input", async () => {
    const a = await sha256Hex("atlasgr");
    const b = await sha256Hex("atlasgr");
    expect(a).toBe(b);
    expect(a).toMatch(/^[0-9a-f]{64}$/);
  });

  it("produces different digests for different input", async () => {
    const a = await sha256Hex("atlasgr-1");
    const b = await sha256Hex("atlasgr-2");
    expect(a).not.toBe(b);
  });
});
