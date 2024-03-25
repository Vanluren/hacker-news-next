import { render } from "@testing-library/react";
import { describe, test } from "vitest";
import Comment from "./index";
import { MOCK_ITEM } from "@/test/mocks";

describe("Comment", () => {
  test("should render comment", () => {
    render(
      <Comment
        by={MOCK_ITEM.by}
        time={MOCK_ITEM.time}
        text={MOCK_ITEM.text}
        id={MOCK_ITEM.id}
        kids={[]}
        parent={0}
        type={"comment"}
        score={0}
        descendants={0}
        title={""}
        url={""}
      />,
    );
  });
});
