import { Skeleton } from "@nextui-org/react";
import React from "react";

type Props = {
  rows: number;
};

const TableMobileSkeleton = ({ rows }: Props) => {
  let rowsArray = Array.from({ length: rows }, (_, idx) => idx + 1);

  return rowsArray.map((_, idx) => (
    <div
      key={idx + 1}
      className="p-3 border border-neutral-200 mb-5 rounded-xl xs:p-8"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-5">
        {/*  */}
        <Skeleton
          className="rounded-xl w-20 h-40"
        />
        {/*  */}
        <Skeleton
          className="rounded-xl w-72 h-40"
        />
      </div>
      {/* */}
      <div className="mt-2 flex flex-wrap justify-between items-center gap-x-5 gap-y-3 py-3.5">
        <Skeleton
          className="rounded-xl w-32 h-8"
        />
        <Skeleton
          className="rounded-xl w-32 h-8"
        />
      </div>
      {/* */}
      <div className="mt-2 pt-3">
        <div className="flex gap-1.5">
          <Skeleton

            className="rounded-xl w-full h-12"
          />
          <Skeleton

            className="rounded-xl w-full h-12"
          />
        </div>
      </div>
    </div>
  ));
};

export default TableMobileSkeleton;
