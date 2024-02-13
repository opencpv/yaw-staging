"use client";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import listings from "@/enum/demodb/listings";
import demoimages from "@/enum/temp/images";
import LargeButton from "../../lister/properties/components/LargeButton";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { RxTarget } from "react-icons/rx";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import FetchErrorMessage from "@/components/__shared/ui/data_fetching/FetchErrorMessage";
import ListingCard from "@/components/__shared/listing/ListingCard";
import { useFetchTableWithInfiniteScroll } from "@/lib/custom-hooks/useFetch";
import { revalidationRule, fetchOrderRule } from "@/lib/utils/fetchRules";
import TargetedSearchCard, {
  TargetedSearchState,
} from "@/app/dashboard/renter/be-the-first-to-know/components/TargetedSearchCard";

let demo = [
  {
    state: "match",
  },
  {
    state: "no matches",
  },
  {
    state: "match",
  },
];

const BeTheFirstToKnow = () => {
  const data = [1];
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
      {demo?.map((listing, idx) => (
        <TargetedSearchCard
          property={{ image: images.niceHome, name: "" }}
          href="/dashboard/be-the-first-to-know/search-title-one"
          state={listing.state as TargetedSearchState}
          key={idx}
          count={90}
        />
      ))}
    </>
  );
};

export default BeTheFirstToKnow;
