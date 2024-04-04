"use client";
import SliderMultiItems from "@/components/__shared/sliders/SliderMultiItems";
import React from "react";
import PopularCitiesCard from "../PopularCitiesCard";
import supabase from "@/lib/utils/supabaseClient";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import Image from "next/image";
import SkeletonRectangle from "@/components/__shared/ui/skeleton/SkeletonRectangle";
import { fetchOrderRule, revalidationRule } from "@/lib/utils/fetchRules";
import FetchErrorMessage from "@/components/__shared/ui/data_fetching/FetchErrorMessage";
import { createClient } from "@/lib/utils/supabase/client";
import { useQuery } from "@tanstack/react-query";

const HomePopularCities = () => {
  const supabase = createClient();

  const {
    data: cities,
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
    <section
      className={`${cities && cities?.length < 1 && "hidden"} space-y-5 pt-32`}
    >
      <div className="w-full space-y-5 min-[810px]:w-7/12">
        <div className="flex items-start gap-5">
          <h2 className="mb-3.5 capitalize text-neutral-900">
            Find Apartments in Popular Cities
          </h2>
          <Image
            src="/assets/icons/apartments.svg"
            alt=""
            width={25}
            height={25}
          />
        </div>
      </div>
      <div className="hidden grid-cols-2 items-center gap-5 pb-20 lg:grid lg:grid-cols-3">
        <FetchingStates
          data={cities}
          error={error}
          isLoading={isLoading}
          isValidating={isFetching}
          isLoadingComponent={
            <SkeletonRectangle count={3} childrenClassName="w-full h-[20rem]" />
          }
          errorComponent={<FetchErrorMessage specificData="cities" />}
        />
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]?.map((city, idx) => (
          <PopularCitiesCard
            key={idx}
            location="Kumasi"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, doloribus!"
            propertyNumber={232}
          />
        ))}
      </div>
      <div className="relative h-fit pb-20 lg:hidden">
        <FetchingStates
          data={cities}
          error={error}
          isLoading={isLoading}
          isValidating={isFetching}
          isLoadingComponent={
            <div className="skeleton-flex h-44">
              <SkeletonRectangle count={2} />
            </div>
          }
          errorComponent={<FetchErrorMessage specificData="cities" />}
        />
        <SliderMultiItems
          items={cities?.map((city) => (
            <PopularCitiesCard
              key={city.id}
              location="Kumasi"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, doloribus!"
              propertyNumber={232}
            />
          ))}
          swiperSlideClassName="max-w-md"
        />
      </div>
    </section>
  );
};

export default HomePopularCities;
