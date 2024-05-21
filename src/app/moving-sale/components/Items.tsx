"use client";
import React from "react";
import SortFilter from "./SortFilter";
import ItemCard from "./item/ItemCard";
import { useFetchItems } from "../services";
import { useSearchParams } from "next/navigation";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import SomethingWentWrong from "@/components/__shared/ui/states/SomethingWentWrong";
import EmptyState from "@/components/__shared/ui/states/EmptyState";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import slugify from "@/lib/utils/slugify";
import ButtonInfiniteLoading from "@/components/__shared/ui/data_fetching/ButtonInfiniteLoading";
import SkeletonItem from "@/components/__shared/ui/skeleton/SkeletonItem";

type Props = {};

function Items({}: Props) {
  const searchParams = useSearchParams();
  const sort = searchParams?.get("sort") || "newest";
  const categories = searchParams?.get("categories") || "";
  const category = searchParams?.get("category") || "";
  const condition = searchParams?.get("condition") || "";
  const negotiation = searchParams?.get("negotiation") || "";
  const priceRangeFrom = searchParams?.get("priceRangeFrom") || "";
  const priceRangeTo = searchParams?.get("priceRangeTo") || "";

  const {
    data: items,
    error,
    isLoading,
    isValidating,
    loadMore,
    mutate,
  } = useFetchItems({
    category,
    condition,
    negotiation,
    priceRangeFrom,
    priceRangeTo,
    sort,
  });

  console.log(items);

  return (
    <>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 text-sm">
        <p className="text-base">Showing {items?.length} results</p>
        <SortFilter />
      </div>
      {/* Items */}
      <section className="grid gap-x-4 gap-y-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <FetchingStates
          data={items}
          error={error}
          isLoading={isLoading}
          isLoadingComponent={<SkeletonItem count={4} />}
          errorComponent={
            <SomethingWentWrong
              className="h-fit"
              onTryAgain={() => {
                mutate();
              }}
            />
          }
          emptyStateComponent={<EmptyState />}
        />
        {items?.map((item) => (
          <ItemCard
            key={item.id}
            href={`/moving-sale/${item.title}?${new URLSearchParams({
              id: item.id.toString(),
              title: item.title,
              category: item.category,
              term: item.term,
              price: item.price.toString(),
              condition: item.condition,
              seller: item.seller,
              description: item.description,
            })}`}
            title={item.title}
            description={item.description}
            image="/assets/images/about/young-couple.webp"
            price={item.price}
          />
        ))}
        <div className="mt-10 flex justify-center">
          <ButtonInfiniteLoading
            data={items}
            isLoading={isLoading}
            isValidating={isValidating}
            loadMore={loadMore}
          />
        </div>
      </section>
    </>
  );
}

export default Items;
