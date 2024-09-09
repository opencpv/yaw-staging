import { TableBodySm, TableRowSm } from "@/components/__shared/ui/table";
import TbPropertyImageSm from "../ui/TbPropertyImageSm";
import { formatPrice } from "@/lib/utils/numberManipulation";
import PublicationStatus from "./PublicationStatus";
import ActionsMobile from "./ActionsMobile";
import { ItemContext } from "@/app/dashboard/contexts/ItemContext";
import { ProductStatusProp } from "@/lib/typings";

type Props = {
  data: Item;
  refetch: () => void;
  id: number;
};

const MobileProductCard = ({ data, id, refetch }: Props) => {
  return (
    <ItemContext.Provider value={{ item: data }}>
      <TableRowSm className="pb-0">
        <TableBodySm className="flex flex-nowrap gap-5">
          <div className="flex flex-col gap-3 max-xxs:hidden">
            {/* Image */}
            <TbPropertyImageSm
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
            {/* Date */}
            <small className="text-shade-200">3 days ago</small>
          </div>
          <div className="grid flex-1 justify-between gap-x-10 gap-y-3 [@media(min-width:400px)]:grid-cols-2">
            <div className="flex flex-1 flex-col items-start gap-3">
              {/* Product */}
              <p className="truncate font-semibold">{data.title}</p>
              {/* Status */}
              <PublicationStatus
                status={data.status as ProductStatusProp}
                isAvailable={data.is_available}
                id={id}
              />
            </div>
            {/* Price */}
            <p className="ml-auto font-bold text-shade-200">
              <span className="text-neutral-800">GHS</span>{" "}
              {formatPrice(data.price, false)}
            </p>
          </div>
          {/* Actions */}
          <ActionsMobile id={id} refetch={refetch} />
        </TableBodySm>
      </TableRowSm>
    </ItemContext.Provider>
  );
};

export default MobileProductCard;
