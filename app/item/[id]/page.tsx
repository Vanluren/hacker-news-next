import type { Item as ItemType } from "@/types/Item";
import Link from "next/link";
import { API_ROUTES } from "@/utils/routes";
import ItemInfo from "@/components/ItemInfo";
import { Suspense } from "react";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const item = await getItem(id);

  const comments = await Promise.all(
    item.kids?.map((kid) => getItem(kid.toString())) ?? [],
  );

  return (
    <article className="mx-auto w-4/5">
      <section className="border-b-[#e8e8e1] border-b-2 pb-8">
        <Link href={item.url ?? ""}>
          <h1 className="font-semibold text-3xl">{item.title}</h1>
        </Link>
        {item.text && (
          <div
            className="text-md text-gray-600  py-6"
            dangerouslySetInnerHTML={{ __html: item.text }}
          />
        )}
        <ItemInfo id={item.id} url={item.url} by={item.by} score={item.score} />
      </section>
    </article>
  );
}

const getItem = async (id: string): Promise<ItemType> => {
  const response = await fetch(API_ROUTES.ITEM(id));
  console.log(API_ROUTES.ITEM(id));
  return await response.json();
};
