import { API_ROUTES } from "./routes";

export async function fetchItemById(id: number) {
  const result = await fetch(API_ROUTES.ITEM(id));
  return await result.json();
}

export async function fetchTopStories() {
  const result = await fetch(API_ROUTES.TOP_STTORIES);
  return await result.json();
}
