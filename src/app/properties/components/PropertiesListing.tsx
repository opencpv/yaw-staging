"use client";
import React from "react";
import { useFetchTableWithInfiniteScroll } from "@/lib/custom-hooks/useFetch";
import ListingCard from "@/components/__shared/listing/ListingCard";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import images from "@/enum/temp/images";
import { revalidationRule, fetchOrderRule } from "@/lib/utils/fetchRules";
import FetchErrorMessage from "@/components/__shared/ui/data_fetching/FetchErrorMessage";
import { useQuery } from "@tanstack/react-query";
import { getListings } from "@/actions/listing";
import { addQueryParamsToUrl } from "@/lib/utils/stringManipulation";
import { createClient } from "@/lib/utils/supabase/client";
import { useAppStore } from "@/store/dashboard/AppStore";
import { propertyFilterStore } from "@/store/properties/usePropertiesStore";
import { useFetchProperties } from "../fetchHooks";
import PropertiesEmptyState from "./PropertiesEmptyState";

type Props = {};

const PropertiesListing = (props: Props) => {
  const { user } = useAppStore();
  // const {
  //   data: listings,
  //   error,
  //   isValidating,
  //   isLoading,
  //   loadMore,
  // } = useFetchTableWithInfiniteScroll({
  //   tableName: "standard_template",
  //   pageSize: 9,
  //   order: { column: "created_at", ...fetchOrderRule() },
  //   select: "id, property_name, property_id, description, monthly_amount, city",
  //   ...revalidationRule(),
  // });

  const { data: listings, error, isLoading, isFetching } = useFetchProperties();

  return (
    <>
      {/* Listing */}
      <section className="mx-auto mb-10 grid grid-cols-1 justify-center gap-x-5 gap-y-16 transition-all md:grid-cols-2 lg:grid-cols-3">
        <FetchingStates
          data={listings}
          error={error}
          isLoading={isLoading}
          isValidating={isFetching}
          isLoadingComponent={<SkeletonListing count={3} />}
          errorComponent={<FetchErrorMessage specificData="properties" />}
          emptyStateComponent={<PropertiesEmptyState />}
        />
        {listings?.map((listing) => (
          <ListingCard
            key={listing.id}
            cardType="2"
            href={addQueryParamsToUrl(`/properties/${listing.property_id}`, {
              property_name: listing.property_name,
              city: listing.city,
              price: listing.monthly_amount,
              payment_structure: listing.advance_payment_options,
              amount_per_month: listing.monthly_amount,
              rating: 4,
            })}
            propertyId={listing.property_id as number}
            propertyName={listing.property_name as string}
            city={listing.city as string}
            images={images} // TODO: check database
            liked={listing.favorite_user_id === user?.id}
            guarantee={"Certified" as GuaranteeTag} // TODO: check database
            monthlyAmount={2000}
            paymentStructure={"Bi-Annually" as PaymentStructure} // TODO: check database
            propertyDescription={listing.description as string}
            price={4000} // TODO: check database
            rating={4.5} // TODO: check database
            ratingCount={105} // TODO: check database
            hint={"Best Value" as HintTag} // TODO: check database
          />
        ))}
      </section>
      {/* <div className="flex justify-center">
        <Button
          data={listings}
          isLoading={isLoading}
          isValidating={isValidating}
          loadMore={loadMore}
          noDataMessage="There are no more properties to show."
        />
      </div> */}
    </>
  );
};

export default PropertiesListing;
