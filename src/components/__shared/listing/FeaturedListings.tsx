//@ts-nocheck

"use client";
import React from "react";
import ListingCard from "./ListingCard";
import supabase from "@/lib/utils/supabaseClient";
import { useQuery } from "@supabase-cache-helpers/postgrest-swr";
import SkeletonListing from "../ui/skeleton/SkeletonListing";
import FetchingStates from "../ui/data_fetching/FetchingStates";
import { fetchOrderRule, revalidationRule } from "@/lib/utils/fetchRules";
import images from "@/enum/temp/images";
import FetchErrorMessage from "../ui/data_fetching/FetchErrorMessage";
import Button from "../ui/button/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, FreeMode, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-coverflow";

type Props = {
  className?: string;
  showAllButton?: boolean;
};

const FeaturedListings = ({ className, showAllButton }: Props) => {
  const {
    data: listings,
    isLoading,
    isValidating,
    error,
  } = useQuery(
    supabase
      .from("standard_template")
      .select(
        "id, property_name, property_id, description, monthly_amount, city",
      )
      .order("created_at", fetchOrderRule()),
    revalidationRule(),
  );

  return (
    <>
      <section className={`no-print h-fit w-full ${className}`}>
        <div className="mb-8 flex flex-wrap items-center justify-between gap-5">
          <h2>Feautured Listings</h2>
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
          isLoading={isLoading}
          isValidating={isValidating}
          isLoadingComponent={
            <div className="flex gap-5 overflow-x-hidden">
              <SkeletonListing count={5} childrenClassName="w-96" />
            </div>
          }
          errorComponent={<FetchErrorMessage />}
          noDataMessageComponent={
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
            {listings?.map((listing, idx) => (
              <SwiperSlide
                key={idx + 1}
                className={`aspect-square min-w-[16rem] max-w-[16rem] xs:aspect-auto xs:min-w-[23rem] xs:max-w-[23rem]`}
              >
                <ListingCard
                  key={listing.id}
                  cardType="2"
                  href={`/properties/${listing.property_id}?property_name=${listing.propertyName}&city=${listing.city}&price=${listing.price}&payment_structure=${listing.paymentStructure}&amount_per_month=${listing.monthlyAmount}&rating=${listing.ratingCount}&property_description=${listing.propertyDescription}`.replaceAll(
                    " ",
                    "_",
                  )}
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
