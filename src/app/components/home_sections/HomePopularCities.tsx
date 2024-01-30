"use client";
import SliderMultiItems from "@/components/__shared/sliders/SliderMultiItems";
import React from "react";
import PopularCitiesCard from "../PopularCitiesCard";
import { useQuery } from "@supabase-cache-helpers/postgrest-swr";
import supabase from "@/lib/utils/supabaseClient";
import AOSWrapper from "@/components/__shared/AOSWrapper";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import Image from "next/image";
import SkeletonRectangle from "@/components/__shared/ui/skeleton/SkeletonRectangle";
import { fetchOrderRule, revalidationRule } from "@/lib/utils/fetchRules";
import FetchErrorMessage from "@/components/__shared/ui/data_fetching/FetchErrorMessage";

const HomePopularCities = () => {
  const {
    data: cities,
    isLoading,
    isValidating,
    error,
  } = useQuery(
    supabase
      .from("standard_template")
      .select("id")
      .order("created_at", fetchOrderRule()),
    revalidationRule(),
  );
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
          isValidating={isValidating}
          isLoadingComponent={
            <SkeletonRectangle count={3} childrenClassName="w-full h-[20rem]" />
          }
          errorComponent={<FetchErrorMessage specificData="cities" />}
        />
        {cities?.map((city) => (
          <PopularCitiesCard
            key={city.id}
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
          isValidating={isValidating}
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
