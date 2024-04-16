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
import { useFetchFeaturedListings } from "../properties/services";
import { useAppStore } from "@/store/dashboard/AppStore";
import SomethingWentWrong from "./SomethingWentWrong";
import { urlForImage } from "@/lib/utils/sanity/utils";

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
                  propertyId={listing.property_id as number}
                  key={listing.id}
                  href={`/properties/${listing?.property_id}?${new URLSearchParams(
                    {
                      property_type: listing.property_type as string,
                      bedrooms: String(listing.bedrooms),
                      city: listing.city as string,
                      neighbourhood: listing.neighbourhood as string,
                      subtitle: listing.subtitle as string,
                      advance_period: String(listing.advance_period),
                      payment_structure: String(
                        listing.advance_payment_options,
                      ),
                      amount_per_month: String(listing.monthly_amount),
                      rating: String(4),
                      viewing_fee: String(listing.viewing_fee),
                      is_realtors_choice: String(
                        listing.property?.is_realtors_choice,
                      ),
                      is_best_value: String(listing.property?.is_best_value),
                      is_featured: String(listing.property?.is_featured),
                    },
                  )}`}
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
                          propertyId={listing.property_id as number}
                          key={listing.id}
                          href={`/properties/${listing?.property_id}?${new URLSearchParams(
                            {
                              property_type: listing.property_type as string,
                              bedrooms: String(listing.bedrooms),
                              city: listing.city as string,
                              neighbourhood: listing.neighbourhood as string,
                              subtitle: listing.subtitle as string,
                              advance_period: String(listing.advance_period),
                              payment_structure: String(
                                listing.advance_payment_options,
                              ),
                              amount_per_month: String(listing.monthly_amount),
                              rating: String(4),
                              viewing_fee: String(listing.viewing_fee),
                              is_realtors_choice: String(
                                listing.property?.is_realtors_choice,
                              ),
                              is_best_value: String(
                                listing.property?.is_best_value,
                              ),
                              is_featured: String(
                                listing.property?.is_featured,
                              ),
                            },
                          )}`}
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
