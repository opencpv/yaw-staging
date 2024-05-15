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
import ButtonDelete from "@/components/__shared/ui/button/ButtonDelete";

const MobileProductCard = ({ data }: { data: any }) => {
  const { onClose, isOpen, onOpenChange, onOpen } = useDisclosure();

  return (
    <>
      <DestructiveModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        label="Are you sure you want to delete this application?"
        id=""
        table="product_category"
      />

      <TableRowSm>
        {/* Product */}
        <TableBodySm href="/properties/2">
          <div className="flex flex-wrap gap-5 truncate xsm:flex-nowrap">
            <TbPropertyImageSm title={data.product} image={data.img_url} />
            <div className="flex flex-col gap-2">
              <p className="font-semibold">{data.product}</p>
              <ProductCondition condition={data.condition} />
              <p className="text-[13px] font-bold text-[#8A8A8A]">
                {formatPrice(data.price)}
              </p>
            </div>
          </div>
        </TableBodySm>

        {/* Status */}
        <TableBodySm className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3 pt-3.5">
          <ProductStatus
            publicationStatus={data.item_publication_status}
            isAvailable={data.isAvailable}
            id={data.id}
          />
        </TableBodySm>
        {/* Date */}
        <TableBodySm className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3 pt-3.5">
          <h4>Date</h4>
          <div className="text-center">
            <h4 className="text-sm font-[600]">{"October 29, 2024"}</h4>
            <small className="inline-block text-[0.6rem] text-neutral-400">
              3 days ago
            </small>
          </div>
        </TableBodySm>
        <TableBodySm className="flex  flex-wrap items-center justify-between gap-x-5 gap-y-3 pt-3">
          <h4>Category</h4>
          <p className="text-center text-[13px]">{data.category}</p>
        </TableBodySm>
        {/* Actions */}
        <TableBodySm className="flex justify-center gap-1.5 pt-3">
          {status === "not submitted" && (
            <>
              <EditButton onOpen={() => ""} />
              <ButtonDelete table="product_category" id="" />
            </>
          )}
        </TableBodySm>
        {/* <div className="col-span-2 grid grid-cols-2 gap-2  py-4 align-middle ">
          <button className="flex w-full cursor-pointer justify-center rounded-[8px] bg-secondary-50 p-4">
            <CaDashEdit />
          </button>
          <DeleteProductButton id={data.id} table="sell_items" />
        </div> */}
      </TableRowSm>
    </>
  );
};

export default MobileProductCard;
