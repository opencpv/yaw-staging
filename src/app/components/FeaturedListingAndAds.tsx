// @ts-nocheck
"use client";
import ListingCard from "@/components/__shared/listing/ListingCard";
import SliderGrid from "@/components/__shared/sliders/SliderGrid";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import React from "react";
import AdsSliderColumn from "./AdsSliderColumn";
import ArrowLink from "./link/ArrowLink";
import SliderWide from "@/components/__shared/sliders/SliderWide";
import { useQuery } from "@supabase-cache-helpers/postgrest-swr";
import supabase from "@/lib/utils/supabaseClient";
import {
  fetchCountRule,
  fetchOrderRule,
  revalidationRule,
} from "@/lib/utils/fetchRules";
import images from "@/enum/temp/images";
import FetchErrorMessage from "@/components/__shared/ui/data_fetching/FetchErrorMessage";

type Props = {};

const FeaturedListingAndAds = (props: Props) => {
  const {
    data: listings,
    isLoading,
    isValidating,
    error,
  } = useQuery(
    supabase
      .from("standard_template")
      .select(
        "id, property_name, property_id, description, monthly_amount, city"
      )
      .order("created_at", fetchOrderRule()),
    revalidationRule()
  );

  return (
    <section className="">
      <h2 className="mb-5 text-neutral-900">Featured Listings</h2>
      {/* Listing cards */}
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-8 lg:items-start">
        {/* Shows when number of listings is less than 10 */}
        {listings && listings.length <= 9 ? (
          <div className="col-span-6 grid gap-5 grid-cols-1 sm:grid-cols-2 min-[950px]:max-lg:grid-cols-3 lg:grid-cols-2 min-[1180px]:grid-cols-3">
            <FetchingStates
              data={listings}
              error={error}
              isLoading={isLoading}
              isValidating={isValidating}
              isLoadingComponent={<SkeletonListing count={3} />}
              errorComponent={<FetchErrorMessage specificData="featured listing" />}
              noDataMessageComponent={
                <p className="mt-4 italic text-center">
                  There are no properties yet.
                </p>
              }
            />
            {listings?.map((listing) => {
              return (
                <ListingCard
                  key={listing.id}
                  href={`/properties/${listing.property_id}`}
                  propertyName={listing.property_name as string}
                  city={listing.city as string}
                  images={images} // TODO: check database
                  liked={false} // TODO: check implementation
                  membership={"Certified" as Membership} // TODO: check database
                  monthlyAmount={listing.monthly_amount as number}
                  paymentStructure={"Bi-Annually" as PaymentStructure} // TODO: check database
                  propertyDescription={listing.description as string}
                  price={4000} // TODO: check database
                  rating={4.5} // TODO: check database
                  ratingCount={105} // TODO: check database
                  deal={"Best Value" as Deal} // TODO: check database
                />
              );
            })}
          </div>
        ) : (
          <div className="relative col-span-6 pb-5">
            {/* Shows when number of listings is more than 9 */}
            <div className="relative w-full h-fit">
              <FetchingStates
                data={listings}
                error={error}
                isLoading={isLoading}
                isValidating={isValidating}
                isLoadingComponent={
                  <div className="skeleton-grid">
                    <SkeletonListing count={3} />
                  </div>
                }
                noDataMessageComponent={
                  <p className="mt-4 italic text-center">
                    There are no properties yet.
                  </p>
                }
              />
              <SliderGrid
                items={listings?.map((listing) => (
                  <ListingCard
                    key={listing.id}
                    href={`/properties/${listing.property_id}`}
                    propertyName={listing.property_name as string}
                    city={listing.city as string}
                    propertyDescription={listing.description as string}
                    images={images}
                    price={3600}
                    paymentStructure={"Yearly" as PaymentStructure}
                    monthlyAmount={200}
                    deal={"Editor's Choice" as Deal}
                    membership={"Verified" as Membership}
                    rating={4.2}
                    ratingCount={403}
                    liked={false}
                  />
                ))}
              />
            </div>
          </div>
        )}
        {/* Ads */}
        <AdsSliderColumn />
      </div>
      <ArrowLink
        href="/properties"
        text="Show all"
        color="#202457"
        className="mb-16"
      />
      {/* Ads */}
      <section className="w-full h-fit lg:hidden">
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
