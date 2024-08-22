"use client";
import { useFetchFeaturedListings } from "@/app/properties/services";
import SkeletonListing from "@/components/__shared/ui/skeleton/skeleton-listing";
import { getListingProps } from "@/lib/enum";
import { useAppStore } from "@/store/dashboard/AppStore";
import dynamic from "next/dynamic";
import React from "react";
const ListingCard = dynamic(
  () => import("@/components/__shared/ui/listing/listing-card"),
);
const SliderGrid = dynamic(
  () => import("@/components/__shared/ui/sliders/slider-grid"),
);

type Props = {};

const FeaturedListings = (props: Props) => {
  const { user } = useAppStore();
  const { data: listings, isLoading } = useFetchFeaturedListings();

  return (
    <section className="wrapper section">
      <SliderGrid
        items={
          isLoading
            ? Array.from({ length: 5 }, (_, idx) => (
                <SkeletonListing key={idx} cardType={1} />
              ))
            : listings?.map((listing) => (
                <ListingCard
                  key={listing?.id}
                  {...getListingProps(listing, user as UserType)}
                  cardType="1"
                />
              ))
        }
      />
    </section>
  );
};

export default FeaturedListings;
