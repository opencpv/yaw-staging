import ProductStatus from "./ProductStatus";
import { formatDate } from "@/lib/utils/stringManipulation";
import calculateDaysSinceCreation from "@/lib/utils/calculateDaysSinceCreation";
import DestructiveModal from "@/components/__shared/ui/modals/DestructiveModal";
import { useDisclosure } from "@nextui-org/react";
import { TableBodySm, TableRowSm } from "../table/Table";
import TbPropertyImageSm from "../TbPropertyImageSm";
import ProductCondition from "./ProductCondition";
import { formatPrice } from "@/lib/utils/numberManipulation";
import EditButton from "@/components/__shared/ui/button/EditButton";
import DeleteButton from "@/components/__shared/ui/button/DeleteButton";
import PublicationStatus from "./PublicationStatus";
import Actions from "./Actions";
import ActionsSm from "./ActionsSm";

type Props = {
  data: any;
};

const MobileProductCard = ({ data }: Props) => {
  const { onClose, isOpen, onOpenChange, onOpen } = useDisclosure();

  return (
    <>
      <DestructiveModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        label="Are you sure you want to delete this application?"
        handleDestruction={() => {}}
      />

      <TableRowSm className="pb-0">
        <TableBodySm className="flex flex-nowrap gap-5">
          <div className="flex flex-col gap-3 max-xxs:hidden">
            {/* Image */}
            <TbPropertyImageSm title={data.product} image={data.img_url} />
            {/* Date */}
            <small className="text-shade-200">3 days ago</small>
          </div>
          <div className="grid flex-1 justify-between gap-x-10 gap-y-3 xsm:grid-cols-2">
            <div className="flex flex-1 flex-col  items-start gap-3">
              {/* Product */}
              <p className="truncate font-semibold">{data.product}</p>
              {/* Status */}
              <PublicationStatus
                status={data.status}
                isAvailable={data.is_available}
              />
            </div>
            {/* Price */}
            <p className="ml-auto font-bold text-shade-200">
              <span className="text-neutral-800">GHS</span>{" "}
              {formatPrice(data.price, false)}
            </p>
          </div>
          <ActionsSm data={data} />
        </TableBodySm>
        {/* Actions */}
      </TableRowSm>
    </>
  );
};

export default MobileProductCard;
