import ListItem from "@/components/ListItem";
import { Story } from "@/types/Item";
import { fetchItemById, fetchTopStories } from "@/utils/api";
import Pagination from "@/components/Pagination";
import { DATE_OPTIONS } from "@/utils/time";

const TOTAL_STORIES = 30;

export default async function TopStoriesPage({
  searchParams,
}: {
  searchParams?: { page: string };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const stories = await getSortedTopStories(currentPage);

  return (
    <article>
      <section className="w-full flex items-center md:justify-between pb-8 lg:pb-12 border-b-[1px] border-b-[#e8e8e1] mb-8">
        <h1 className="text-4xl font-semibold">Top Stories</h1>
        <span className="text-gray-400">
          {new Date().toLocaleString(undefined, DATE_OPTIONS)}
        </span>
      </section>
      {stories.map((story, idx) => (
        <ListItem
          item={story}
          key={story.id}
          index={calculateStoryIndex(idx, currentPage)}
        />
      ))}
      <Pagination currentPage={currentPage} />
    </article>
  );
}

function calculateStoryIndex(elementIndex: number, currentPage: number) {
  const firstElementIndex = (currentPage - 1) * TOTAL_STORIES;
  return firstElementIndex + elementIndex + 1;
}

function sortStoriesByScore(stories: Story[]) {
  return stories.sort((a, b) => b.score - a.score);
}

export async function getSortedTopStories(
  currentPage: number,
): Promise<Story[]> {
  try {
    const topStoryIds = await fetchTopStories();

    const shownStoriesStart = (currentPage - 1) * TOTAL_STORIES;
    const shownStoriesend = currentPage * TOTAL_STORIES;

    const topStories = await Promise.all(
      topStoryIds.slice(shownStoriesStart, shownStoriesend).map(fetchItemById),
    );

    const sortedStories = sortStoriesByScore(topStories);

    return sortedStories;
  } catch (error) {
    return [];
  }
}
