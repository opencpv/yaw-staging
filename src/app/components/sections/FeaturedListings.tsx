"use client";
import { useFetchFeaturedListings } from "@/app/properties/services";
import Button from "@/components/__shared/ui/button/Button";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import { getListingProps } from "@/lib/enum";
import { useAppStore } from "@/store/dashboard/AppStore";
import dynamic from "next/dynamic";
import React from "react";
import { HiChevronRight } from "react-icons/hi";

const FramerWrapper = dynamic(() => import("@/components/__shared/hoc/FramerWrapper"))
const ListingCard = dynamic(() => import("@/components/__shared/ui/listing/ListingCard")) 
const SliderGrid = dynamic(() => import("@/components/__shared/ui/sliders/SliderGrid"))

type Props = {
  data: any;
};

const FeaturedListings = (props: Props) => {
  const { user } = useAppStore();

  const {
    data: listings,
    error,
    isLoading,
  } = useFetchFeaturedListings({ limit: 9 });


  return (
    <section className="wrapper section sm:pb-0" style={{ display: isLoading ? "block" : !isLoading && listings && listings.length === 0 ? "none" : "block"}}>
      <div className="space-y-10">
        <div
          className="flex items-center justify-between gap-5"
          //ref={ref as unknown as React.LegacyRef<HTMLDivElement>}
        >
          <h2 className="uppercase">Featured Listings</h2>
          <Button
            variant="ghost"
            color="primary"
            href={`/properties?${new URLSearchParams({ tag: "featured" })}`}
            className="text-xl font-medium max-ssm:hidden"
          >
            View all <HiChevronRight size={24} />
          </Button>
        </div>
        {/* Listing Slider */}
          <FramerWrapper className="relative mx-auto h-fit max-w-screen-xl">
            <FetchingStates
              data={listings}
              error={error}
            />
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
          </FramerWrapper>
        <Button
          variant="ghost"
          color="primary"
          href={`/properties?${new URLSearchParams({ tag: "featured" })}`}
          className="text-xl font-medium ssm:hidden"
        >
          View all <HiChevronRight size={24} />
        </Button>
      </div>
    </section>
  );
};

export default FeaturedListings;
