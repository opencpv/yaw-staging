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
    revalidationRule()
  );
  return (
    <section
      className={`${
        cities && cities?.length < 1 && "hidden"
      } px-5 mx-auto space-y-5 max-w-screen-2xl xs:px-5`}
    >
      <div className="w-full space-y-5 min-[810px]:w-7/12">
        <div className="flex items-start justify-between gap-2 min-[500px]:justify-start min-[500px]:gap-20">
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
      <div className="items-center hidden grid-cols-2 gap-5 pb-20 lg:grid lg:grid-cols-3">
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
          <AOSWrapper key={city.id} animation="zoom-in" duration="1000">
            <PopularCitiesCard
              location="Kumasi"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, doloribus!"
              propertyNumber={232}
              href="/"
            />
          </AOSWrapper>
        ))}
      </div>
      <div className="relative pb-20 h-fit lg:hidden">
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
              href="/"
            />
          ))}
        />
      </div>
    </section>
  );
};

export default HomePopularCities;
