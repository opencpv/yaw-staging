"use client";
import React from "react";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import ListingCard from "@/components/__shared/ui/listing/ListingCard";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import { useAppStore } from "@/store/dashboard/AppStore";
import ButtonInfiniteLoading from "@/components/__shared/ui/data_fetching/ButtonInfiniteLoading";
import EmptyState from "@/components/__shared/ui/states/EmptyState";
import { getListingProps } from "@/lib/enum";
import { useFetchUserFavorites } from "./services";
import ContactPreferenceToggle from "../../components/shared/ContactPreferenceToggle";

const FavourtiesPage = () => {
  const { user } = useAppStore();

  const {
    data: listings,
    error,
    isLoading,
    isValidating,
    loadMore,
    mutate,
  } = useFetchUserFavorites({ userId: user?.id as string });

  return (
    <main className="w-full flex flex-col gap-8 bg-white">
      <h2>Favourites</h2>

      <div className="relative bottom-4">
        <ContactPreferenceToggle />
      </div>

      <section className="listing-grid">
        <FetchingStates
          data={listings}
          error={error}
          isLoading={isLoading}
          isLoadingComponent={<SkeletonListing count={3} />}
          emptyStateComponent={<EmptyState />}
        />
        {listings?.map((listing) => (
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
        loadMore={loadMore}
      />
    </main>
  );
};

export default FavourtiesPage;
