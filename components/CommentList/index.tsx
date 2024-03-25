import Comment from "@/components/Comment";
import { Item } from "@/types/Item";
import { fetchItemById } from "@/utils/api";

const CommentList = async ({ commentIds }: { commentIds: Item["kids"] }) => {
  const comments = await getComments(commentIds);

  if (!comments.length)
    return (
      <section data-testid="comment-list">
        <p>No comments yet</p>
      </section>
    );
  return (
    <section data-testid="comment-list">
      <ul className="list-none">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            time={comment.time}
            by={comment.by}
            text={comment.text}
          />
        ))}
      </ul>
    </section>
  );
};

export const getComments = async (ids: number[]): Promise<Item[]> => {
  try {
    const comments = await Promise.all(
      ids.map(async (id) => fetchItemById(id)),
    );
    return comments.filter((comment) => comment !== null) as Item[];
  } catch (error) {
    return [];
  }
};

export default CommentList;
