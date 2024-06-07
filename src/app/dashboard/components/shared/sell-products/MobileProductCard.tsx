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
import { Product } from "@/lib/typings";
import CaDashEdit from "@/components/__shared/ui/icons/CaDashEdit";
import DeleteProductButton from "./DeleteProductButton";
import { createClient } from "@/lib/utils/supabase/auth/client";

interface Props {
  data: Product;
  refetch: () => void;
}
const MobileProductCard = ({ data, refetch }: Props) => {
  const { onClose, isOpen, onOpenChange, onOpen } = useDisclosure();
  const supabase = createClient();

  return (
    <>
      <DestructiveModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        label="Are you sure you want to delete this application?"
        handleDestruction={() => {}}
      />

      <TableRowSm>
        {/* Product */}
        <TableBodySm href="/properties/2">
          <div className="flex flex-wrap gap-5 truncate xsm:flex-nowrap">
            <TbPropertyImageSm title={data.title} image={data.images[0]} />
            <div className="flex flex-col gap-2">
              <p className="font-semibold">{data.title}</p>
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
            publicationStatus={data.status}
            isAvailable={data.is_available}
            id={data.id}
            refetch={refetch}
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
          {
            <>
              <EditButton onOpen={() => ""} />
              <DeleteButton
                handleDestruction={async () => {
                  const { data: product, error } = await supabase
                    .from("products")
                    .update({
                      is_deleted: true,
                      deletion_date: new Date().toDateString(),
                    })
                    .eq("id", data.id);
                  if (!error) {
                    refetch();
                  }
                }}
              />
            </>
          }
        </TableBodySm>
      </TableRowSm>
    </>
  );
};

export default MobileProductCard;
