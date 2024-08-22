import React from "react";
import { TableBody, TableBodyRow } from "../table";
import { cn } from "@/lib/utils";

type Props = {
  rows: number;
  columns: number;
  rowClassName?: string;
};

const TableSkeleton = ({ rows, columns, rowClassName }: Props) => {
  let rowsArray = Array.from({ length: rows }, (_, idx) => idx + 1);
  let columnsArray = Array.from({ length: columns }, (_, idx) => idx + 1);

  return rowsArray.map((_, idx) => (
    // <TableBodyRow
    //   key={idx + 1}
    //   className={cn(
    //     `h-fit border border-t-0 grid-cols-${columns}`,
    //     rowClassName,
    //   )}
    // >
    //   {columnsArray.map((column, idx) =>
    //     column % 2 === 0 ? (
    //       <TableBody key={idx + 2} className="">
    //         <Skeleton className="h-12 w-48 rounded-xl" />
    //       </TableBody>
    //     ) : (
    //       <TableBody key={idx + 2} className="p-2 pt-3 align-middle">
    //         <Skeleton className="h-20 w-40 rounded-xl" />
    //       </TableBody>
    //     ),
    //   )}
    // </TableBodyRow>
    <></>
  ));
};

export default TableSkeleton;
