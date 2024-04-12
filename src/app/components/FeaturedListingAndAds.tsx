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
import { addQueryParamsToUrl } from "@/lib/utils/stringManipulation";
import { urlForImage } from "@/lib/utils/sanity/utils";

type Props = { data: any };

const FeaturedListingAndAds = (props: Props) => {
  const supabase = createClient();
  console.log(props.data)
  const {
    data: listings,
    error,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["featured_listing"],
    queryFn: async () => {
      const { data: listings } = await supabase
        .from("merged_properties_view")
        .select(
          "id, property_id, property_type, description, city, bedrooms, monthly_amount, advance_payment_options, favorite_user_id, subtitle, neighbourhood, advance_period",
        );
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
                  propertyId={listing.id as number}
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
                  liked={false} // TODO: check implementation
                  guarantee={"Certified" as GuaranteeTag} // TODO: check database
                  monthlyAmount={listing.monthly_amount as number}
                  paymentStructure={"Bi-Annually" as PaymentStructure} // TODO: check database
                  subtitle={listing.subtitle as string}
                  rating={4.5} // TODO: check database
                  ratingCount={105} // TODO: check database
                  hint={"Best Value" as HintTag} // TODO: check database
                  advancePeriod={listing.advance_period as number}
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
                        propertyId={listing.id as number}
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
                        liked={false} // TODO: check implementation
                        guarantee={"Certified" as GuaranteeTag} // TODO: check database
                        monthlyAmount={listing.monthly_amount as number}
                        paymentStructure={"Bi-Annually" as PaymentStructure} // TODO: check database
                        subtitle={listing.subtitle as string}
                        rating={4.5} // TODO: check database
                        ratingCount={105} // TODO: check database
                        hint={"Best Value" as HintTag} // TODO: check database
                        advancePeriod={listing.advance_period as number}
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
        <div className="  w-full lg:hidden mt-4" key={idx}>
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
