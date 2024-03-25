import { describe, expect, test } from "vitest";
import { fetchItemById, fetchTopStories } from "./api";

describe("API Utils", () => {
  test("fetchItemById should return an item", async () => {
    const item = await fetchItemById(1);
    expect(item).toEqual({
      by: "pg",
      descendants: 15,
      id: 1,
      kids: [15, 234509, 487171, 82729],
      score: 57,
      time: 1160418111,
      title: "Y Combinator",
      type: "story",
      url: "http://ycombinator.com",
    });
  });

  test("fetchTopStories should return an array of items", async () => {
    const items = await fetchTopStories();

    expect(items).toBeInstanceOf(Array);
  });
});
