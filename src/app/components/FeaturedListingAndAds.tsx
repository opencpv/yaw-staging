"use client";
import ListingCard from "@/components/__shared/ui/listing/ListingCard";
import SliderGrid from "@/components/__shared/ui/sliders/SliderGrid";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import React from "react";
import AdsSliderColumn from "./AdsSliderColumn";
import ArrowLink from "../../components/__shared/ui/links/ArrowLink";
import SliderWide from "@/components/__shared/ui/sliders/SliderWide";
import { cn } from "@/lib/utils";
import { useFetchFeaturedListings } from "../properties/services";
import { useAppStore } from "@/store/dashboard/AppStore";
import SomethingWentWrong from "../../components/__shared/ui/states/SomethingWentWrong";
import { urlForImage } from "@/lib/utils/sanity/utils";
import { getListingProps } from "@/lib/enum";

type Props = { data: any };

const FeaturedListingAndAds = (props: Props) => {
  const { user } = useAppStore();
  const {
    data: listings,
    error,
    isLoading,
    mutate,
  } = useFetchFeaturedListings();

  return (
    <section className="section">
      <h2
        className={cn("mb-5 text-neutral-900", {
          hidden: listings && listings.length < 1 && !isLoading,
          block: isLoading,
        })}
      >
        Featured Listings
      </h2>
      {/* Listing cards */}
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-8 lg:items-start">
        <div className="relative col-span-6 pb-5">
          {/* Shows when number of listings is more than 4 */}
          <div className="relative h-fit w-full">
            <FetchingStates
              data={listings}
              error={error}
              errorComponent={
                <SomethingWentWrong
                  className="col-span-full h-fit"
                  onTryAgain={() => mutate()}
                />
              }
            />
            <SliderGrid
              items={
                isLoading
                  ? Array.from({ length: 5 }, (_, idx) => (
                      <SkeletonListing key={idx} cardType={1} />
                    ))
                  : listings?.map((listing) => (
                      <ListingCard
                        key={listing.id}
                        {...getListingProps(listing, user as UserType)}
                        cardType="1"
                      />
                    ))
              }
            />
          </div>
        </div>
        {/* Ads */}
        <AdsSliderColumn ads={props.data} />
      </div>
      {listings && (
        <ArrowLink href="/properties" text="Show all" color="#202457" />
      )}
      {/* Ads mobile*/}
      {props.data.map((ad: any, idx: number) => (
        <div className="mt-4 w-full max-lg:mt-20 lg:hidden" key={idx}>
          <SliderWide
            autoplay
            pagination
            navigation
            images={ad.adImages.map((adImage: any) => ({
              src: urlForImage(adImage.customImageItem)?.url(),
              name: "",
            }))}
          />
        </div>
      ))}
    </section>
  );
};

export default FeaturedListingAndAds;
