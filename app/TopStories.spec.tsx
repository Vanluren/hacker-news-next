import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import TopStoriesPage, { getSortedTopStories } from "./page";

describe("Top Stories Page", async () => {
  test("it renders top stories", async () => {
    render(await TopStoriesPage({ searchParams: { page: "" } }));
    expect(screen.getByText("Top Stories")).toBeDefined();
  });

  test("it renders top stories with pagination", async () => {
    render(await TopStoriesPage({ searchParams: { page: "2" } }));
    expect(screen.getByTestId("pagination")).toBeDefined();
  });

  describe("calculateStoryIndex", () => {
    test("it calculates the correct index", async () => {
      render(await TopStoriesPage({ searchParams: { page: "2" } }));
      expect(screen.getByText("31.")).toBeDefined();
    });
  });

  describe("getSortedTopStories", () => {
    test("it fetches top stories", async () => {
      expect(await getSortedTopStories(1)).toBeDefined();
    });

    test("it fetches top stories with the correct length", async () => {
      expect((await getSortedTopStories(1)).length).toBe(30);
    });
    test("it returns an empty array if there is an error", async () => {
      expect(await getSortedTopStories(0)).toEqual([]);
    });

    test("it sorts the list by the story score", async () => {
      const stories = await getSortedTopStories(1);
      const firstStory = stories[0];
      const secondStory = stories[1];
      expect(firstStory.score).toBeGreaterThanOrEqual(secondStory.score);
    });
  });
});
