"use client";
import OptionFilterTabs from "@/components/__shared/OptionFilterTabs";
import Select from "../../components/shared/ui/Select";
import Button from "@/components/__shared/ui/data_fetching/ButtonInfiniteLoading";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import ListingCard from "@/components/__shared/listing/ListingCard";
import { revalidationRule, fetchOrderRule } from "@/lib/utils/fetchRules";
import { useFetchTableWithInfiniteScroll } from "@/lib/custom-hooks/useFetch";
import images from "@/enum/temp/images";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import FetchErrorMessage from "@/components/__shared/ui/data_fetching/FetchErrorMessage";
import { useMySearchFilterStore } from "@/store/dashboard/mySearchStore";
import { Switch } from "@nextui-org/react";
import Toggle from "@/components/ui/Toggle";
import ContactPreferenceToggle from "../favourites/components/ContactPreferenceToggle";

const MySearch = () => {
  // const { value, handleSelectionChange } = useSelectDisclosure<
  //   "favourites" | "be the first to know" | "listing" | "all"
  // >("favourites");

  const { activePage, setActivePage } = useMySearchFilterStore();

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
    <main className="w-full bg-white">
      <h2>My Bookmarks</h2>
      {/* xl and above */}
      <div className="my-8 hidden w-fit rounded-xl border p-3 md:block">
        <OptionFilterTabs
          options={[
            "Favourites",
            "Be the first to know",
            "Recommendations",
            "All",
          ]}
          selectedKey={activePage}
          onSelectionChange={(page) => setActivePage(page)}
          radius="large"
          padding="wide"
          cursorAnimation
        />
      </div>
      {/* xl and below */}
      <div className="my-8 md:hidden">
        <Select
          options={[
            "Favourites",
            "Be the first to know",
            "Recommendations",
            "All",
          ]}
          value={activePage as string}
          className="mx-0 w-60 font-bold"
          valueClassName="font-bold"
          variant="ghost"
          color="primary"
          handleSelectionChange={(e) => setActivePage(e.target.value)}
        />
      </div>

      <h4 className="hidden capitalize md:block">
        {activePage as React.ReactNode}
      </h4>

      <div className="mt-4">
        <ContactPreferenceToggle />
      </div>

      <section className="mx-auto my-10 grid grid-cols-1 justify-center gap-x-5 gap-y-16 transition-all md:grid-cols-2 lg:grid-cols-3">
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
        {listings?.map((listing) => (
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
            images={images} // TODO: check database
            liked={false} // TODO: check implementation
            guarantee={"Certified" as GuaranteeTag} // TODO: check database
            monthlyAmount={listing.monthly_amount as number as number}
            paymentStructure={"Bi-Annually" as PaymentStructure} // TODO: check database
            propertyDescription={listing.description as string}
            rating={4.5} // TODO: check database
            ratingCount={105} // TODO: check database
            hint={"Best Value" as HintTag} // TODO: check database
          />
        ))}
      </section>
      <div className="flex justify-center">
        <Button
          data={listings}
          isLoading={isLoading}
          isValidating={isValidating}
          loadMore={loadMore}
        />
      </div>

      {/* Bookmarks code, may be needed */}
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
      {/* <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing) => (
            <ListingCard2
              key={listing.id}
              href={listing.href}
              images={listing.images}
              liked={listing.liked}
              guarantee={listing.membership as GuaranteeTag}
              monthlyAmount={listing.monthlyAmount}
              paymentStructure={listing.paymentStructure as PaymentStructure}
              propertyDescription={listing.propertyDescription}
              price={listing.price}
              propertyName={listing.propertyName}
              rating={listing.rating}
              ratingCount={listing.ratingCount}
              hint={listing.deal as HintTag}
            />
          ))}
        </div> */}
    </main>
  );
};

export default MySearch;

// NOT APPLICABLE ANY  //

// const MySearch = () => {
//   return (
//     <main className="mt-[-20px] w-full bg-my-search-bg bg-cover  bg-center px-8 pb-36">
//       <h1 className="pb-12 pt-24 text-4xl font-semibold text-white">
//         My Search
//       </h1>
//       <section className="grid  gap-[28px] md:grid-cols-1 lg:grid-cols-3">
//         <div className="flex aspect-square w-full  flex-col  items-center justify-center rounded-lg bg-black  bg-opacity-30 px-4 text-white shadow-inner lg:px-[115px]">
//           <p className="mb-3 text-3xl font-semibold">Bookmarks</p>
//           <p className="mb-8 text-justify text-base">
//             Lorem ipsum dolor sit amet consectetur. Quisque neque et metus
//             lectus proin et vestibulum. Vitae faucibus nulla egestas.
//           </p>
//           <Link href="/link" className="w-full rounded-lg   bg-secondary-400 py-4">
//             <div className="flex flex-row items-center justify-center gap-2">
//               <p>Explore</p>
//               <IoArrowForward />
//             </div>
//           </Link>
//         </div>
//         <div className="relative flex aspect-square w-full flex-col items-center  justify-center overflow-hidden rounded-lg bg-black  bg-opacity-30 px-4 text-white shadow-inner lg:px-[115px]">
//           <p className="absolute -left-8 top-8 -rotate-[30deg] bg-[#B0E3C9] px-24 py-[10px] text-black shadow-md">
//             Free Trial Limited
//           </p>
//           <p className="mb-3 text-3xl font-semibold">Be The First To Know</p>
//           <p className="mb-8 text-justify text-base">
//             Lorem ipsum dolor sit amet consectetur. Quisque neque et metus
//             lectus proin et vestibulum. Vitae faucibus nulla egestas.
//           </p>
//           <Link
//             href="my-search/be-the-first-to-know"
//             className="w-full rounded-lg   bg-secondary-400 py-4"
//           >
//             <div className="flex flex-row items-center justify-center gap-2">
//               <p>Explore</p>
//               <IoArrowForward />
//             </div>
//           </Link>
//         </div>
//         <div className="relative flex aspect-square w-full flex-col items-center  justify-center overflow-hidden rounded-lg bg-black  bg-opacity-30 px-4 text-white shadow-inner lg:px-[115px]">
//           <p className="absolute -left-8 top-8 -rotate-[30deg] bg-[#E9515E] px-28 py-[10px] text-white shadow-md">
//             Upgrade
//           </p>
//           <p className="mb-3 text-3xl font-semibold">Be My Agent</p>
//           <p className="mb-8 text-justify text-base">
//             Lorem ipsum dolor sit amet consectetur. Quisque neque et metus
//             lectus proin et vestibulum. Vitae faucibus nulla egestas.
//           </p>
//           <Link href="/link" className="w-full rounded-lg   bg-secondary-400 py-4">
//             <div className="flex flex-row items-center justify-center gap-2">
//               <p>Explore</p>
//               <IoArrowForward />
//             </div>
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default MySearch;
