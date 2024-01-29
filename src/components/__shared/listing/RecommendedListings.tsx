//@ts-nocheck

"use client";
import React from "react";
import SliderMultiItems from "../sliders/SliderMultiItems";
import ListingCard from "./ListingCard";
import supabase from "@/lib/utils/supabaseClient";
import { useQuery } from "@supabase-cache-helpers/postgrest-swr";
import SkeletonListing from "../ui/skeleton/SkeletonListing";
import FetchingStates from "../ui/data_fetching/FetchingStates";
import { fetchOrderRule, revalidationRule } from "@/lib/utils/fetchRules";
import images from "@/enum/temp/images";
import FetchErrorMessage from "../ui/data_fetching/FetchErrorMessage";
import Button from "../ui/button/Button";
import style from "./Listing.module.css";

type Props = {
  className?: string;
  showAllButton?: boolean;
};

const RecommendedListings = ({ className, showAllButton }: Props) => {
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
        <div className="mb-6 flex flex-wrap items-center justify-between gap-5">
          <h2>Recommended Listings</h2>
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
        {
          <SliderMultiItems
            autoplay
            hasNavAndPagination={false}
            slidesPerView={1.5}
            breakpoints={{
              500: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2.5,
              },
              1200: {
                slidesPerView: 3,
              },
              1300: {
                slidesPerView: 3.5,
              },
              1536: {
                slidesPerView: 4,
              },
            }}
            swiperSlideClassName="max-w-[23rem] min-w-[23rem] h-full"
            items={listings?.map((listing) => (
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
            ))}
          />
        }
      </section>

      {/* <section className="relative mt-20 h-fit">
        <h2 className="mb-6">Recommended Listing</h2>
        <div className={style.marquee}>
          {listings?.map((listing) => (
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
              className="w-[23rem] min-w-[23rem]"
            />
          ))}
        </div>
      </section> */}
    </>
  );
};

export default RecommendedListings;
