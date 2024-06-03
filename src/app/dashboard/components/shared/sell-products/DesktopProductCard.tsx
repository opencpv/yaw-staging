import calculateDaysSinceCreation from "@/lib/utils/calculateDaysSinceCreation";
import { formatDateOnly } from "@/lib/utils/stringManipulation";
import ProductStatus from "./ProductStatus";
import { TableBody, TableBodyRow } from "../table/Table";
import TbPropertyImage from "../TbPropertyImage";
import { formatPrice } from "@/lib/utils/numberManipulation";
import Actions from "./Actions";
import ProductCondition, { ItemCondition } from "./ProductCondition";
import PublicationStatus, { ItemPublicationStatus } from "./PublicationStatus";
import { createContext } from "react";
import { ItemContext } from "@/app/dashboard/contexts/ItemContext";

type Props = {
  data: Item;
};

const DesktopProductCard = ({ data: item }: Props) => {
  return (
    <ItemContext.Provider value={{ item }}>
      <TableBodyRow className="grid-cols-7">
        {/* Product */}
        <TableBody className="col-span-2 flex w-full gap-[0.62rem] truncate p-2.5 text-start">
          <TbPropertyImage
            title={item.title}
            image={item.images?.[0] as string}
            href={`/moving-sale/${item.title}?${new URLSearchParams({
              id: item.id.toString(),
              title: item.title,
              category: item.category,
              term: item.term,
              price: item.price.toString(),
              condition: item.condition,
              // seller: item.profiles?.full_name as string,
              description: item.description,
            })}`}
          />
          <div className="flex flex-col gap-2">
            <p className="text-base font-semibold">{item.title}</p>
            <small className="font-bold text-shade-200">
              {formatPrice(item.price)}
            </small>
            <ProductCondition condition={item.condition as ItemCondition} />
          </div>
        </TableBody>
        {/* Category */}
        <TableBody className="col-span-1">{item.category}</TableBody>
        {/* Created on */}
        <TableBody className="col-span-1">
          {formatDateOnly("October 29, 2024")}
        </TableBody>
        {/* Available */}
        <TableBody className="col-span-1">
          <ProductStatus
            status={item.status as ItemPublicationStatus}
            isAvailable={item.is_available}
          />
        </TableBody>
        {/* Publication */}
        <TableBody className="col-span-1">
          <PublicationStatus
            status={item.status as ItemPublicationStatus}
            isAvailable={item.is_available}
          />
        </TableBody>
        {/* Actions */}
        <TableBody className="col-span-1 mx-auto">
          <Actions />
        </TableBody>
      </TableBodyRow>
    </ItemContext.Provider>
  );
};

export default DesktopProductCard;
