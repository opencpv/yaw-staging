import { formatDateOnly } from "@/lib/utils/stringManipulation";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { generatePropertyTitle, getListingProps } from "@/lib/enum";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import {
  TableBody,
  TableBodyRow,
} from "@/app/dashboard/components/shared/table/Table";
import TbPropertyImage from "@/app/dashboard/components/shared/TbPropertyImage";
import PublicationStatus from "./PublicationStatus";
import PropertyStatus from "./PropertyStatus";
import Actions from "./Actions";

type Props = {
  listing: Property;
};

const PropertyRow = ({ listing }: Props) => {
  const { user } = useAppStore();
  const { images } = useAssets();

  return (
    <TableBodyRow className="grid-cols-6">
      {/* Property */}
      <TableBody className="col-span-2 items-start flex w-full gap-[0.62rem] truncate p-2.5 text-start">
        <TbPropertyImage
          title={listing?.property_name || ""}
          //@ts-ignore
          image={listing?.banner_image?.image || images.NoImagePlaceholder}
          href={getListingProps(listing, user as UserType)?.href}
        />
        {/* Title */}
        <div className="flex flex-col gap-2">
          {listing?.property_name ? (
            <p className="text-base font-semibold">{listing?.property_name}</p>
          ) : (
            <p className="text-base italic text-primary">[No Title]</p>
          )}
          {listing?.monthly_amount ? (
            <small className="font-bold text-shade-200">
              {formatPrice(
                listing?.monthly_amount as number,
                true,
                listing?.currency || "GHS",
              )}{" "}
              / month
            </small>
          ) : (
            <small className="italic text-shade-200">[No Price]</small>
          )}
        </div>
      </TableBody>
      {/* Date created */}
      <TableBody className="col-span-1">
        {listing?.is_complete ? (
          formatDateOnly(listing?.created_at)
        ) : (
          <p className="text-base italic text-primary">[No Date]</p>
        )}
      </TableBody>
      {/* Published status */}
      <TableBody className="col-span-1">
        <PublicationStatus listing={listing} />
      </TableBody>
      {/* Property Status */}
      <TableBody className="col-span-1">
        <PropertyStatus listing={listing} />
      </TableBody>
      {/* Actions */}
      <TableBody className="col-span-1 mx-auto">
        <Actions listing={listing} />
      </TableBody>
    </TableBodyRow>
  );
};

export default PropertyRow;
