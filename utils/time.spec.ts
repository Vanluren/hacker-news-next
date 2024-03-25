import { describe, expect, test } from "vitest";
import { timeAgo } from "./time";

describe("Time Utils", () => {
  test("timeAgo should return a relative time string", () => {
    const now = Date.now();

    expect(timeAgo(now)).toBe("Just now");
  });
});
