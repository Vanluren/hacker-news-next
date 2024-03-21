import type { Item } from "@/types/Item";
import Link from "next/link";

type ItemInfoProps = {
  id: Item["id"];
  by: Item["by"];
  url?: Item["url"];
  score?: Item["score"];
  descendants?: Item["descendants"];
};

const ItemInfo = ({ id, url, score, descendants, by }: ItemInfoProps) => {
  const prettyStoryHostname = (url && new URL(url).hostname) ?? null;

  return (
    <article className="text-sm text-gray-400 w-full flex gap-2 pt-2">
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
    </article>
  );
};

export default ItemInfo;
