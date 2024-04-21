"use client";
import OptionFilterTabs from "@/components/__shared/OptionFilterTabs";
import Select from "../../components/shared/ui/Select";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import ListingCard from "@/components/__shared/listing/ListingCard";
import images from "@/enum/temp/images";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import ContactPreferenceToggle from "../../components/shared/favorites/ContactPreferenceToggle";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useFetchRenterBookmarks } from "../services";
import { useAppStore } from "@/store/dashboard/AppStore";
import ButtonInfiniteLoading from "@/components/__shared/ui/data_fetching/ButtonInfiniteLoading";
import SomethingWentWrong from "@/app/components/SomethingWentWrong";
import EmptyState from "@/components/__shared/ui/EmptyState";

const MySearch = () => {
  const { user } = useAppStore();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const filter = searchParams?.get("filter") || "favourites";

  const {
    data: listings,
    error,
    isLoading,
    isValidating,
    loadMore,
    mutate,
  } = useFetchRenterBookmarks({ filter, userId: user?.id as string });

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

      <section className="mx-auto mt-10 grid grid-cols-1 justify-center gap-x-5 gap-y-16 transition-all md:grid-cols-2 lg:grid-cols-3">
        <FetchingStates
          data={listings}
          error={error}
          isLoading={isLoading}
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
    </main>
  );
};

export default MySearch;
