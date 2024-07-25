"use client";
import Button from "@/components/__shared/ui/button/Button";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useFetchCriteriaMatches } from "../../services";
import { useAppStore } from "@/store/dashboard/AppStore";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import { Skeleton } from "@nextui-org/react";
import ListingCard from "@/components/__shared/ui/listing/ListingCard";
import { getListingProps } from "@/lib/enum";
import capitalizeName from "@/lib/utils/stringManipulation";

type Props = {
  params: {
    target: string[];
  };
};

const CriterionMatches = ({ params }: Props) => {
  const { user } = useAppStore();
  const secondParam = params.target[1];
  const firstParams = params.target[0];
  const id = secondParam.split("-")[1];
  const criterionTitle = capitalizeName(firstParams.replaceAll("-", " "));

  const { data: matchedListings, isLoading } = useFetchCriteriaMatches({
    userId: user?.id as string,
    criterionId: Number(id),
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

          <div className="listing-grid">{<SkeletonListing />}</div>
        </section>
      )}

      {matchedListings && matchedListings?.length > 0 && (
        <section className="space-y-5">
          <h3 className="text-shade-300">{criterionTitle}</h3>

          <div className="listing-grid">
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
