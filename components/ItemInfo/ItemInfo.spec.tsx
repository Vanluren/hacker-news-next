import { describe, beforeEach, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ItemInfo from ".";
import { MOCK_ITEM } from "@/test/mocks";
import { DATE_OPTIONS, timeAgo } from "@/utils/time";

describe("ItemInfo", () => {
  beforeEach(() => {
    render(
      <ItemInfo
        id={MOCK_ITEM.id}
        by={MOCK_ITEM.by}
        time={MOCK_ITEM.time}
        score={MOCK_ITEM.score}
        descendants={MOCK_ITEM.descendants}
        url={MOCK_ITEM.url}
      />,
    );
  });

  test("renders the item by line", () => {
    expect(screen.getByText(MOCK_ITEM.by)).toBeDefined();
  });

  test("renders the item score", () => {
    expect(screen.getByText(`${MOCK_ITEM.score} points`)).toBeDefined();
  });

  test("renders the item comment count", () => {
    expect(screen.getByText(`${MOCK_ITEM.descendants} comments`)).toBeDefined();
  });

  test("renders the pretty version of the item hostname", () => {
    expect(screen.getByText("en.wikipedia.org")).toBeDefined();
  });

  test("renders the item time, in a pretty format", () => {
    expect(screen.getByText(timeAgo(MOCK_ITEM.time * 1000))).toBeDefined();
  });
});
