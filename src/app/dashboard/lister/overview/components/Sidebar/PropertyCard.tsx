import React, { useCallback } from "react";
import { format } from "date-fns";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import calculateDaysSinceCreation from "@/lib/utils/calculateDaysSinceCreation";
import { pluralize } from "@/lib/utils/stringManipulation";
import { ListingStepsStore } from "@/store/dashboard/ListingStepsStore";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { generatePropertyTitle } from "@/lib/enum";
import { Json } from "../../../../../../../database.types";
import style from "../../index.module.css";

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
  const router = useRouter();
  const { images } = useAssets();
  const length = calculateDaysSinceCreation(props.listing.created_at);
  //@ts-ignore
  const image = props.listing.banner_image?.image || images.NoImagePlaceholder;

  const [listingEditSteps] =
    useLocalStorage<{ listing: number; activeSlide: number }[]>(
      "listing-edit-steps",
    );

  const { setActiveSlide, setListing } = ListingStepsStore();

  const handleEdit = useCallback(() => {
    setListing(props.listing);
    router.replace(`/dashboard/lister/overview/edit/501${props.listing?.id}`); // just redirects, doesn't use the id in its implementation
    setActiveSlide(
      listingEditSteps?.find((step) => step.listing === props.listing?.id)
        ?.activeSlide ?? 1,
    );
  }, [props.listing, listingEditSteps, setActiveSlide, router, setListing]);

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
            className={style.cardImage}
          />
        </Link>
      ) : (
        <div className={style.cardLink}>
          <Image
            src={image}
            alt={generatePropertyTitle(props.listing)}
            fill
            className={style.cardImage}
          />
        </div>
      )}
      <h4>
        {props.listing?.property_name ||
          generatePropertyTitle(props.listing) ||
          " - "}
      </h4>
      <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3 text-shade-300">
        <p className="text-base">
          {format(new Date(props.listing?.created_at), "dd MMMM yyyy")}
        </p>
        {props.listing?.is_complete ? (
          <p className="text-xs lg:text-base">
            {length} {pluralize("Day", length)} Ago
          </p>
        ) : (
          <button
            onClick={handleEdit}
            className="text-base font-bold text-primary"
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
