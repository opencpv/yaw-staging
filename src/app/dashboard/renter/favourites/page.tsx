"use client";
import React from "react";
import FetchingStates from "@/components/__shared/ui/data_fetching/fetching-states";
import SkeletonListing from "@/components/__shared/ui/skeleton/skeleton-listing";
import { useAppStore } from "@/store/dashboard/AppStore";
import { getListingProps, Listing } from "@/lib/enum";
import { useFetchUserFavorites } from "./services";
import ContactPreferenceToggle from "../../components/shared/ui/ContactPreferenceToggle";
import dynamic from "next/dynamic";
const EmptyState = dynamic(
  () => import("@/components/__shared/ui/states/empty-state"),
);
const ListingCard = dynamic(
  () => import("@/components/__shared/ui/listing/listing-card"),
);
const ButtonInfiniteLoading = dynamic(
  () =>
    import("@/components/__shared/ui/data_fetching/button-infinite-loading"),
);

const FavouritesPage = () => {
  const { user } = useAppStore();

  const {
    data: listings,
    error,
    isLoading,
    isValidating,
    loadMore,
  } = useFetchUserFavorites({ userId: user?.id as string });

  return (
    <main className="flex w-full flex-col gap-8 bg-white">
      <h2>Favourites</h2>

      <div className="relative">
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
            {...getListingProps(listing as Partial<Listing>, user as UserType)}
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

export default FavouritesPage;
