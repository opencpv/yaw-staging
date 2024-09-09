import React from "react";
import PropertyStatus from "./PropertyStatus";
import { TableBodySm, TableRowSm } from "@/components/__shared/ui/table";
import PublicationStatus from "./PublicationStatus";
import { generatePropertyTitle, getListingProps } from "@/lib/enum";
import TbPropertyImageSm from "@/app/dashboard/components/shared/ui/TbPropertyImageSm";
import { useAppStore } from "@/store/dashboard/AppStore";
import { formatPrice } from "@/lib/utils/numberManipulation";
import Actions from "./Actions";
import { useAssets } from "@/lib/custom-hooks/useAssets";

const PropertyRowMobile = ({ listing }: { listing: Property }) => {
  const { user } = useAppStore();
  const { images } = useAssets();

  return (
    <TableRowSm className="pb-0">
      <TableBodySm className="flex flex-nowrap gap-5">
        <div className="flex flex-col gap-3 max-xxs:hidden">
          {/* Image */}
          <TbPropertyImageSm
            title={listing?.property_name || ""}
            //@ts-ignore
            image={listing?.banner_image?.image || images.NoImagePlaceholder}
            href={getListingProps(listing, user as UserType)?.href}
          />
          {/* 
            <small className="text-shade-200">3 days ago</small>
          */}
        </div>
        <div className="grid flex-1 justify-between gap-x-10 gap-y-3 [@media(min-width:400px)]:grid-cols-2">
          <div className="flex flex-1 flex-col items-start gap-3">
            {/* Title */}
            {listing?.property_name ? (
              <p className="truncate font-semibold">{listing?.property_name}</p>
            ) : (
              <p className="truncate font-semibold italic text-primary">
                [No Title]
              </p>
            )}
            {/* Status */}
            <PropertyStatus listing={listing} />
          </div>
          {/* Price */}
          <p className="font-bold text-shade-200 min-[400px]:ml-auto min-[400px]:text-end">
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
              <small className="italic text-shade-300">[No Price]</small>
            )}
          </p>
        </div>
        {/* Actions */}
        <Actions listing={listing} />
      </TableBodySm>
    </TableRowSm>
  );
};

export default PropertyRowMobile;
