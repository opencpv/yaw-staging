import calculateDaysSinceCreation from "@/lib/utils/calculateDaysSinceCreation";
import { formatDate } from "@/lib/utils/stringManipulation";
import Image from "next/image";
import CaDashEdit from "../../../../../components/__shared/ui/icons/CaDashEdit";
import CaDashDelete from "../../../../../components/__shared/ui/icons/CaDashDelete";
import ProductStatus from "./ProductStatus";
import DeleteProductButton from "./DeleteProductButton";
import { TableBody, TableBodyRow } from "../table/Table";
import TbPropertyImage from "../TbPropertyImage";
import { formatPrice } from "@/lib/utils/numberManipulation";
import Actions from "./Actions";
import ProductCondition from "./ProductCondition";
import PublicationStatus, { ItemPublicationStatus } from "./PublicationStatus";
import { Product } from "@/lib/typings";

type Props = {
  data: Product;
  refetch: () => void;
};

const DesktopProductCard = ({ data, refetch }: Props) => {
  return (
    <TableBodyRow className="grid-cols-6">
      {/* Product */}
      <TableBody className="col-span-2 flex w-full gap-[0.62rem] truncate p-2.5">
        <TbPropertyImage title={data.title} image={data.images[0]} />
        <div className="flex flex-col gap-2">
          <p className="font-semibold">{data.title}</p>
          <ProductCondition condition={data.condition} />
          <p className="text-[13px] font-bold text-[#8A8A8A]">
            {formatPrice(data.price)}
          </p>
        </div>
      </TableBody>
      {/* Date Created */}
      <TableBody className="col-span-1 text-center">
        <h4>{"October 29, 2024"}</h4>
        <small className="inline-block text-[0.6rem] text-neutral-400">
          3 days ago
        </small>
      </TableBody>
      {/* Status */}
      <TableBody className="col-span-1">
        <ProductStatus
          publicationStatus={data.status}
          isAvailable={data.is_available}
          id={data.id}
          refetch={refetch}
        />
      </TableBody>
      {/* Publication */}
      <TableBody className="col-span-1 font-semibold">
        <PublicationStatus
          status={data.status}
          productStatus={data.is_available ? "available" : "unavailable"}
        />
      </TableBody>
      {/* Actions */}
      <TableBody className="col-span-1 mx-auto">
        <Actions id={data.id} table="sell_items" refetch={refetch} />
      </TableBody>
    </TableBodyRow>
  );
};

export default DesktopProductCard;
