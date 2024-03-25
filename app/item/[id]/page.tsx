import Link from "next/link";
import ItemInfo from "@/components/ItemInfo";
import CommentList from "@/components/CommentList";
import { fetchItemById } from "@/utils/api";

export default async function SingleItemPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const item = await fetchItemById(Number(id));

  return (
    <article className="mx-auto w-4/5">
      <section className="border-b-[#e8e8e1] border-b-2 pb-8">
        <Link href={item.url ?? ""}>
          <h1 className="font-semibold text-3xl">{item.title}</h1>
        </Link>
        {item.text && (
          <p
            className="text-md text-gray-600  py-6"
            dangerouslySetInnerHTML={{ __html: item.text }}
          />
        )}
        <ItemInfo
          id={item.id}
          url={item.url}
          by={item.by}
          score={item.score}
          time={item.time}
        />
      </section>
      <CommentList commentIds={item.kids} />
    </article>
  );
}
