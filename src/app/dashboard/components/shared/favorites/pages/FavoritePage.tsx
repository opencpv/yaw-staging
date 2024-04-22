"use client";
import { useState } from "react";
import SavedSearchCard from "../SavedSearchCard";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import ListingCard from "@/components/__shared/listing/ListingCard";
import ContactPreferenceToggle from "../ContactPreferenceToggle";
import { useFetchUserFavorites } from "../utils/services";
import { useAppStore } from "@/store/dashboard/AppStore";
import SomethingWentWrong from "@/app/components/SomethingWentWrong";
import ButtonInfiniteLoading from "@/components/__shared/ui/data_fetching/ButtonInfiniteLoading";
import EmptyState from "@/components/__shared/ui/EmptyState";
import { getListingProps } from "@/lib/enum";

export default function FavoritePage() {
  const [savedSearches, setSavedSearches] = useState(true);
  const { user } = useAppStore();

  const {
    data: listings,
    error,
    isLoading,
    isValidating,
    loadMore,
    mutate,
  } = useFetchUserFavorites(user?.id as string);

  return (
    <div>
      <h2>My Favourites</h2>
      <div className="mt-4">
        <ContactPreferenceToggle />
      </div>
      <section className="mx-auto my-10 grid grid-cols-1 justify-center gap-x-3 gap-y-16 transition-all sm:grid-cols-2 lg:grid-cols-3">
        <FetchingStates
          data={listings}
          error={error}
          isLoading={isLoading}
          isLoadingComponent={<SkeletonListing count={3} />}
          errorComponent={
            <SomethingWentWrong
              className="mt-20 h-fit"
              onTryAgain={() => mutate()}
            />
          }
          emptyStateComponent={
            <EmptyState
              buttonLabel="Search for properties"
              href="/properties"
            />
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
    </div>
  );
}
