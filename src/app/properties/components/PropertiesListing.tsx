"use client";
import React from "react";
import ListingCard from "@/components/__shared/listing/ListingCard";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import images from "@/enum/temp/images";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useFetchProperties } from "../services";
import PropertiesEmptyState from "./PropertiesEmptyState";
import ButtonInfiniteLoading from "@/components/__shared/ui/data_fetching/ButtonInfiniteLoading";
import SomethingWentWrong from "@/app/components/SomethingWentWrong";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type Props = {};

const PropertiesListing = (props: Props) => {
  const searchParams = useSearchParams();
  const search = searchParams?.get("search") || "";
  const tag = searchParams?.get("tag") || "all";
  const router = useRouter();

  const { user } = useAppStore();
  const {
    data: listings,
    error,
    isLoading,
    isValidating,
    loadMore,
    mutate,
  } = useFetchProperties({ searchString: search as string, filter: tag });

  const handleViewSimilarResults = () => {
    // TODO: implement appropriately
    router.replace(
      `/properties?${new URLSearchParams({
        search: "Accra",
        tag: "all",
      })}`,
      {
        scroll: false,
      },
    );
  };

  return (
    <>
      {/* Listing */}
      <section className="mx-auto mb-10 grid grid-cols-1 justify-center gap-x-5 gap-y-16 transition-all md:grid-cols-2 lg:grid-cols-3">
        <FetchingStates
          data={listings}
          error={error}
          isLoading={isLoading}
          // isValidating={isValidating}
          isLoadingComponent={<SkeletonListing count={3} />}
          errorComponent={
            <SomethingWentWrong
              className="col-span-full h-fit"
              onTryAgain={() => {
                mutate();
              }}
            />
          }
          emptyStateComponent={
            <PropertiesEmptyState onClick={handleViewSimilarResults} />
          }
        />
        {listings?.map((listing) => (
          <ListingCard
            cardType="2"
            propertyId={listing.property_id as number}
            key={listing.id}
            href={`/properties/${listing.property_id}?${new URLSearchParams({
              property_type: listing.property_type as string,
              bedrooms: String(listing.bedrooms),
              city: listing.city as string,
              neighbourhood: listing.neighbourhood as string,
              subtitle: listing.subtitle as string,
              advance_period: String(listing.advance_period),
              payment_structure: String(listing.advance_payment_options),
              amount_per_month: String(listing.monthly_amount),
              rating: String(4),
              viewing_fee: String(listing.viewing_fee),
              is_realtors_choice: String(listing.property?.is_realtors_choice),
              is_best_value: String(listing.property?.is_best_value),
              is_featured: String(listing.property?.is_featured),
            })}`}
            bedrooms={listing.bedrooms as number}
            propertyType={listing.property_type as string}
            city={listing.city as string}
            neighbourhood={listing.neighbourhood as string}
            images={images} // TODO: check database
            liked={listing?.favorite_user_ids?.includes(user?.id as string)}
            guarantee={
              listing.is_property_verified
                ? ("Verified" as GuaranteeTag)
                : listing.is_lister_certified
                  ? ("Certified" as GuaranteeTag)
                  : undefined
            }
            monthlyAmount={listing.monthly_amount as number}
            paymentStructure={"Bi-Annually" as PaymentStructure} // TODO: check database
            subtitle={listing.subtitle as string}
            rating={4.5} // TODO: check database
            ratingCount={105} // TODO: check database
            hint={
              listing?.property?.is_realtors_choice
                ? ("Realtor's Choice" as HintTag)
                : listing?.property?.is_best_value
                  ? ("Best Value" as HintTag)
                  : undefined
            }
            advancePeriod={listing.advance_period as number}
            ViewingFee={listing.viewing_fee as number}
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
