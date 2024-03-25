"use client";

import { useRouter } from "next/navigation";

type PaginationProps = {
  currentPage: number;
};

const Pagination = ({ currentPage }: PaginationProps) => {
  const router = useRouter();

  const onPageChange = (page: number) => {
    if (page < 1) return;
    return router.push(`?page=${page}`);
  };

  return (
    <section
      className="w-full flex flex-row items-center justify-center py-4"
      data-testid="pagination"
    >
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="rounded-md bg-[#e8e8e1] px-4 py-2 text-sm text-gray-600"
      >
        More
      </button>
    </section>
  );
};

export default Pagination;
