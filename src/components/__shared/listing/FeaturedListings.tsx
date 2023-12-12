"use client";
import React from "react";
import SliderMultiItems from "../sliders/SliderMultiItems";
import ListingCard from "./ListingCard";
import listingsdb from "@/enum/demodb/listings";
import supabase from "@/lib/utils/supabaseClient";
import { useQuery } from "@supabase-cache-helpers/postgrest-swr";
import SkeletonListing from "../ui/skeleton/SkeletonListing";
import FetchingStates from "../ui/data_fetchting/FetchingStates";

type Props = {
  className?: string;
};

let images = [
  "/assets/images/niceHome.png",
  "/assets/images/Stock.jpg",
  "/assets/images/niceHome.png",
  "/assets/images/Stock.jpg",
  "/assets/images/niceHome.png",
  "/assets/images/Stock.jpg",
  "/assets/images/niceHome.png",
  "/assets/images/Stock.jpg",
  "/assets/images/niceHome.png",
  "/assets/images/Stock.jpg",
];

const FeaturedListings = ({ className }: Props) => {
  const {
    data: listings,
    count,
    isLoading,
    isValidating,
    error,
  } = useQuery(
    supabase
      .from("standard_template")
      .select("id, property_name, property_id, description, monthly_amount, city", {
        count: "exact",
      })
      // .eq("username", "psteinroe"),
      .order("created_at", { ascending: false }),
    {
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
    }
  );

  return (
    <section className={`w-full h-fit no-print overflow-x-hidden ${className}`}>
      <FetchingStates
          data={listings}
          error={error}
          isLoading={isLoading}
          isValidating={isValidating}
          isLoadingComponent={
            <SkeletonListing
              count={5}
              display="flexy"
              className="flex gap-5 w-full h-fit"
            />
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
