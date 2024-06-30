"use client";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import ListingCard from "@/components/__shared/ui/listing/ListingCard";
import { useAppStore } from "@/store/dashboard/AppStore";
import NoCriteriaEmptyState from "./components/NoCriteriaEmptyState";
import NoMatchEmptyState from "./components/NoMatchEmptyState";
import BTFTKModal from "./steps/BTFTKModal";
import ContactPreferenceToggle from "@/app/(archived)/_favourites/components/ContactPreferenceToggle";
import {
  useFetchCriteriaMatches,
  useFetchUserSearchCriteria,
} from "./services";
import { getListingProps } from "@/lib/enum";
import { Skeleton } from "@nextui-org/react";
import ButtonInfiniteLoading from "@/components/__shared/ui/data_fetching/ButtonInfiniteLoading";
import ManageButton from "./components/ManageButton";

const BeTheFirstToKnow = () => {
  const { user } = useAppStore();
  const { data: searchCriteria } = useFetchUserSearchCriteria({
    userId: user?.id as string,
  });

  const {
    data: matchedListings,
    error,
    isLoading,
    isValidating,
    loadMore,
  } = useFetchCriteriaMatches({ userId: user?.id as string });

  if (isLoading) {
    return (
      <div className="flex flex-col gap-8">
        <BTFTKModal />
        <Skeleton className="h-5 w-80 rounded-md" />
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          <SkeletonListing />
        </section>
      </div>
    );
  }
  if (matchedListings?.length! > 0 && !error) {
    return (
      <>
        <div className="flex flex-col gap-8">
          <div className="flex gap-5">
            <BTFTKModal float />
            <ManageButton />
          </div>
          <ContactPreferenceToggle />
          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {matchedListings?.map((listing) => (
              <ListingCard
                key={listing.id}
                {...getListingProps(listing, user as UserType)}
              />
            ))}
          </section>
        </div>
        <ButtonInfiniteLoading
          data={matchedListings}
          isLoading={isLoading}
          isValidating={isValidating}
          loadMore={loadMore}
        />
      </>
    );
  } else
    return (
      <section>
        <div className="flex flex-col gap-8">
          {searchCriteria?.length === 0 ? (
            <NoCriteriaEmptyState />
          ) : matchedListings?.length === 0 ? (
            <NoMatchEmptyState />
          ) : null}
        </div>
      </section>
    );
};

export default BeTheFirstToKnow;
