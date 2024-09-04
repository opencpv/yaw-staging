"use client";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import style from "../../Shared.module.css";
import { cn } from "@/lib/utils";

type Props = {
  onPageChange: (event: { selected: number }) => void;
  pageCount: number;
  className?: string;
  forcePage?: number;
};

/**
 * Used to paginate through a list of items. Accompanied with a usePagination hook
 */
const Pagination = ({
  className,
  onPageChange,
  pageCount,
  forcePage,
}: Props) => {
  return (
    <ReactPaginate
      breakLabel={<span className={`${style.paginationSquare}`}>...</span>}
      nextLabel={<FaChevronRight />}
      previousLabel={<FaChevronLeft />}
      onPageChange={onPageChange}
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
      forcePage={forcePage}
    />
  );
};

export default Pagination;

export const usePagination = ({
  items,
  itemsPerPage = 4,
  variable,
}: {
  items: any[];
  itemsPerPage?: number;
  variable?: any;
}) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [currentPage, setCurrentPage] = useState(0); // Zero-based index for pages
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items?.length / itemsPerPage) || 0;

  // Reset pagination when filter changes
  useEffect(() => {
    setCurrentPage(0);
    setItemOffset(0);
  }, [variable]);

  // Invoke when user click to request another page.
  const handlePageChange = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items?.length;
    const newPage = event.selected;
    setCurrentPage(newPage);
    setItemOffset(newOffset);
    //router.push(`?page=${event.selected + 1}`, { scroll: false });
  };

  return {
    currentItems,
    itemsPerPage,
    pageCount,
    setItemOffset,
    currentPage,
    handlePageChange,
  };
};
