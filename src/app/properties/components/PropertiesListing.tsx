"use client";
import React from "react";
import ListingCard from "@/components/__shared/listing/ListingCard";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import images from "@/enum/temp/images";
import FetchErrorMessage from "@/components/__shared/ui/data_fetching/FetchErrorMessage";
import { addQueryParamsToUrl } from "@/lib/utils/stringManipulation";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useFetchProperties } from "../services";
import PropertiesEmptyState from "./PropertiesEmptyState";
import ButtonInfiniteLoading from "@/components/__shared/ui/data_fetching/ButtonInfiniteLoading";

type Props = {};

const PropertiesListing = (props: Props) => {
  const { user } = useAppStore();
  const {
    data: listings,
    error,
    isLoading,
    isValidating,
    loadMore,
  } = useFetchProperties();

  return (
    <>
      {/* Listing */}
      <section className="mx-auto mb-10 grid grid-cols-1 justify-center gap-x-5 gap-y-16 transition-all md:grid-cols-2 lg:grid-cols-3">
        <FetchingStates
          data={listings}
          error={error}
          isLoading={isLoading}
          isValidating={isValidating}
          isLoadingComponent={<SkeletonListing count={3} />}
          errorComponent={<FetchErrorMessage specificData="properties" />}
          emptyStateComponent={<PropertiesEmptyState />}
        />
        {listings?.map((listing) => (
          <ListingCard
            cardType="2"
            propertyId={listing.id as number}
            key={listing.id}
            href={addQueryParamsToUrl(`/properties/${listing.property_id}`, {
              property_type: listing.property_type,
              bedrooms: listing.bedrooms,
              city: listing.city,
              neighbourhood: listing.neighbourhood,
              subtitle: listing.subtitle,
              advance_period: listing.advance_period,
              payment_structure: listing.advance_payment_options,
              amount_per_month: listing.monthly_amount as number,
              rating: 4,
            })}
            bedrooms={listing.bedrooms as number}
            propertyType={listing.property_type as string}
            city={listing.city as string}
            neighbourhood={listing.neighbourhood as string}
            images={images} // TODO: check database
            liked={false} // TODO: check implementation
            guarantee={"Certified" as GuaranteeTag} // TODO: check database
            monthlyAmount={listing.monthly_amount as number}
            paymentStructure={"Bi-Annually" as PaymentStructure} // TODO: check database
            subtitle={listing.subtitle as string}
            rating={4.5} // TODO: check database
            ratingCount={105} // TODO: check database
            hint={"Best Value" as HintTag} // TODO: check database
            advancePeriod={listing.advance_period as number}
          />
        ))}
      </section>
      <div className="flex justify-center">
        <ButtonInfiniteLoading
          data={listings}
          isLoading={isLoading}
          isValidating={isValidating}
          loadMore={loadMore}
        />
      </div>
    </>
  );
};

export default PropertiesListing;
