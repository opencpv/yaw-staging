"use client";
import { useState } from "react";
import SavedSearchCard from "../SavedSearchCard";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import ListingCard from "@/components/__shared/listing/ListingCard";
import demoimages from "@/enum/temp/images";
import ContactPreferenceToggle from "../ContactPreferenceToggle";
import { useFetchUserFavorites } from "../utils/services";
import { useAppStore } from "@/store/dashboard/AppStore";
import SomethingWentWrong from "@/app/components/SomethingWentWrong";
import ButtonInfiniteLoading from "@/components/__shared/ui/data_fetching/ButtonInfiniteLoading";

export default function FavoritePage() {
  const [savedSearches, setSavedSearches] = useState(true);
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
          isLoadingComponent={<SkeletonListing count={3} />}
          errorComponent={
            <SomethingWentWrong
              className="col-span-full mt-20 h-fit"
              onTryAgain={() => mutate()}
            />
          }
          emptyStateComponent={
            <p className="mt-4 text-center italic">
              There are no properties yet.
            </p>
          }
        />
        {listings?.map((listing, idx) => (
          <ListingCard
            key={listing.id}
            href={`/properties/${listing.id}?${new URLSearchParams({
              property_type: listing.property_type as string,
              bedrooms: String(listing.bedrooms),
              city: listing.city as string,
              neighbourhood: listing.neighbourhood as string,
              subtitle: listing.subtitle as string,
              advance_period: String(listing.advance_period),

              amount_per_month: String(listing.monthly_amount),
              rating: String(4),
              viewing_fee: String(listing.viewing_fee),
              is_realtors_choice: String(listing.is_realtors_choice),
              is_best_value: String(listing.is_best_value),
              is_featured: String(listing.is_featured),
            })}`}
            bedrooms={listing.bedrooms as number}
            propertyType={listing.property_type as string}
            city={listing.city as string}
            neighbourhood={listing.neighbourhood as string}
            images={demoimages} // TODO: check database
            liked={listing?.favorite_user_ids?.includes(user?.id as string)}
            guarantee={
              listing.is_verified
                ? ("Verified" as GuaranteeTag)
                : listing.profiles?.is_certified
                  ? ("Certified" as GuaranteeTag)
                  : undefined
            }
            monthlyAmount={listing.monthly_amount as number}
            paymentStructure={"Bi-Annually" as PaymentStructure} // TODO: check database
            subtitle={listing.subtitle as string}
            rating={4.5} // TODO: check database
            ratingCount={105} // TODO: check database
            hint={
              listing.is_realtors_choice
                ? ("Realtor's Choice" as HintTag)
                : listing.is_best_value
                  ? ("Best Value" as HintTag)
                  : undefined
            }
            advancePeriod={listing.advance_period as number}
            ViewingFee={listing.viewing_fee as number}
            cardType="2"
          />
        ))}
      </section>
      <div className="mt-10 flex justify-center">
        <ButtonInfiniteLoading
          data={listings}
          isLoading={isLoading}
          isValidating={isValidating}
          loadMore={loadMore}
        />
      </div>
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
