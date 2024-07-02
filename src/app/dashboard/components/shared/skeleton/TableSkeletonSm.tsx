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
      className="flex flex-col gap-3"
    >
      
        <Skeleton className="h-8 w-full rounded-xl" />
        <Skeleton className="h-8 w-32 rounded-xl" />
    </div>
  ));
};

export default TableSkeletonSm;
