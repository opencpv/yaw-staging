"use client";
import Image from "next/image";
import { useState } from "react";
import SavedSearchCard from "./components/SavedSearchCard";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Button from "@/components/__shared/ui/button/Button";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import { revalidationRule, fetchOrderRule } from "@/lib/utils/fetchRules";
import { useFetchTableWithInfiniteScroll } from "@/lib/custom-hooks/useFetch";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import FetchErrorMessage from "@/components/__shared/ui/data_fetching/FetchErrorMessage";
import ListingCard from "@/components/__shared/listing/ListingCard";
import demoimages from "@/enum/temp/images";
import { Switch } from "@nextui-org/react";
import Toggle from "@/components/ui/Toggle";
import ContactPreferenceToggle from "./components/ContactPreferenceToggle";
import { useFetchUserFavorites } from "../../components/shared/favorites/utils/services";
import { useAppStore } from "@/store/dashboard/AppStore";

export default function Page() {
  const [savedSearches, setSavedSearches] = useState(true);
  const { images } = useAssets();

  const { user } = useAppStore();

  const {
    data: listings,
    error,
    isLoading,
    isValidating,
    loadMore,
    mutate,
  } = useFetchUserFavorites(user?.id as string);

  return (
    <div>
      <h2>My Favourites</h2>
      <div className="mt-4">
        <ContactPreferenceToggle />
      </div>
      <section className="mx-auto my-10 grid grid-cols-1 justify-center gap-x-3 gap-y-16 transition-all sm:grid-cols-2 lg:grid-cols-3">
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
            cardType="2"
            propertyId={listing?.standard_template?.property?.id as number}
            key={listing?.standard_template?.id}
            href={`/properties/${listing?.standard_template?.property
              ?.id}?${new URLSearchParams({
              property_type: listing?.standard_template
                ?.property_type as string,
              bedrooms: String(listing?.standard_template?.bedrooms),
              city: listing?.standard_template?.city as string,
              neighbourhood: listing?.standard_template
                ?.neighbourhood as string,
              subtitle: listing?.standard_template?.subtitle as string,
              advance_period: String(
                listing?.standard_template?.advance_period,
              ),
              payment_structure: String(
                listing?.standard_template?.advance_payment_options,
              ),
              amount_per_month: String(
                listing?.standard_template?.monthly_amount,
              ),
              rating: String(4),
              viewing_fee: String(listing?.standard_template?.viewing_fee),
              is_realtors_choice: String(
                listing?.standard_template?.property?.is_realtors_choice,
              ),
              is_best_value: String(
                listing?.standard_template?.property?.is_best_value,
              ),
              is_featured: String(
                listing?.standard_template?.property?.is_featured,
              ),
            })}`}
            bedrooms={listing?.standard_template?.bedrooms as number}
            propertyType={listing?.standard_template?.property_type as string}
            city={listing?.standard_template?.city as string}
            neighbourhood={listing?.standard_template?.neighbourhood as string}
            images={demoimages} // TODO: check database
            liked={listing?.standard_template?.favorite_user_ids?.includes(
              user?.id as string,
            )}
            guarantee={
              listing?.standard_template?.is_property_verified
                ? ("Verified" as GuaranteeTag)
                : listing?.standard_template?.is_lister_certified
                  ? ("Certified" as GuaranteeTag)
                  : undefined
            }
            monthlyAmount={listing?.standard_template?.monthly_amount as number}
            paymentStructure={"Bi-Annually" as PaymentStructure} // TODO: check database
            subtitle={listing?.standard_template?.subtitle as string}
            rating={4.5} // TODO: check database
            ratingCount={105} // TODO: check database
            hint={
              listing?.standard_template?.property?.is_realtors_choice
                ? ("Realtor's Choice" as HintTag)
                : listing?.standard_template?.property?.is_best_value
                  ? ("Best Value" as HintTag)
                  : undefined
            }
            advancePeriod={listing?.standard_template?.advance_period as number}
            ViewingFee={listing?.standard_template?.viewing_fee as number}
          />
        ))}
      </section>
    </div>
    // <div className="flex w-full flex-col items-center justify-center ">
    //   {!savedSearches && (
    //     <div className="mt-24 flex w-full flex-col items-center justify-center pt-5">
    //       <div className="relative aspect-[411/282] w-full max-w-[411px]">
    //         <Image src={"/svgs/saved-search.svg"} fill alt="No saved search" />
    //       </div>
    //       <p className="text-[1.5625rem] font-semibold text-shade-300">
    //         You have no saved searches
    //       </p>
    //     </div>
    //   )}
    //   {savedSearches && (
    //     <div className="grid w-full max-w-[1669px] grid-cols-3 gap-x-5 gap-y-5 md:grid-cols-4 lg:grid-cols-3">
    //       {Array.from({ length: 5 }).map((r, index) => (
    //         <div className="col-span-3 md:col-span-2 lg:col-span-1" key={index}>
    //           <SavedSearchCard data={r} />
    //         </div>
    //       ))}
    //     </div>
    //   )}
    // </div>
  );
}
