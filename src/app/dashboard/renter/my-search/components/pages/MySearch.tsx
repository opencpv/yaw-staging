"use client";
import React from "react";
import { Tabs } from "@/components/__shared/ui/tabs";
import { Select } from "@/components/__shared/ui/form/select";
import FetchingStates from "@/components/__shared/ui/data_fetching/fetching-states/fetching-states";
import SkeletonListing from "@/components/__shared/ui/skeleton/skeleton-listing";
import ContactPreferenceToggle from "../../../../components/shared/ui/ContactPreferenceToggle";
import { useRouter } from "next/navigation";
import { useFetchRenterBookmarks } from "../../services";
import { useAppStore } from "@/store/dashboard/AppStore";
import { getListingProps, Listing } from "@/lib/enum";
import slugify from "@/lib/utils/slugify";
import capitalizeName, { unslugify } from "@/lib/utils/stringManipulation";
import dynamic from "next/dynamic";
const NoSearchEmptyState = dynamic(() => import("../NoSearchEmptyState"));
const ListingCard = dynamic(
  () => import("@/components/__shared/ui/listing/listing-card"),
);
const ButtonInfiniteLoading = dynamic(
  () =>
    import("@/components/__shared/ui/data_fetching/button-infinite-loading"),
);

const options = ["All", "Recommendations", "Recently Viewed"];

const MySearch = ({ filter }: { filter: string }) => {
  const { user } = useAppStore();
  const router = useRouter();
  const [page, setPage] = React.useState(slugify(filter));
  const selected = capitalizeName(unslugify(page));

  const {
    data: listings,
    error,
    isLoading,
    isValidating,
    loadMore,
  } = useFetchRenterBookmarks({ filter: page, userId: user?.id as string });

  const handleChange = (value: string) => {
    const slug = slugify(value);
    setPage(value);
    router.replace(`/dashboard/renter/my-search/${slug}`, {
      scroll: false,
    });
  };

  return (
    <main className="flex w-full flex-col gap-8 bg-white">
      <h2>My Search</h2>
      {/* xl and above */}
      <Tabs
        options={options}
        selectedKey={selected}
        onSelectionChange={handleChange}
        className="max-md:hidden"
      />
      {/* xl and below */}
      <div className="md:hidden">
        <Select
          options={options}
          value={selected}
          color="primary"
          onValueChange={handleChange}
        />
      </div>

      <h4 className="hidden capitalize md:block">{unslugify(filter)}</h4>

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
