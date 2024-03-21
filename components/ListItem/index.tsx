import type { Item } from "@/types/Item";
import Link from "next/link";
import ItemInfo from "@/components/ItemInfo";

type ItemProps = {
  item: Item;
  index: number;
};

const ListItem = ({ item, index }: ItemProps) => {
  return (
    <article
      id={item.id.toString()}
      className="flex flex-col gap-x-2 relative pr-20 pb-6 pl-12 "
    >
      <div className="text-lg absolute left-0 w-8 text-gray-500">{index}.</div>
      <Link href="" target="_blank" className="text-xl relative">
        {item.title}
      </Link>
      <ItemInfo
        id={item.id}
        url={item.url}
        by={item.by}
        descendants={item.descendants}
      />
    </article>
  );
};
export default ListItem;
