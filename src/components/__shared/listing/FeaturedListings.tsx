"use client";
import React from "react";
import ListingCard from "./ListingCard";
import SkeletonListing from "../ui/skeleton/SkeletonListing";
import FetchingStates from "../ui/data_fetching/FetchingStates";
import images from "@/enum/temp/images";
import FetchErrorMessage from "../ui/data_fetching/FetchErrorMessage";
import Button from "../ui/button/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, FreeMode, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-coverflow";
import { createClient } from "@/lib/utils/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { addQueryParamsToUrl } from "@/lib/utils/stringManipulation";

type Props = {
  className?: string;
  showAllButton?: boolean;
};

const FeaturedListings = ({ className, showAllButton }: Props) => {
  const supabase = createClient();

  const {
    data: listings,
    error,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["featured_listing", 2],
    queryFn: async () => {
      const { data: listings } = await supabase
        .from("standard_template")
        .select(); // TODO: fetch only needed columns
      return listings;
    },
  });

  return (
    <>
      <section className={`no-print h-fit w-full ${className}`}>
        <div className="mb-8 flex flex-wrap items-center justify-between gap-5">
          <h2>Featured Listings</h2>
          <Button
            href="/properties"
            variant="ghost"
            className={`text-sm text-neutral-800 ${
              showAllButton ? "block" : "hidden"
            } ${isLoading && "hidden"}`}
          >
            Show all
          </Button>
        </div>
        <FetchingStates
          data={listings}
          error={error}
          errorComponent={<FetchErrorMessage />}
          emptyStateComponent={
            <p className="mt-4 text-center italic">
              There are no properties yet.
            </p>
          }
        />
        {/* lg and above */}
        <div>
          <Swiper
            effect="coverflow"
            mousewheel
            grabCursor
            centeredSlides
            slidesPerView={0.5}
            spaceBetween={10}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              360: {
                slidesPerView: 1,
              },
              768: {
                // spaceBetween: 0,
                slidesPerView: 2,
                coverflowEffect: {
                  rotate: 50,
                },
              },
              1300: {
                slidesPerView: 4,
                coverflowEffect: {
                  rotate: 50,
                },
              },
            }}
            modules={[FreeMode, EffectCoverflow, Mousewheel]}
            className="mySwiper h-fit w-full"
          >
            {isLoading
              ? Array.from({ length: 5 }, (_, idx) => (
                  <SwiperSlide
                    key={idx + 1}
                    className={`aspect-square h-full min-w-[16rem] max-w-[16rem] xs:aspect-auto xs:min-w-[23rem] xs:max-w-[23rem]`}
                  >
                    <SkeletonListing key={idx} cardType={2} className="h-80" />
                  </SwiperSlide>
                ))
              : listings?.map((listing, idx) => (
                  <SwiperSlide
                    key={idx}
                    className={`aspect-square h-full min-w-[16rem] max-w-[16rem] xs:aspect-auto xs:min-w-[23rem] xs:max-w-[23rem]`}
                  >
                    <ListingCard
                      key={listing.id}
                      cardType="2"
                      href={addQueryParamsToUrl(
                        `/properties/${listing.property_id}`,
                        {
                          property_name: listing.property_name,
                          city: listing.city,
                          price: listing.monthly_amount,
                          payment_structure: listing.advance_payment_options,
                          amount_per_month: listing.monthly_amount,
                          rating: 4,
                        },
                      )}
                      propertyName={listing.property_name as string}
                      city={listing.city as string}
                      images={images} // TODO: check database
                      liked={false} // TODO: check implementation
                      membership={"Certified" as Membership} // TODO: check database
                      monthlyAmount={parseFloat(
                        listing.monthly_amount as string,
                      )}
                      paymentStructure={"Bi-Annually" as PaymentStructure} // TODO: check database
                      propertyDescription={listing.description as string}
                      price={4000} // TODO: check database
                      rating={4.5} // TODO: check database
                      ratingCount={105} // TODO: check database
                      deal={"Best Value" as Deal} // TODO: check database
                      showOnlyImage
                    />
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default FeaturedListings;
