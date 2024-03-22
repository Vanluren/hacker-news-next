import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import ListItem from "./";
import { MOCK_ITEM } from "../../test/mocks";

describe("ListItem", () => {
  beforeEach(() => {
    render(<ListItem item={MOCK_ITEM} index={0} />);
  });

  test("should render a list item", () => {
    const item = screen.getByRole("article");
    expect(item).toBeDefined();
  });

  test("should render the item title", () => {
    const title = screen.getByText(MOCK_ITEM.title);
    expect(title).toBeDefined();
  });

  test("the title should be a link", () => {
    const title = screen.getByText(MOCK_ITEM.title);
    expect(title.tagName).toBe("A");
  });
});
