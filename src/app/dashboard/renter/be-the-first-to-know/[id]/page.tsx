"use client";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import demoimages from "@/enum/temp/images";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import FetchErrorMessage from "@/components/__shared/ui/data_fetching/FetchErrorMessage";
import ListingCard from "@/components/__shared/ui/listing/ListingCard";
import { useFetchTableWithInfiniteScroll } from "@/lib/custom-hooks/useFetch";
import { revalidationRule, fetchOrderRule } from "@/lib/utils/fetchRules";
import { useEffect } from "react";

let demo = [
  {
    isViewed: false,
  },
  {
    isViewed: false,
  },
  {
    isViewed: true,
  },
  {
    isViewed: true,
  },
  {
    isViewed: false,
  },
  {
    isViewed: false,
  },
  {
    isViewed: true,
  },
];

const BeTheFirstToKnow = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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
      <FetchingStates
        data={listings}
        error={error}
        isLoading={isLoading}
        isValidating={isValidating}
        isLoadingComponent={<SkeletonListing count={3} />}
        errorComponent={<FetchErrorMessage specificData="properties" />}
        emptyStateComponent={
          <p className="mt-4 text-center italic">
            There are no properties yet.
          </p>
        }
      />
      {listings?.map((listing, idx) => (
        <ListingCard
          key={listing.id as string}
          cardType="2"
          href={`/properties/${listing.property_id}?property_name=${
            listing.property_name
          }&city=${listing.city}&price=${listing.price}&payment_structure=${
            listing.payment_structure
          }&amount_per_month=${listing.monthly_amount as number}&rating=${
            listing.rating_count
          }&property_description=${listing.description}`.replaceAll(" ", "_")}
          propertyName={listing.property_name as string}
          city={listing.city as string}
          images={demoimages} // TODO: check database
          liked={false} // TODO: check implementation
          guarantee={"Certified" as GuaranteeTag} // TODO: check database
          monthlyAmount={listing.monthly_amount as number as number}
          paymentStructure={"Bi-Annually" as PaymentStructure} // TODO: check database
          propertyDescription={listing.description as string}
          rating={4.5} // TODO: check database
          ratingCount={105} // TODO: check database
          hint={"Best Value" as HintTag} // TODO: check database
          showNotViewed
          isViewed={idx === 5 || idx === 3 || idx === 7 ? false : true}
          isAdmin={true}
        />
      ))}
    </>
  );
};

export default BeTheFirstToKnow;
