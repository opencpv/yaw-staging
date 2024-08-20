"use client";
import React from "react";
import OptionFilterTabs from "@/components/__shared/ui/OptionFilterTabs";
import Select from "@/app/dashboard/components/shared/ui/Select";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import ContactPreferenceToggle from "../../../../components/shared/ui/ContactPreferenceToggle";
import { useRouter } from "next/navigation";
import { useFetchRenterBookmarks } from "../../services";
import { useAppStore } from "@/store/dashboard/AppStore";
import { getListingProps, Listing } from "@/lib/enum";
import slugify from "@/lib/utils/slugify";
import { unslugify } from "@/lib/utils/stringManipulation";
import dynamic from "next/dynamic";
const NoSearchEmptyState = dynamic(() => import("../NoSearchEmptyState"));
const ListingCard = dynamic(
  () => import("@/components/__shared/ui/listing/ListingCard"),
);
const ButtonInfiniteLoading = dynamic(
  () => import("@/components/__shared/ui/data_fetching/ButtonInfiniteLoading"),
);

const MySearch = ({ filter }: { filter: string }) => {
  const { user } = useAppStore();
  const router = useRouter();
  const [page, setPage] = React.useState(slugify(filter));

  const {
    data: listings,
    error,
    isLoading,
    isValidating,
    loadMore,
  } = useFetchRenterBookmarks({ filter: page, userId: user?.id as string });

  return (
    <main className="flex w-full flex-col gap-8 bg-white">
      <h2>My Search</h2>
      {/* xl and above */}
      <OptionFilterTabs
        options={["All", "Recommendations", "Recently Viewed"]}
        selectedKey={unslugify(page)}
        onSelectionChange={(key) => {
          const slug = slugify(key.toString());
          setPage(key.toString());
          router.replace(`/dashboard/renter/my-search/${slug}`, {
            scroll: false,
          });
        }}
        radius="small"
        tabColor="colored"
        cursorAnimation
        classNames={{ base: "max-md:hidden" }}
      />
      {/* xl and below */}
      <div className="md:hidden">
        <Select
          options={["All", "Recommendations", "Recently Viewed"]}
          value={unslugify(page)}
          className="mx-0 w-60 font-bold"
          valueClassName="font-bold"
          variant="default"
          color="primary"
          handleSelectionChange={(e) => {
            const slug = slugify(e.target.value);
            setPage(e.target.value);
            router.replace(`/dashboard/renter/my-search/${slug}`, {
              scroll: false,
            });
          }}
        />
      </div>

      <h4 className="hidden capitalize md:block">
        {filter.replaceAll("-", " ")}
      </h4>

      <div className="relative bottom-4">
        <ContactPreferenceToggle />
      </div>

      <section className="listing-grid relative bottom-10">
        <FetchingStates
          data={listings}
          error={error}
          isLoading={isLoading}
          isLoadingComponent={<SkeletonListing count={3} />}
          emptyStateComponent={<NoSearchEmptyState page={page} />}
        />
        {listings?.map((listing) => (
          <ListingCard
            key={listing.id}
            {...getListingProps(listing as Partial<Listing>, user as UserType)}
          />
        ))}
      </section>
      <ButtonInfiniteLoading
        data={listings}
        isLoading={isLoading}
        isValidating={isValidating}
        loadMore={loadMore}
      />
    </main>
  );
};

export default MySearch;
