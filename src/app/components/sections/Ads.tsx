"use client";
import { useFetchFeaturedListings } from "@/app/properties/services";
import Button from "@/components/__shared/ui/button/Button";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import ListingCard from "@/components/__shared/ui/listing/ListingCard";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import SliderGrid from "@/components/__shared/ui/sliders/SliderGrid";
import SomethingWentWrong from "@/components/__shared/ui/states/SomethingWentWrong";
import { getListingProps } from "@/lib/enum";
import { useAppStore } from "@/store/dashboard/AppStore";
import Link from "next/link";
import React from "react";
import { HiChevronRight } from "react-icons/hi";

type Props = {};

const FeaturedListings = (props: Props) => {
  const { user } = useAppStore();
  const {
    data: listings,
    error,
    isLoading,
    mutate,
  } = useFetchFeaturedListings();

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
