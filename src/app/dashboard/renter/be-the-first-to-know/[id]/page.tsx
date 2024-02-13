"use client";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import demoimages from "@/enum/temp/images";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import FetchErrorMessage from "@/components/__shared/ui/data_fetching/FetchErrorMessage";
import ListingCard from "@/components/__shared/listing/ListingCard";
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
      {/* <div className="flex items-center gap-5">
            <RxTarget size={50} />
            <h3 className="my-10 font-normal">All Targeted Search</h3>
          </div> */}
      {/* <div className="flex items-center justify-center">
            <LargeButton
              icon={<MdOutlineLibraryAdd />}
              label="Add Targeted Search"
              className="mt-10"
            />
          </div> */}
      {/* results found */}
      {/* <div className="mb-2 grid sm:grid-cols-1 lg:grid-cols-3">
            <div className="flex justify-between rounded-[12px] border-[1px] px-6 py-3">
              <p className="mt-1 font-semibold text-[#00763A]">
                {data.length} {data.length > 1 ? "results" : "result"} found
              </p>
              <div className="relative">
                <CaDashEyeOff />
                <div className="absolute right-[-14px] top-[2px] flex h-7 w-7 items-center justify-center rounded-full bg-[#B71851] text-[10px] text-white">
                  20+
                </div>
              </div>
            </div>
          </div> */}
      {/* properties grid */}
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
          liked={false} // TODO: check implementation
          membership={"Certified" as Membership} // TODO: check database
          monthlyAmount={listing.monthly_amount as number}
          paymentStructure={"Bi-Annually" as PaymentStructure} // TODO: check database
          propertyDescription={listing.description as string}
          price={4000} // TODO: check database
          rating={4.5} // TODO: check database
          ratingCount={105} // TODO: check database
          deal={"Best Value" as Deal} // TODO: check database
          showNotViewed
          isViewed={idx === 5 || idx === 3 || idx === 7 ? false : true}
        />
      ))}
    </>
  );
};

export default BeTheFirstToKnow;
