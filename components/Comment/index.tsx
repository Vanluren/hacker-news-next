import { Comment, Item } from "@/types/Item";
import { timeAgo } from "@/utils/time";

const Comments = ({ by, time, text }: Item) => (
  <li className="flex flex-col space-y-4 mt-4 border-b-[#e8e8e1] border-b-[1.5px] w-full">
    <div className="flex flex-col divide-y divide-gray-100 dark:divide-black-400 space-y-">
      <div className="flex flex-row gap-2 text-gray-400">
        <span className="font-semibold">{by}</span>
        <span>•</span>
        <span>{timeAgo(time * 1000)}</span>
      </div>
      {text && (
        <p
          className="text-md text-gray-600 py-6"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
    </div>
  </li>
);

export default Comments;
