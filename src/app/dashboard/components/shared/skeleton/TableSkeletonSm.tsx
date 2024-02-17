import { Skeleton } from "@nextui-org/react";
import React from "react";

type Props = {
  rows: number;
};

const TableSkeletonSm = ({ rows }: Props) => {
  let rowsArray = Array.from({ length: rows }, (_, idx) => idx + 1);

  return rowsArray.map((_, idx) => (
    <div
      key={idx + 1}
      className="mb-5 rounded-xl border border-neutral-200 p-3 xs:p-8"
    >
      <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3">
        {/*  */}
        <Skeleton className="h-40 w-20 rounded-xl" />
        {/*  */}
        <Skeleton className="h-40 w-72 rounded-xl" />
      </div>
      {/* */}
      <div className="mt-2 flex flex-wrap items-center justify-between gap-x-5 gap-y-3 py-3.5">
        <Skeleton className="h-8 w-32 rounded-xl" />
        <Skeleton className="h-8 w-32 rounded-xl" />
      </div>
      {/* */}
      <div className="mt-2 pt-3">
        <div className="flex gap-1.5">
          <Skeleton className="h-12 w-full rounded-xl" />
          <Skeleton className="h-12 w-full rounded-xl" />
        </div>
      </div>
    </div>
  ));
};

export default TableSkeletonSm;
