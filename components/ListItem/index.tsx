import type { Item } from "@/types/Item";
import Link from "next/link";
import ItemInfo from "@/components/ItemInfo";

type ItemProps = {
  item: Item;
  index: number;
};

const ListItem = ({ item, index }: ItemProps) => {
  const itemLink = item.url ? item.url : `/item/${item.id}`;
  return (
    <article
      id={item.id.toString()}
      className="flex flex-col gap-x-2 relative pr-20 pb-6 pl-12 "
    >
      <div className="text-lg absolute left-0 w-8 text-gray-500">{index}.</div>
      <Link href={itemLink} target="_blank" className="text-xl relative">
        {item.title}
      </Link>
      <ItemInfo
        id={item.id}
        url={item.url}
        by={item.by}
        score={item.score}
        descendants={item.descendants}
      />
    </article>
  );
};
export default ListItem;
