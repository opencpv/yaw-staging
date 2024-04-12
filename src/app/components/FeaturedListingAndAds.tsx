//@ts-nocheck
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
import { cn } from "@/lib/utils";
import { addQueryParamsToUrl } from "@/lib/utils/stringManipulation";
import { useFetchFeaturedListings } from "../properties/services";
import { useAppStore } from "@/store/dashboard/AppStore";
import SomethingWentWrong from "./SomethingWentWrong";

type Props = { data: any };

const FeaturedListingAndAds = (props: Props) => {
  const { user } = useAppStore();
  const {
    data: listings,
    error,
    isLoading,
    isFetching,
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
                <SomethingWentWrong className="col-span-full h-fit" />
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
                  propertyId={listing.property_id as number}
                  key={listing.id}
                  href={addQueryParamsToUrl(
                    `/properties/${listing.property_id}`,
                    {
                      property_type: listing.property_type,
                      bedrooms: listing.bedrooms,
                      city: listing.city,
                      neighbourhood: listing.neighbourhood,
                      subtitle: listing.subtitle,
                      advance_period: listing.advance_period,
                      payment_structure: listing.advance_payment_options,
                      amount_per_month: listing.monthly_amount as number,
                      rating: 4,
                    },
                  )}
                  bedrooms={listing.bedrooms as number}
                  propertyType={listing.property_type as string}
                  city={listing.city as string}
                  neighbourhood={listing.neighbourhood as string}
                  images={images} // TODO: check database
                  liked={listing?.favorite_user_ids?.includes(
                    user?.id as string,
                  )}
                  guarantee={
                    listing.is_property_verified
                      ? ("Verified" as GuaranteeTag)
                      : listing.is_lister_certified
                        ? ("Certified" as GuaranteeTag)
                        : undefined
                  }
                  monthlyAmount={listing.monthly_amount as number}
                  paymentStructure={"Bi-Annually" as PaymentStructure} // TODO: check database
                  subtitle={listing.subtitle as string}
                  rating={4.5} // TODO: check database
                  ratingCount={105} // TODO: check database
                  hint={
                    listing?.property?.is_realtors_choice
                      ? ("Realtor's Choice" as HintTag)
                      : listing?.property?.is_best_value
                        ? ("Best Value" as HintTag)
                        : undefined
                  }
                  advancePeriod={listing.advance_period as number}
                  ViewingFee={listing.viewing_fee as number}
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
                errorComponent={
                  <SomethingWentWrong className="col-span-full h-fit" />
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
                          propertyId={listing.property_id as number}
                          key={listing.id}
                          href={addQueryParamsToUrl(
                            `/properties/${listing.property_id}`,
                            {
                              property_type: listing.property_type,
                              bedrooms: listing.bedrooms,
                              city: listing.city,
                              neighbourhood: listing.neighbourhood,
                              subtitle: listing.subtitle,
                              advance_period: listing.advance_period,
                              payment_structure:
                                listing.advance_payment_options,
                              amount_per_month:
                                listing.monthly_amount as number,
                              rating: 4,
                            },
                          )}
                          bedrooms={listing.bedrooms as number}
                          propertyType={listing.property_type as string}
                          city={listing.city as string}
                          neighbourhood={listing.neighbourhood as string}
                          images={images} // TODO: check database
                          liked={listing?.favorite_user_ids?.includes(
                            user?.id as string,
                          )}
                          guarantee={
                            listing.is_property_verified
                              ? ("Verified" as GuaranteeTag)
                              : listing.is_lister_certified
                                ? ("Certified" as GuaranteeTag)
                                : undefined
                          }
                          monthlyAmount={listing.monthly_amount as number}
                          paymentStructure={"Bi-Annually" as PaymentStructure} // TODO: check database
                          subtitle={listing.subtitle as string}
                          rating={4.5} // TODO: check database
                          ratingCount={105} // TODO: check database
                          hint={
                            listing?.property?.is_realtors_choice
                              ? ("Realtor's Choice" as HintTag)
                              : listing?.property?.is_best_value
                                ? ("Best Value" as HintTag)
                                : undefined
                          }
                          advancePeriod={listing.advance_period as number}
                          ViewingFee={listing.viewing_fee as number}
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
