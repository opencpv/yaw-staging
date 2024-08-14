import React from "react";
import { format } from "date-fns";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import calculateDaysSinceCreation from "@/lib/utils/calculateDaysSinceCreation";
import { pluralize } from "@/lib/utils/stringManipulation";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { generatePropertyTitle } from "@/lib/enum";
import { Json } from "../../../../../../../database.types";
import style from "../../index.module.css";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const ListingModal = dynamic(() => import("../steps/ListingModal"));

type Props = {
  listing: Property & {
    banner_image:
      | {
          image: StaticImageData;
        }
      | Json;
  };
};

const PropertyCard = (props: Props) => {
  const { images } = useAssets();
  const length = calculateDaysSinceCreation(props.listing.created_at);
  //@ts-ignore
  const image = props.listing.banner_image?.image || images.NoImagePlaceholder;

  return (
    <div className={style.card}>
      {props.listing.is_published ? (
        <Link
          href={`/properties/${props.listing?.id}`}
          className={style.cardLink}
        >
          <Image
            src={image}
            alt={generatePropertyTitle(props.listing)}
            fill
            className={cn(style.cardImage, "brightness-95")}
          />
        </Link>
      ) : (
        <div className={style.cardLink}>
          <Image
            src={image}
            alt={generatePropertyTitle(props.listing)}
            fill
            className={cn(style.cardImage, "brightness-95")}
          />
        </div>
      )}
      <h4>
        {props.listing?.property_name ||
          generatePropertyTitle(props.listing) ||
          " - "}
      </h4>
      <div className="flex items-center justify-between gap-x-5 gap-y-3 text-shade-300 max-xxs:flex-wrap">
        <p className="text-base">
          {format(new Date(props.listing?.created_at), "dd MMMM yyyy")}
        </p>
        {props.listing?.is_complete ? (
          <p className="text-xs lg:text-base">
            {length} {pluralize("Day", length)} Ago
          </p>
        ) : (
          <ListingModal
            variant="edit"
            listing={props.listing}
            className="inline w-fit"
            classNames={{ wrapper: "w-fit" }}
          >
            <button className="text-base font-bold text-primary">
              Continue
            </button>
          </ListingModal>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
