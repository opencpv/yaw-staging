import calculateDaysSinceCreation from "@/lib/utils/calculateDaysSinceCreation";
import { formatDate } from "@/lib/utils/stringManipulation";
import Image from "next/image";
import CaDashEdit from "../../icons/CaDashEdit";
import CaDashDelete from "../../icons/CaDashDelete";
import ProductStatus from "./ProductStatus";
import DeleteProductButton from "./DeleteProductButton";
import { TableBody, TableBodyRow } from "../table/Table";
import TbPropertyImage from "../TbPropertyImage";
import { formatPrice } from "@/lib/utils/numberManipulation";
import Actions from "./Actions";
import ProductCondition from "./ProductCondition";
import PublicationStatus, { ItemPublicationStatus } from "./PublicationStatus";

type Props = {
  data: any;
};

const DesktopProductCard = ({ data }: Props) => {
  return (
    <TableBodyRow className="grid-cols-6">
      {/* Product */}
      <TableBody className="col-span-2 flex w-full gap-[0.62rem] truncate p-2.5">
        <TbPropertyImage title={data.product} image={data.img_url} />
        <div className="flex flex-col gap-2">
          <p className="font-semibold">{data.product}</p>
          <ProductCondition condition={data.condition} />
          <p className="text-[13px] font-bold text-[#8A8A8A]">
            GHS {formatPrice(data.price)}
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
          publicationStatus={data.item_publication_status}
          isAvailable={data.is_available}
          id={data.id}
        />
      </TableBody>
      {/* Publication */}
      <TableBody className="col-span-1 font-semibold">
        <PublicationStatus
          status={data.item_publication_status}
          productStatus={data.is_available ? "available" : "sold"}
        />
      </TableBody>
      {/* Actions */}
      <TableBody className="col-span-1 mx-auto">
        <Actions id={data.id} table="sell_items" />
      </TableBody>
    </TableBodyRow>
  );
};

export default DesktopProductCard;
