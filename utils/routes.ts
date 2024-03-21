export const BASE_URL = "https://hacker-news.firebaseio.com/v0/";

export const ROUTES = {
  STORY: "/story/:id",
  COMMENT: "/comment/:id",
  USER: "/user/:id",
};

export const API_ROUTES = {
  TOP_STTORIES: BASE_URL + "topstories.json",
  ITEM: (id: number | string) => BASE_URL + `item/${id}.json`,
} as const;
