"use client";
import React, { useEffect } from "react";
import OptionFilterTabs from "@/components/__shared/ui/OptionFilterTabs";
import Select from "../../../../components/shared/ui/Select";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import ListingCard from "@/components/__shared/ui/listing/ListingCard";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import ContactPreferenceToggle from "../../../../../(archived)/_favourites/components/ContactPreferenceToggle";
import { useRouter } from "next/navigation";
import { useFetchRenterBookmarks } from "../../../services";
import { useAppStore } from "@/store/dashboard/AppStore";
import ButtonInfiniteLoading from "@/components/__shared/ui/data_fetching/ButtonInfiniteLoading";
import SomethingWentWrong from "@/components/__shared/ui/states/SomethingWentWrong";
import EmptyState from "@/components/__shared/ui/states/EmptyState";
import { getListingProps } from "@/lib/enum";
import slugify from "@/lib/utils/slugify";
import { create } from "zustand";

const filterStore = create<{ page: string; setPage: (page: string) => void }>(
  (set) => ({
    page: "all",
    setPage: (page) => set({ page }),
  }),
);

const MySearch = ({ filter }: { filter: string }) => {
  const { user } = useAppStore();
  const router = useRouter();
  const { page, setPage } = filterStore();

  useEffect(() => {
    setPage(filter);
  }, [filter, setPage]);

  const {
    data: listings,
    error,
    isLoading,
    isValidating,
    loadMore,
    mutate,
  } = useFetchRenterBookmarks({ filter, userId: user?.id as string });

  return (
    <main className="w-full space-y-8 bg-white">
      <h2>My Search</h2>
      {/* xl and above */}
      <OptionFilterTabs
        options={["Favourites", "Recommendations", "All"]}
        selectedKey={page.replaceAll("-", " ")}
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
          options={["Favourites", "Recommendations", "All"]}
          value={page.replaceAll("-", " ")}
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

      <section className="listing-grid">
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
