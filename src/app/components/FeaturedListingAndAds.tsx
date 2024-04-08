"use client";
import ListingCard from "@/components/__shared/listing/ListingCard";
import SliderGrid from "@/components/__shared/sliders/SliderGrid";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import React from "react";
import AdsSliderColumn from "./AdsSliderColumn";
import ArrowLink from "./link/ArrowLink";
import SliderWide from "@/components/__shared/sliders/SliderWide";
import images from "@/enum/temp/images";
import FetchErrorMessage from "@/components/__shared/ui/data_fetching/FetchErrorMessage";
import { createClient } from "@/lib/utils/supabase/auth/client";
import { useQuery } from "@tanstack/react-query";
import { cn } from "@/lib/utils";

type Props = { data: any };

const FeaturedListingAndAds = (props: Props) => {
  const supabase = createClient();

  const {
    data: listings,
    error,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["featured_listing"],
    queryFn: async () => {
      const { data: listings } = await supabase
        .from("standard_template")
        .select(); // TODO: fetch only needed columns
      return listings;
    },
  });

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
        {/* Shows when number of listings is less than 10 */}
        {listings && listings.length <= 9 ? (
          <div className="col-span-6 grid grid-cols-1 gap-5 sm:grid-cols-2 min-[950px]:max-lg:grid-cols-3 lg:grid-cols-2 min-[1180px]:grid-cols-3">
            <FetchingStates
              data={listings}
              error={error}
              isLoading={isLoading}
              isValidating={isFetching}
              isLoadingComponent={<SkeletonListing count={5} />}
              errorComponent={
                <FetchErrorMessage specificData="featured listing" />
              }
              emptyStateComponent={
                <p className="mt-4 text-center italic">
                  There are no properties yet.
                </p>
              }
            />
            {listings?.map((listing) => {
              return (
                <ListingCard
                  propertyId={listing.id}
                  key={listing.id}
                  href={`/properties/${listing.property_id}?property_name=${listing.property_name}&city=${listing.city}&price=${listing.monthly_amount}&payment_structure=${listing.monthly_amount}&amount_per_month=${listing.monthly_amount}&rating=${listing.monthly_amount}&property_description=${listing.description}`.replaceAll(
                    " ",
                    "_",
                  )}
                  propertyName={listing.property_name as string}
                  city={listing.city as string}
                  images={images} // TODO: check database
                  liked={false} // TODO: check implementation
                  guarantee={"Certified" as GuaranteeTag} // TODO: check database
                  monthlyAmount={parseFloat(listing.monthly_amount as string)}
                  paymentStructure={"Bi-Annually" as PaymentStructure} // TODO: check database
                  propertyDescription={listing.description as string}
                  price={4000} // TODO: check database
                  rating={4.5} // TODO: check database
                  ratingCount={105} // TODO: check database
                  hint={"Best Value" as HintTag} // TODO: check database
                />
              );
            })}
          </div>
        ) : (
          <div className="relative col-span-6 pb-5">
            {/* Shows when number of listings is more than 9 */}
            <div className="relative h-fit w-full">
              <FetchingStates
                data={listings}
                error={error}
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
                          propertyId={listing.id}
                          key={listing.id}
                          href={`/properties/${listing.property_id}?property_name=${listing.property_name}&city=${listing.city}&price=${listing.monthly_amount}&payment_structure=${listing.monthly_amount}&amount_per_month=${listing.monthly_amount}&rating=${listing.monthly_amount}&property_description=${listing.description}`.replaceAll(
                            " ",
                            "_",
                          )}
                          propertyName={listing.property_name as string}
                          city={listing.city as string}
                          propertyDescription={listing.description as string}
                          images={images}
                          price={3600}
                          paymentStructure={"Yearly" as PaymentStructure}
                          monthlyAmount={200}
                          hint={"Realtor's Choice" as HintTag}
                          guarantee={"Verified" as GuaranteeTag}
                          rating={4.2}
                          ratingCount={403}
                          liked={false}
                        />
                      ))
                }
              />
            </div>
          </div>
        )}
        {/* Ads */}
        <AdsSliderColumn ads={props.data.ads} />
      </div>
      {listings && (
        <ArrowLink href="/properties" text="Show all" color="#202457" />
      )}
      {/* Ads mobile*/}
      <section className="section h-fit w-full lg:hidden">
        <SliderWide
          autoplay
          pagination
          navigation
          images={[1, 2, 3, 4, 5].map((image) => ({
            src: "/assets/images/home/promotion-1.jpg",
            name: "",
          }))}
        />
      </section>
    </section>
  );
};

export default FeaturedListingAndAds;
