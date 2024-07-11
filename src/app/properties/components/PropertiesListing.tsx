"use client";
import React, { useState } from "react";
import ListingCard from "@/components/__shared/ui/listing/ListingCard";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useFetchProperties } from "../services";
import PropertiesEmptyState from "./PropertiesEmptyState";
import ButtonInfiniteLoading from "@/components/__shared/ui/data_fetching/ButtonInfiniteLoading";
import SomethingWentWrong from "@/components/__shared/ui/states/SomethingWentWrong";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { getListingProps } from "@/lib/enum";
import { useIntersectionObserver } from "@/lib/utils/intersectionObserver";
import FramerWrapper from "@/components/__shared/hoc/FramerWrapper";
import { SanityDocument } from "next-sanity";
import Ad from "@/app/components/sections/Ad";

type Props = {
  ads: SanityDocument[];
};

const PropertiesListing = (props: Props) => {
  const searchParams = useSearchParams();
  const search = searchParams?.get("search") || "";
  const tag = searchParams?.get("tag") || "all";
  const router = useRouter();
  const { ref, hasIntersected } = useIntersectionObserver();
  const [showAd, setShowAd] = useState(false);
  const { user } = useAppStore();
  const {
    data: listings,
    error,
    isLoading,
    isValidating,
    loadMore,
    mutate,
  } = useFetchProperties({ searchString: search as string, filter: tag });

  const handleViewSimilarResults = () => {
    // TODO: implement appropriately
    router.replace(
      `/properties?${new URLSearchParams({
        search: "Accra",
        tag: "all",
      })}`,
      {
        scroll: false,
      },
    );
  };
  const handleLoadMore = () => {
    setShowAd(true);
    loadMore ? loadMore() : null;
  };
  return (
    <main className="wrapper overflow-x-hidden max-sm:-mt-10">
      <div ref={ref as any} />
      {/* Listing */}
      {hasIntersected && (
        <FramerWrapper>
          <section className="listing-grid">
            <FetchingStates
              data={listings}
              error={error}
              isLoading={isLoading}
              isLoadingComponent={<SkeletonListing count={3} />}
              errorComponent={
                <SomethingWentWrong
                  className="h-fit"
                  onTryAgain={() => {
                    mutate();
                  }}
                />
              }
              emptyStateComponent={
                <PropertiesEmptyState onClick={handleViewSimilarResults} />
              }
            />
            {listings
              ?.slice(0, 9)
              ?.map((listing) => (
                <ListingCard
                  key={listing.id}
                  {...getListingProps(listing, user as UserType)}
                />
              ))}
            {showAd && (
              <div className="col-span-1 w-full md:col-span-2 lg:col-span-3">
                {" "}
                <Ad data={props.ads} />
              </div>
            )}
            {listings
              ?.slice(9)
              ?.map((listing) => (
                <ListingCard
                  key={listing.id}
                  {...getListingProps(listing, user as UserType)}
                />
              ))}
          </section>
          <ButtonInfiniteLoading
            data={listings}
            isLoading={isLoading}
            isValidating={isValidating}
            loadMore={handleLoadMore}
          />
        </FramerWrapper>
      )}
    </main>
  );
};

export default PropertiesListing;
