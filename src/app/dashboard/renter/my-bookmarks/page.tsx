"use client";
import OptionFilterTabs from "@/components/__shared/ui/OptionFilterTabs";
import Select from "../../components/shared/ui/Select";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import ListingCard from "@/components/__shared/ui/listing/ListingCard";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import ContactPreferenceToggle from "../favourites/components/ContactPreferenceToggle";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useFetchRenterBookmarks } from "../services";
import { useAppStore } from "@/store/dashboard/AppStore";
import ButtonInfiniteLoading from "@/components/__shared/ui/data_fetching/ButtonInfiniteLoading";
import SomethingWentWrong from "@/components/__shared/ui/states/SomethingWentWrong";
import EmptyState from "@/components/__shared/ui/states/EmptyState";
import { getListingProps } from "@/lib/enum";

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
          emptyStateComponent={<EmptyState />}
        />
        {listings?.map((listing) => (
          <ListingCard
            key={listing.id}
            {...getListingProps(listing, user as UserType)}
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
