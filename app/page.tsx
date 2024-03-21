import ListItem from "@/components/ListItem";
import { Story } from "@/types/Item";
import { API_ROUTES } from "@/utils/routes";

export default async function Page({}) {
  const stories = await getTopStories();
  return (
    <div className="">
      {stories.map((story, idx) => (
        <ListItem item={story} key={story.id} index={idx + 1} />
      ))}
    </div>
  );
}

async function getTopStories(): Promise<Story[]> {
  const result = await fetch(API_ROUTES.TOP_STTORIES);

  const topStoryIds = await result.json();

  const topStories = await Promise.all(
    topStoryIds
      .slice(0, 30)
      .map(async (storyId: number) =>
        fetch(API_ROUTES.ITEM(storyId)).then((res) => res.json()),
      ),
  );

  return topStories;
}
