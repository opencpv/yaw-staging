"use client";
import ListingCard from "@/components/__shared/listing/ListingCard";
import SliderGrid from "@/components/__shared/sliders/SliderGrid";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import React from "react";
import AdsSliderColumn from "./AdsSliderColumn";
import ArrowLink from "./link/ArrowLink";
import SliderWide from "@/components/__shared/sliders/SliderWide";
import { cn } from "@/lib/utils";
import { useFetchFeaturedListings } from "../properties/services";
import { useAppStore } from "@/store/dashboard/AppStore";
import SomethingWentWrong from "./SomethingWentWrong";
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
        {/* Shows when number of listings is less than 5 */}
        {listings && listings.length <= 4 ? (
          <div className="col-span-6 grid grid-cols-1 gap-5 pb-5 sm:grid-cols-2 min-[950px]:max-lg:grid-cols-3 lg:grid-cols-2 min-[1180px]:grid-cols-3">
            <FetchingStates
              data={listings}
              error={error}
              isLoading={isLoading}
              isLoadingComponent={<SkeletonListing count={5} />}
              errorComponent={
                <SomethingWentWrong
                  className="col-span-full h-fit"
                  onTryAgain={() => mutate()}
                />
              }
            />
            {listings?.map((listing) => {
              return (
                <ListingCard
                  key={listing.id}
                  {...getListingProps(listing, user as UserType)}
                  cardType="1"
                />
              );
            })}
          </div>
        ) : (
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
                emptyStateComponent={
                  <p className="mt-4 text-center italic">
                    There are no properties yet.
                  </p>
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
        )}
        {/* Ads */}
        <AdsSliderColumn ads={props.data} />
      </div>
      {listings && (
        <ArrowLink href="/properties" text="Show all" color="#202457" />
      )}
      {/* Ads mobile*/}
      {props.data.map((ad: any, idx: number) => (
        <div className="  mt-4 w-full lg:hidden" key={idx}>
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
