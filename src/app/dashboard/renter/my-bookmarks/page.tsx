"use client";
import OptionFilterTabs from "@/components/__shared/OptionFilterTabs";
import Select from "../../components/shared/ui/Select";
import Button from "@/components/__shared/ui/data_fetching/ButtonInfiniteLoading";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import ListingCard from "@/components/__shared/listing/ListingCard";
import images from "@/enum/temp/images";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import FetchErrorMessage from "@/components/__shared/ui/data_fetching/FetchErrorMessage";
import { Switch } from "@nextui-org/react";
import Toggle from "@/components/ui/Toggle";
import ContactPreferenceToggle from "../../components/shared/favorites/ContactPreferenceToggle";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useFetchUserBookmarks } from "../services";
import { useAppStore } from "@/store/dashboard/AppStore";
import ButtonInfiniteLoading from "@/components/__shared/ui/data_fetching/ButtonInfiniteLoading";
import SomethingWentWrong from "@/app/components/SomethingWentWrong";
import EmptyState from "@/components/__shared/ui/EmptyState";

const MySearch = () => {
  const { user } = useAppStore();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const filter = searchParams?.get("filter") || "all";

  const {
    data: listings,
    error,
    isLoading,
    isValidating,
    loadMore,
    mutate,
  } = useFetchUserBookmarks({ filter, userId: user?.id as string });

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
          selectedKey={filter}
          onSelectionChange={(key) =>
            router.replace(
              `${pathname}?${new URLSearchParams({
                filter: key as string,
              })}`,
              {
                scroll: false,
              },
            )
          }
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
          value={filter as string}
          className="mx-0 w-60 font-bold"
          valueClassName="font-bold"
          variant="ghost"
          color="primary"
          handleSelectionChange={(e) =>
            router.replace(
              `${pathname}?${new URLSearchParams({
                filter: e.target.value,
              })}`,
              {
                scroll: false,
              },
            )
          }
        />
      </div>

      <h4 className="hidden capitalize md:block">
        {filter as React.ReactNode}
      </h4>

      <div className="mt-4">
        <ContactPreferenceToggle />
      </div>

      <section className="mx-auto grid grid-cols-1 justify-center gap-x-5 gap-y-16 transition-all md:grid-cols-2 lg:grid-cols-3">
        <FetchingStates
          data={listings}
          error={error}
          isLoading={isLoading}
          // isValidating={isValidating}
          isLoadingComponent={<SkeletonListing count={3} />}
          errorComponent={
            <SomethingWentWrong
              className="h-fit"
              onTryAgain={() => {
                mutate();
              }}
            />
          }
          emptyStateComponent={<EmptyState paddingBlock="sm" />}
        />
        {listings?.map((listing) => (
          <ListingCard
            cardType="2"
            propertyId={listing.id as number}
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
            images={images} // TODO: check database
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
