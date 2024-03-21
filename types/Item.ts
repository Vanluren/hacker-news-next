export type ItemType = "story" | "comment" | "job" | "poll" | "pollopt";
export type Item = {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  title: string;
  text: string;
  time: number;
  type: ItemType;
  url: string;
  score?: number;
  descendants?: number;
};

export type Comment = Item & {
  type: "comment";
  score: number;
  descendants: number;
};
export type Story = Item & {
  type: "story";
  score: number;
  descendants: number;
};
export type Job = Item & { type: "job"; score: never; descendants: never };
