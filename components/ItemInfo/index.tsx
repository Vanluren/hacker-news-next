import type { Item } from "@/types/Item";
import { DATE_OPTIONS, timeAgo } from "@/utils/time";
import Link from "next/link";

type ItemInfoProps = {
  id: Item["id"];
  by: Item["by"];
  time: Item["time"];
  url?: Item["url"];
  score?: Item["score"];
  descendants?: Item["descendants"];
};

const ItemInfo = ({ id, url, score, descendants, by, time }: ItemInfoProps) => {
  const prettyStoryHostname = (url && new URL(url).hostname) ?? null;

  return (
    <section className="text-sm text-gray-400 w-full gap-2 pt-2 flex flex-col">
      <div className="flex flex-row gap-2">
        {prettyStoryHostname && (
          <>
            <a href={url} className="text-[#ff6600]">
              {prettyStoryHostname}
            </a>
          </>
        )}
        {score && (
          <>
            <span>•</span>
            <span>{score} points</span>
          </>
        )}
        {descendants && (
          <>
            <span>•</span>
            <Link href={`/item/${id}`} prefetch>
              {descendants}&nbsp;comments
            </Link>
          </>
        )}
        {time && (
          <div className="flex gap-2">
            <span>•</span>
            <span
              title={new Date(time * 1000).toLocaleString(
                undefined,
                DATE_OPTIONS,
              )}
            >
              {timeAgo(time * 1000)}
            </span>
          </div>
        )}
      </div>
      <div className="hidden flex-row gap-2 md:flex">
        <Link href={`/user/${by}`} className="hover:text-[#ff6600]">
          {by}
        </Link>
        <span>•</span>
        <span>2000 karma</span>
      </div>
    </section>
  );
};

export default ItemInfo;
