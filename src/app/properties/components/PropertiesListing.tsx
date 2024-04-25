"use client";
import React from "react";
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

type Props = {};

const PropertiesListing = (props: Props) => {
  const searchParams = useSearchParams();
  const search = searchParams?.get("search") || "";
  const tag = searchParams?.get("tag") || "all";
  const router = useRouter();

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

  return (
    <>
      {/* Listing */}
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
        {listings?.map((listing) => (
          <ListingCard
            key={listing.id}
            {...getListingProps(listing, user as UserType)}
          />
        ))}
      </section>
      <div className="mt-10 flex justify-center">
        <ButtonInfiniteLoading
          data={listings}
          isLoading={isLoading}
          isValidating={isValidating}
          loadMore={loadMore}
        />
      </div>
    </>
  );
};

export default PropertiesListing;
