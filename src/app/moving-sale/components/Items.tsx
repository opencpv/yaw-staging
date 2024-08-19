"use client";
import React, { useState } from "react";
import SortFilter from "./SortFilter";
import ItemCard from "./ItemCard";
import { useFetchItems } from "../services";
import { useSearchParams } from "next/navigation";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import EmptyState from "@/components/__shared/ui/states/EmptyState";
import ButtonInfiniteLoading from "@/components/__shared/ui/data_fetching/ButtonInfiniteLoading";
import SkeletonItem from "@/components/__shared/ui/skeleton/SkeletonItem";
import { cn } from "@/lib/utils";
import { pluralize } from "@/lib/utils/stringManipulation";
// import { Skeleton } from "@nextui-org/react";
import { SanityDocument } from "next-sanity";
import Ad from "@/app/components/sections/Ad";

type Props = {
  ads: SanityDocument[];
};

function Items(props: Props) {
  const searchParams = useSearchParams();
  const sort = searchParams?.get("sort") || "newest";
  const categories = searchParams?.get("categories") || "";
  const condition = searchParams?.get("condition") || "";
  const term = searchParams?.get("term") || "";
  const priceRangeFrom = searchParams?.get("priceRangeFrom") || "";
  const priceRangeTo = searchParams?.get("priceRangeTo") || "";
  const [showAd, setShowAd] = useState(false);

  const {
    data: items,
    error,
    isLoading,
    isValidating,
    loadMore,
    mutate,
  } = useFetchItems({
    categories,
    condition,
    term,
    priceRangeFrom,
    priceRangeTo,
    sort,
  });
  const handleLoadMore = () => {
    setShowAd(true);
    loadMore ? loadMore() : null;
  };

  return (
    <>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 text-sm">
        {isLoading ? (
          // <Skeleton className="h-5 w-32" />
          <></>
        ) : (
          <p className={cn("text-base", { invisible: items?.length === 0 })}>
            Showing {items?.length} {pluralize("result", items?.length)}
          </p>
        )}

        <SortFilter />
      </div>
      {/* Items */}
      <section className="grid justify-center gap-x-4 gap-y-20 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <FetchingStates
          data={items}
          error={error}
          isLoading={isLoading}
          isLoadingComponent={<SkeletonItem count={4} />}
          emptyStateComponent={<EmptyState />}
        />
        {items?.slice(0, 8).map((item) => (
          <ItemCard
            key={item.id}
            href={`/moving-sale/${item.title}?${new URLSearchParams({
              id: item.id.toString(),
              title: item.title,
              category: item.category,
              term: item.term,
              price: item.price.toString(),
              condition: item.condition,
              seller: item.profiles?.full_name as string,
              description: item.description,
            })}`}
            title={item.title}
            description={item.description}
            image="/assets/images/about/young-couple.webp"
            price={item.price}
            className="w-full max-sm:max-w-[350px]"
          />
        ))}
        {showAd && (
          <div className="col-span-2 w-full md:col-span-3 lg:col-span-4">
            <Ad data={props.ads} />
          </div>
        )}
        {items?.slice(8).map((item) => (
          <ItemCard
            key={item.id}
            href={`/moving-sale/${item.title}?${new URLSearchParams({
              id: item.id.toString(),
              title: item.title,
              category: item.category,
              term: item.term,
              price: item.price.toString(),
              condition: item.condition,
              seller: item.profiles?.full_name as string,
              description: item.description,
            })}`}
            title={item.title}
            description={item.description}
            image="/assets/images/about/young-couple.webp"
            price={item.price}
          />
        ))}
      </section>
      <ButtonInfiniteLoading
        data={items}
        isLoading={isLoading}
        isValidating={isValidating}
        loadMore={handleLoadMore}
      />
    </>
  );
}

export default Items;
