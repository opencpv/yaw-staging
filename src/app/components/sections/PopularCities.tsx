"use client";
import SliderMultiItems from "@/components/__shared/ui/sliders/slider-multi-items";
import React from "react";
import PopularCitiesCard from "../ui/PopularCitiesCard";
import FetchingStates from "@/components/__shared/ui/data_fetching/fetching-states";
import Image from "next/image";
import SkeletonRectangle from "@/components/__shared/ui/skeleton/skeleton-rectangle";
import FetchErrorMessage from "@/components/__shared/ui/data_fetching/fetch-error-message";
import { createClient } from "@/lib/utils/supabase/auth/client";
import { useQuery } from "@tanstack/react-query";
import { createUUID } from "@/lib/utils/stringManipulation";

const PopularCities = () => {
  const supabase = createClient();

  const {
    data: cities,
    error,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["property"],
    queryFn: async () => {
      const { data: listings } = await supabase.from("property").select(); // TODO: fetch only needed columns
      return listings;
    },
  });

  return (
    <section
      className={`${
        cities && cities?.length < 1 && "hidden"
      } wrapper section space-y-5 bg-white pb-0 pt-24`}
    >
      <div className="w-full space-y-5 min-[810px]:w-7/12">
        <div className="flex items-start gap-5">
          <h2 className="mb-3.5 uppercase text-neutral-900">
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
      <div className="hidden grid-cols-2 items-center gap-5 lg:grid lg:grid-cols-3">
        <FetchingStates
          data={cities}
          error={error}
          isLoading={isLoading}
          isValidating={isFetching}
          isLoadingComponent={
            <SkeletonRectangle count={3} className="h-[20rem] w-full" />
          }
          errorComponent={<FetchErrorMessage specificData="cities" />}
        />
        {Array.from({ length: 9 }, (_) => (
          <PopularCitiesCard
            key={createUUID()}
            location="Kumasi"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, doloribus!"
            propertyNumber={232}
          />
        ))}
      </div>

      <div className="relative h-fit lg:hidden">
        <FetchingStates
          data={cities}
          error={error}
          errorComponent={<FetchErrorMessage specificData="cities" />}
        />
        <SliderMultiItems
          items={
            isLoading
              ? Array.from({ length: 3 }, (_, idx) => (
                  <SkeletonRectangle
                    className="relative min-h-60 w-full rounded-lg p-5 hover:scale-105 sm:p-20"
                    key={idx}
                    count={1}
                  />
                ))
              : cities?.map((city) => (
                  <PopularCitiesCard
                    key={city.id}
                    location="Kumasi"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, doloribus!"
                    propertyNumber={232}
                  />
                ))
          }
          swiperSlideClassName="max-w-md"
        />
      </div>
    </section>
  );
};

export default PopularCities;
