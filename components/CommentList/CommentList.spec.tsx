import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import CommentList, { getComments } from "./index";

const MOCK_COMMENTS = [
  {
    by: "pg",
    descendants: 15,
    id: 1,
    kids: [15, 234509, 487171, 82729],
    score: 57,
    time: 1160418111,
    title: "Y Combinator",
    type: "story",
    url: "http://ycombinator.com",
  },
  {
    by: "phyllis",
    descendants: 0,
    id: 2,
    score: 16,
    time: 1160418628,
    title: "A Student's Guide to Startups",
    type: "story",
    url: "http://www.paulgraham.com/mit.html",
  },
  {
    by: "phyllis",
    descendants: 0,
    id: 3,
    kids: [531602],
    score: 7,
    time: 1160419233,
    title: "Woz Interview: the early days of Apple",
    type: "story",
    url: "http://www.foundersatwork.com/stevewozniak.html",
  },
];

describe("CommentList", () => {
  test("should render comment", async () => {
    render(await CommentList({ commentIds: [] }));
  });

  describe("getComments", async () => {
    test("should return empty array if no commentIds are passed", async () => {
      expect(await getComments([])).toEqual([]);
    });
    test("should return comments", async () => {
      expect(await getComments([1, 2, 3])).toEqual(MOCK_COMMENTS);
    });
  });
});
