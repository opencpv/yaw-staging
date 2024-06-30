"use client";
import Button from "@/components/__shared/ui/button/Button";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import {
  useFetchCriteriaMatches,
  useFetchSearchCriteriaById,
} from "../../services";
import { useAppStore } from "@/store/dashboard/AppStore";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import { Skeleton } from "@nextui-org/react";
import NoMatchEmptyState from "../NoMatchEmptyState";
import ListingCard from "@/components/__shared/ui/listing/ListingCard";
import { getListingProps } from "@/lib/enum";

type Props = {
  id: string;
};

const CriterionMatches = ({ id }: Props) => {
  const { user } = useAppStore();

  const { data: criterion } = useFetchSearchCriteriaById({
    id,
    userId: user?.id as string,
  });

  const { data: matchedListings, isLoading } = useFetchCriteriaMatches({
    userId: user?.id as string,
    criterion: criterion as SearchCriteria,
  });

  return (
    <div className="space-y-20">
      <Button
        href="/dashboard/renter/be-the-first-to-know/manage-criteria"
        variant="ghost"
        className="gap-3 font-semibold"
      >
        <FaChevronLeft size={18} />
        Go Back
      </Button>

      {isLoading && (
        <section className="space-y-5">
          <Skeleton className="h-5 w-80 rounded-md" />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {<SkeletonListing />}
          </div>
        </section>
      )}

      {matchedListings?.length! <= 0 ? (
        <NoMatchEmptyState />
      ) : (
        <section className="space-y-5">
          <h3 className="text-shade-300">{criterion?.title}</h3>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {matchedListings?.map((listing) => (
              <ListingCard
                key={listing.id}
                {...getListingProps(listing, user as UserType)}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default CriterionMatches;
