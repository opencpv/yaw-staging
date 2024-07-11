"use client";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import style from "../Shared.module.css";
import { cn } from "@/lib/utils";

type Props = {
  handlePageClick: (event: { selected: number }) => void;
  pageCount: number;
  className?: string;
};

const Pagination = ({ className, handlePageClick, pageCount }: Props) => {
  return (
    <ReactPaginate
      breakLabel={<span className={`${style.paginationSquare}`}>...</span>}
      nextLabel={<FaChevronRight />}
      previousLabel={<FaChevronLeft />}
      onPageChange={handlePageClick}
      //pageRangeDisplayed={4}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      className={cn(
        "mt-14 flex w-full items-center justify-center gap-2 font-semibold",
        className,
      )}
      previousLinkClassName={`${style.paginationSquare} text-neutral-200`}
      previousClassName="rounded-md"
      nextLinkClassName={`${style.paginationSquare} text-neutral-200`}
      nextClassName="rounded-md"
      pageLinkClassName={`${style.paginationSquare}`}
      pageClassName="rounded-md"
      breakClassName={`${style.paginationSquare}`}
      disabledClassName="bg-neutral-300"
      disabledLinkClassName="text-white pointer-events-none cursor-not-allowed"
      activeLinkClassName="bg-primary text-white"
      hrefBuilder={() => null}
    />
  );
};

export default Pagination;

export const usePagination = ({
  items,
  itemsPerPage = 4,
}: {
  items: any[];
  itemsPerPage?: number;
}) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items?.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items?.length;
    setItemOffset(newOffset);
  };

  return {
    currentItems,
    itemsPerPage,
    pageCount,
    setItemOffset,
    handlePageClick,
  };
};
