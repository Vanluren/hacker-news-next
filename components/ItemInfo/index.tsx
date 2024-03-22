import type { Item } from "@/types/Item";
import { DATE_OPTIONS } from "@/utils/time";
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
    <section className="text-sm text-gray-400 w-full flex gap-2 pt-2">
      {prettyStoryHostname && (
        <>
          <a href={url} className="text-[#ff6600]">
            {prettyStoryHostname}
          </a>
          <span>•</span>
        </>
      )}
      <Link href={`/user/${by}`} className="hover:text-[#ff6600]">
        {by}
      </Link>
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
        <>
          <span>•</span>
          <span>{new Date(time).toLocaleString(undefined, DATE_OPTIONS)}</span>
        </>
      )}
    </section>
  );
};

export default ItemInfo;
