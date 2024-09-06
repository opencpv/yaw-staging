"use client";
import React, { useState } from "react";
import FetchingStates from "@/components/__shared/ui/data_fetching/fetching-states/fetching-states";
import SkeletonListing from "@/components/__shared/ui/skeleton/skeleton-listing";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useFetchProperties } from "../services";
import PropertiesEmptyState from "./PropertiesEmptyState";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { getListingProps, Listing } from "@/lib/enum";
import { SanityDocument } from "next-sanity";
import dynamic from "next/dynamic";
const ButtonInfiniteLoading = dynamic(
  () =>
    import("@/components/__shared/ui/data_fetching/button-infinite-loading"),
);
const ListingCard = dynamic(
  () => import("@/components/__shared/ui/listing/listing-card"),
);
const FramerWrapper = dynamic(
  () => import("@/components/__shared/hoc/framer-wrapper"),
);
const Ad = dynamic(() => import("@/app/components/sections/Ad"));

type Props = {
  ads: SanityDocument[];
};

const PropertiesListing = (props: Props) => {
  const searchParams = useSearchParams();
  const search = searchParams?.get("search") || "";
  const tag = searchParams?.get("tag") || "all";
  const router = useRouter();
  const [showAd, setShowAd] = useState(false);
  const { user } = useAppStore();
  const {
    data: listings,
    error,
    isLoading,
    isValidating,
    loadMore,
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
    <main className="wrapper mx-auto max-w-fit overflow-x-hidden max-sm:-mt-10">
      {/* Listing */}
      <FramerWrapper>
        <section className="listing-grid">
          <FetchingStates
            data={listings}
            error={error}
            isLoading={isLoading}
            isLoadingComponent={<SkeletonListing count={3} />}
            emptyStateComponent={
              <PropertiesEmptyState onClick={handleViewSimilarResults} />
            }
          />
          {listings
            ?.slice(0, 9)
            ?.map((listing) => (
              <ListingCard
                key={listing.id}
                {...getListingProps(
                  listing as Partial<Listing>,
                  user as UserType,
                )}
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
                {...getListingProps(
                  listing as Partial<Listing>,
                  user as UserType,
                )}
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
    </main>
  );
};

export default PropertiesListing;
