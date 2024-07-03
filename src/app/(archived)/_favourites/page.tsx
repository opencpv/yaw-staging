"use client";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import ListingCard from "@/components/__shared/ui/listing/ListingCard";
import ContactPreferenceToggle from "../../dashboard/components/shared/ContactPreferenceToggle";
import { useFetchUserFavorites } from "./services";
import { useAppStore } from "@/store/dashboard/AppStore";
import SomethingWentWrong from "@/components/__shared/ui/states/SomethingWentWrong";
import ButtonInfiniteLoading from "@/components/__shared/ui/data_fetching/ButtonInfiniteLoading";
import EmptyState from "@/components/__shared/ui/states/EmptyState";
import { getListingProps } from "@/lib/enum";

export default function FavoritePage() {
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
    <div>
      <h2>My Favourites</h2>
      <div className="mt-4">
        <ContactPreferenceToggle />
      </div>
      <section className="listing-grid">
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
      <ButtonInfiniteLoading
        data={listings}
        isLoading={isLoading}
        isValidating={isValidating}
        loadMore={loadMore}
      />
    </div>
  );
}
