import { Skeleton } from "@nextui-org/react";
import React from "react";

type Props = {
  rows: number;
  columns: number;
};

const TableSkeleton = ({ rows, columns }: Props) => {
  let rowsArray = Array.from({ length: rows }, (_, idx) => idx + 1);
  let columnsArray = Array.from({ length: columns }, (_, idx) => idx + 1);

  return rowsArray.map((row, idx) => (
    <tr key={idx + 1} className="border border-t-0 h-fit">
      {columnsArray.map((column, idx) =>
        column % 2 === 0 ? (
          <td key={idx + 2} className="p-2 pt-3 align-middle">
            <Skeleton
              className="w-48 h-12 rounded-xl"
            />
          </td>
        ) : (
          <td key={idx + 2} className="p-2 pt-3 align-middle">
            <Skeleton
              className="w-40 h-20 rounded-xl"
            />
          </td>
        )
      )}
    </tr>
  ));
};

export default TableSkeleton;
