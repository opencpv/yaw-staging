import calculateDaysSinceCreation from "@/lib/utils/calculateDaysSinceCreation";
import { formatDateOnly } from "@/lib/utils/stringManipulation";
import ProductStatus from "./ProductStatus";
import { TableBody, TableBodyRow } from "../table/Table";
import TbPropertyImage from "../TbPropertyImage";
import { formatPrice } from "@/lib/utils/numberManipulation";
import Actions from "./Actions";
import ProductCondition, { ItemCondition } from "./ProductCondition";
import PublicationStatus, { ItemPublicationStatus } from "./PublicationStatus";

type Props = {
  data: Item;
};

const DesktopProductCard = ({ data }: Props) => {
  return (
    <TableBodyRow className="grid-cols-7">
      {/* Product */}
      <TableBody className="col-span-2 flex w-full gap-[0.62rem] truncate p-2.5 text-start">
        <TbPropertyImage
          title={data.title}
          image={data.images?.[0] as string}
          href={`/moving-sale/${data.title}?${new URLSearchParams({
            id: data.id.toString(),
            title: data.title,
            category: data.category,
            term: data.term,
            price: data.price.toString(),
            condition: data.condition,
            // seller: item.profiles?.full_name as string,
            description: data.description,
          })}`}
        />
        <div className="flex flex-col gap-2">
          <p className="text-base font-semibold">{data.title}</p>
          <small className="font-bold text-shade-200">
            {formatPrice(data.price)}
          </small>
          <ProductCondition condition={data.condition as ItemCondition} />
        </div>
      </TableBody>
      {/* Category */}
      <TableBody className="col-span-1">Category name</TableBody>
      {/* Created on */}
      <TableBody className="col-span-1">
        {formatDateOnly("October 29, 2024")}
      </TableBody>
      {/* Available */}
      <TableBody className="col-span-1">
        <ProductStatus
          status={data.status as ItemPublicationStatus}
          isAvailable={data.is_available}
          data={data}
        />
      </TableBody>
      {/* Publication */}
      <TableBody className="col-span-1">
        <PublicationStatus
          status={data.status as ItemPublicationStatus}
          isAvailable={data.is_available}
        />
      </TableBody>
      {/* Actions */}
      <TableBody className="col-span-1 mx-auto">
        <Actions data={data} />
      </TableBody>
    </TableBodyRow>
  );
};

export default DesktopProductCard;
