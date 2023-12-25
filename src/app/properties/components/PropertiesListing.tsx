"use client";
import React from "react";
import Button from "@/components/__shared/ui/data_fetching/ButtonInfiniteLoading";
import { useFetchTableWithInfiniteScroll } from "@/lib/custom-hooks/useFetch";
import ListingCard from "@/components/__shared/listing/ListingCard";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import images from "@/enum/temp/images";
import { revalidationRule, fetchOrderRule } from "@/lib/utils/fetchRules";
import FetchErrorMessage from "@/components/__shared/ui/data_fetching/FetchErrorMessage";

type Props = {};

const PropertiesListing = (props: Props) => {
  const {
    data: listings,
    error,
    isValidating,
    isLoading,
    loadMore,
  } = useFetchTableWithInfiniteScroll({
    tableName: "standard_template",
    pageSize: 9,
    order: { column: "created_at", ...fetchOrderRule() },
    select: "id, property_name, property_id, description, monthly_amount, city",
    ...revalidationRule(),
  });
  return (
    <>
      {/* Listing */}
      <section className="mb-10 space-y-5 grid-cols-autofit-listing-card gap-x-3 gap-y-10 transition-all sm:space-y-0 sm:grid">
        <FetchingStates
          data={listings}
          error={error}
          isLoading={isLoading}
          isValidating={isValidating}
          isLoadingComponent={<SkeletonListing count={3} />}
          errorComponent={<FetchErrorMessage specificData="properties" />}
          noDataMessageComponent={
            <p className="italic mt-4 text-center">
              There are no properties yet.
            </p>
          }
        />
        {listings?.map((listing) => (
          <ListingCard
            key={listing.id as string}
            cardType="2"
            href={`/properties/${listing.property_id}`}
            propertyName={listing.property_name as string}
            city={listing.city as string}
            images={images} // TODO: check database
            liked={false} // TODO: check implementation
            membership={"Certified" as Membership} // TODO: check database
            monthlyAmount={listing.monthly_amount as number}
            paymentStructure={"Bi-Annually" as PaymentStructure} // TODO: check database
            propertyDescription={listing.description as string}
            price={4000} // TODO: check database
            rating={4.5} // TODO: check database
            ratingCount={105} // TODO: check database
            deal={"Best Value" as Deal} // TODO: check database
          />
        ))}
      </section>
      <div className="flex justify-center">
        <Button
          data={listings}
          isLoading={isLoading}
          isValidating={isValidating}
          loadMore={loadMore}
          noDataMessage="There are no more properties to show."
        />
      </div>
    </>
  );
};

export default PropertiesListing;
