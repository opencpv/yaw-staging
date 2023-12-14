//@ts-nocheck
"use client";
import React from "react";
import SliderMultiItems from "../sliders/SliderMultiItems";
import ListingCard from "./ListingCard";
import supabase from "@/lib/utils/supabaseClient";
import { useQuery } from "@supabase-cache-helpers/postgrest-swr";
import SkeletonListing from "../ui/skeleton/SkeletonListing";
import FetchingStates from "../ui/data_fetchting/FetchingStates";
import { fetchOrderRule, revalidationRule } from "@/lib/utils/fetchRules";
import images from "@/enum/temp/images";

type Props = {
  className?: string;
};


const FeaturedListings = ({ className }: Props) => {
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
    <section className={`w-full h-fit no-print overflow-x-hidden ${className}`}>
      <FetchingStates
        data={listings}
        error={error}
        isLoading={isLoading}
        isValidating={isValidating}
        isLoadingComponent={
          <div className="skeleton-flex">
            <SkeletonListing
              count={5}
              childrenClassName="min-w-[20rem]"
            />
          </div>
        }
        errorComponent={
          <p className="text-center">
            Error: Something went wrong while fetching
          </p>
        }
        noDataMessageComponent={
          <p className="italic mt-4 text-center">
            There are no properties yet.
          </p>
        }
      />
      {
        <SliderMultiItems
          autoplay
          hasNavAndPagination={false}
          slidesPerView={1}
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
  );
};

export default FeaturedListings;
