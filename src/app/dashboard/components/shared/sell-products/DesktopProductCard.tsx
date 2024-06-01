import calculateDaysSinceCreation from "@/lib/utils/calculateDaysSinceCreation";
import { formatDate, formatDateOnly } from "@/lib/utils/stringManipulation";
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

type Props = {
  data: any;
};

const DesktopProductCard = ({ data }: Props) => {
  return (
    <TableBodyRow className="grid-cols-7">
      {/* Product */}
      <TableBody className="col-span-2 flex w-full gap-[0.62rem] truncate p-2.5">
        <TbPropertyImage title={data.product} image={data.img_url} />
        <div className="flex flex-col gap-2">
          <p className="text-base font-semibold">{data.product}</p>
          <small className="font-bold text-shade-200">
            {formatPrice(data.price)}
          </small>
          <ProductCondition condition={data.condition} />
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
          status={data.status}
          isAvailable={data.is_available}
          data={data}
        />
      </TableBody>
      {/* Publication */}
      <TableBody className="col-span-1">
        <PublicationStatus
          status={data.status}
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
