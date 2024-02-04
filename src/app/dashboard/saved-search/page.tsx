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

export default function Page() {
  const [savedSearches, setSavedSearches] = useState(true);
  const { images } = useAssets();

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
      <h2>My Favourites</h2>
      <div className="mt-4">
        <Switch
          classNames={{
            thumb: "bg-neutral-200 group-data-[selected=true]:bg-accent-50",
            wrapper: "bg-transparent border",
            label: "text-neutral-500",
          }}
          size="sm"
          // color="warning"
          // isSelected={isAdvancedActive}
          // onValueChange={handleIsActive}
        >
          Allow property owners to contact you
        </Switch>
      </div>
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
            isMyFavoritePage
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
