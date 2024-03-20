import { Story } from "@/types/Item";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

export default function Page({ stories }) {
  return (
    <main>
      {stories.map((story) => (
        <div key={story.id}>{story.title}</div>
      ))}
    </main>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");

  const stories: Story[] = await res.json();

  return { props: { stories } };
}
