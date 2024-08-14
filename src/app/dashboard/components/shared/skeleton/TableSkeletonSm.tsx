import { Skeleton } from "@nextui-org/react";
import React from "react";
import { TableBodySm, TableRowSm } from "../table/Table";
import TbPropertyImageSm from "../TbPropertyImageSm";
import { useAssets } from "@/lib/custom-hooks/useAssets";

type Props = {
  rows: number;
};

const TableSkeletonSm = ({ rows }: Props) => {
  const { images } = useAssets();
  let rowsArray = Array.from({ length: rows }, (_, idx) => idx + 1);

  return rowsArray.map((_, idx) => (
    <TableRowSm key={idx} className="pb-0">
      <TableBodySm className="flex flex-nowrap gap-5">
        {/* Image */}
        <Skeleton isLoaded={false} className="rounded-md">
          <div className="flex flex-col gap-3 max-xxs:hidden">
            <TbPropertyImageSm
              title={""}
              image={images.NoImagePlaceholder}
              href={""}
            />
          </div>
        </Skeleton>
        <div className="grid flex-1 justify-between gap-x-10 gap-y-3 [@media(min-width:400px)]:grid-cols-2">
          <div className="flex flex-1 flex-col  items-start gap-3">
            {/* Title */}
            <Skeleton isLoaded={false} className="rounded-md"><p>Lorem, ipsum.</p></Skeleton>
            {/* Status */}
            <Skeleton isLoaded={false} className="rounded-md"><div>Lorem, ipsum.</div></Skeleton>
          </div>
          {/* Price */}
          <Skeleton isLoaded={false} className="rounded-md"><div>Lorem, ipsum Lorem.</div></Skeleton>
        </div>
        {/* Actions */}
        <Skeleton isLoaded={false} className="rounded-full h-5"><div>L</div></Skeleton>
      </TableBodySm>
    </TableRowSm>
  ));
};

export default TableSkeletonSm;
