export type ItemType = "story" | "comment" | "job" | "poll" | "pollopt";
export type Item = {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: ItemType;
};

export type Comment = Item & { type: "comment" };
export type Story = Item & { type: "story" };
export type Job = Item & { type: "job" };
