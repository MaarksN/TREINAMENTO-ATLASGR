import { describe, expect, it } from "vitest";
import { BADGES, LEVELS, getLevel, levelProgress } from "./gamification";

describe("getLevel", () => {
  it("returns level 1 for 0 xp", () => {
    expect(getLevel(0).level).toBe(1);
  });

  it("returns the correct level at each threshold boundary", () => {
    for (const l of LEVELS) {
      expect(getLevel(l.minXp).level).toBe(l.level);
    }
  });

  it("returns the top level for very high xp", () => {
    expect(getLevel(999999).level).toBe(LEVELS[LEVELS.length - 1].level);
  });
});

describe("levelProgress", () => {
  it("reaches 100% progress at the final level", () => {
    const { pct, next } = levelProgress(999999);
    expect(next).toBeNull();
    expect(pct).toBe(100);
  });

  it("computes a percentage between 0 and 100 for an intermediate level", () => {
    const { pct } = levelProgress(200);
    expect(pct).toBeGreaterThanOrEqual(0);
    expect(pct).toBeLessThanOrEqual(100);
  });
});

describe("BADGES", () => {
  it("has unique ids", () => {
    const ids = BADGES.map((b) => b.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
