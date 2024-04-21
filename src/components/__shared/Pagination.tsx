"use client";
import React from "react";
import { Pagination as NextUIPagination } from "@nextui-org/react";
import Button from "./ui/button/Button";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

type Props = {
  total: number;
  nextDisabled: boolean;
  prevDisabled: boolean;
  handlePrev: () => void;
  handleNext: () => void;
};

const Pagination = ({
  total,
  handlePrev,
  handleNext,
  nextDisabled,
  prevDisabled,
}: Props) => {
  const [page, setPage] = React.useState(1);

  return (
    <div className="flex justify-center">
      <div className="flex items-center gap-1">
        <Button
          isIconOnly
          disabled={prevDisabled}
          className={`${
            prevDisabled === true
              ? "cursor-not-allowed bg-neutral-300"
              : "border bg-transparent"
          } h-full p-1`}
          onClick={() => {
            setPage((prev) => (prev > 1 ? prev - 1 : prev));
            handlePrev && handlePrev();
          }}
        >
          <MdChevronLeft className="text-neutral-800" />
        </Button>
        <NextUIPagination
          classNames={{
            item: "rounded-md border bg-transparent data-[active=true]:border-accent-50 data-[active=true]:text-accent-50 border-neutral-400 text-neutral-800 h-10 font-[500]",
            cursor:
              "border-accent-50 bg-transparent outline-accent-50 text-accent-50",
            ellipsis: "text-neutral-899",
          }}
          total={Math.ceil(total)}
          variant="bordered"
          page={page}
          onChange={setPage}
        />
        <Button
          isIconOnly
          disabled={nextDisabled}
          className={`${
            nextDisabled === true
              ? "cursor-not-allowed bg-neutral-300"
              : "border bg-transparent"
          } h-full p-1`}
          onClick={() => {
            setPage((prev) => (prev < 10 ? prev + 1 : prev));
            handleNext && handleNext();
          }}
        >
          <MdChevronRight className="text-neutral-800" />
        </Button>
      </div>
      <div className="flex gap-2"></div>
    </div>
  );
};

export default Pagination;
