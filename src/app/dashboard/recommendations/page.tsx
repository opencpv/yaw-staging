"use client";
import { useState } from "react";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import { revalidationRule, fetchOrderRule } from "@/lib/utils/fetchRules";
import { useFetchTableWithInfiniteScroll } from "@/lib/custom-hooks/useFetch";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import FetchErrorMessage from "@/components/__shared/ui/data_fetching/FetchErrorMessage";
import ListingCard from "@/components/__shared/listing/ListingCard";
import demoimages from "@/enum/temp/images";
import { Switch } from "@nextui-org/react";

export default function Page() {
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
    <div>
      <h2>Recommendations</h2>
      <div className="mt-4"></div>
      <section className="mx-auto my-10 grid grid-cols-1 justify-center gap-x-3 gap-y-10 transition-all sm:grid-cols-2 lg:grid-cols-3">
        <FetchingStates
          data={listings}
          error={error}
          isLoading={isLoading}
          isValidating={isValidating}
          isLoadingComponent={<SkeletonListing count={3} />}
          errorComponent={<FetchErrorMessage specificData="properties" />}
          noDataMessageComponent={
            <p className="mt-4 text-center italic">
              There are no properties yet.
            </p>
          }
        />
        {listings?.map((listing, idx) => (
          <ListingCard
            key={listing.id as string}
            cardType="2"
            href={`/properties/${listing.property_id}?property_name=${listing.property_name}&city=${listing.city}&price=${listing.price}&payment_structure=${listing.payment_structure}&amount_per_month=${listing.monthly_amount}&rating=${listing.rating_count}&property_description=${listing.description}`.replaceAll(
              " ",
              "_",
            )}
            propertyName={listing.property_name as string}
            city={listing.city as string}
            images={demoimages} // TODO: check database
            liked={true} // TODO: check implementation
            membership={"Certified" as Membership} // TODO: check database
            monthlyAmount={listing.monthly_amount as number}
            paymentStructure={"Bi-Annually" as PaymentStructure} // TODO: check database
            propertyDescription={listing.description as string}
            price={4000} // TODO: check database
            rating={4.5} // TODO: check database
            ratingCount={105} // TODO: check database
            deal={"Best Value" as Deal} // TODO: check database
            isRecommendationsPage
          />
        ))}
      </section>
    </div>
  );
}
