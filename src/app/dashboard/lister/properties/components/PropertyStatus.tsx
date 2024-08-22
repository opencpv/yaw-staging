"use client";
import React from "react";
import Status from "@/components/__shared/ui/states/status";
import { ListingStepsStore } from "@/store/dashboard/ListingStepsStore";
import { getListingProps } from "@/lib/enum";
import { useAppStore } from "@/store/dashboard/AppStore";

type Props = {
  listing: Property;
};

const PropertyStatus = ({ listing: listing }: Props) => {
  const { user } = useAppStore();
  const { setListing } = ListingStepsStore();

  const published = listing?.is_admin_approved && listing?.is_published;
  const incomplete =
    listing?.is_complete === false && listing?.is_suspended === false;
  const suspended = listing?.is_suspended;
  const unpublished = listing?.is_complete && listing?.is_published === false;

  return (
    <>
      <Status
        href={
          published
            ? getListingProps(listing, user as UserType)?.href
            : undefined
        }
        onClick={() => setListing(listing)}
        variant={
          incomplete
            ? "warning"
            : unpublished
              ? "neutral-light"
              : published
                ? "success"
                : suspended
                  ? "danger"
                  : undefined
        }
        tooltipContent={
          suspended
            ? "No matches in 180 days deactivates your search. Reactivate by toggling on."
            : ""
        }
        text={
          incomplete
            ? "Incomplete"
            : unpublished
              ? "Unpublished"
              : published
                ? "Published"
                : suspended
                  ? "Suspended"
                  : ""
        }
      />
    </>
  );
};

export default PropertyStatus;
