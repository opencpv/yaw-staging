"use client";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import ListingCard from "@/components/__shared/ui/listing/ListingCard";
import { useAppStore } from "@/store/dashboard/AppStore";
import ContactPreferenceToggle from "../../components/shared/ContactPreferenceToggle";
import { useFetchCriteriaMatches, useFetchSearchCriteria } from "./services";
import { getListingProps } from "@/lib/enum";
import { Skeleton } from "@nextui-org/react";
import ButtonInfiniteLoading from "@/components/__shared/ui/data_fetching/ButtonInfiniteLoading";
import ManageButton from "./components/ManageButton";
import dynamic from "next/dynamic";
const BTFTKModal = dynamic(() => import("./components/steps/BTFTKModal"));
const NoCriteriaEmptyState = dynamic(
  () => import("./components/NoCriteriaEmptyState"),
);
const NoMatchEmptyState = dynamic(
  () => import("./components/NoMatchEmptyState"),
);

const BeTheFirstToKnow = () => {
  const { user } = useAppStore();
  const { data: searchCriteria } = useFetchSearchCriteria({
    userId: user?.id as string,
  });

  const {
    data: matchedListings,
    error,
    isLoading,
    isValidating,
    loadMore,
  } = useFetchCriteriaMatches({ userId: user?.id as string });

  return (
    <>
      {isLoading ? (
        <div className="flex flex-col gap-8">
          <BTFTKModal />
          <Skeleton className="h-5 w-80 rounded-md" />
          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            <SkeletonListing />
          </section>
        </div>
      ) : matchedListings && matchedListings?.length > 0 && !error ? (
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
      ) : (
        <section>
          <div className="flex flex-col gap-8">
            {searchCriteria?.length === 0 ? (
              <NoCriteriaEmptyState />
            ) : matchedListings?.length === 0 ? (
              <NoMatchEmptyState />
            ) : null}
          </div>
        </section>
      )}
    </>
  );
};

export default BeTheFirstToKnow;
