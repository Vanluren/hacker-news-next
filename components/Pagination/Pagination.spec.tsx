import { describe, expect, test, vitest } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./index";
import mockRouter from "next-router-mock";

describe("Pagination", () => {
  test("should render correctly", () => {
    render(<Pagination currentPage={1} />);
    expect(screen.getByRole("button")).toBeDefined();
  });

  test("when the user clicks it should redirect the user to the url containing the correct page number", () => {
    render(<Pagination currentPage={1} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockRouter).toMatchObject({
      query: { page: "2" },
    });
  });
});
