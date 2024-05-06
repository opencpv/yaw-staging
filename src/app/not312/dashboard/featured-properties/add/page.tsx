"use client";
import PropertiesEmptyState from "@/app/properties/components/PropertiesEmptyState";
import {
  useFetchFeaturedListings,
  useFetchProperties,
} from "@/app/properties/services";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import ListingCard from "@/components/__shared/ui/listing/ListingCard";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import SomethingWentWrong from "@/components/__shared/ui/states/SomethingWentWrong";
import { getListingProps } from "@/lib/enum";
import { useAppStore } from "@/store/dashboard/AppStore";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Pagination } from "antd";

const AddProperty = () => {
  const searchParams = useSearchParams();
  const search = searchParams?.get("search") || "";
  const tag = searchParams?.get("tag") || "all";
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [pageSize] = useState(3); // Number of items per page
  const [totalPages, setTotalPages] = useState(0); // Total number of pages
  const [featuredIdList, setfeaturedIdList] = useState<number[]>([]);
  const { user } = useAppStore();
  const {
    data: listings,
    error,
    isLoading,
    isValidating,
    mutate,
  } = useFetchProperties({ searchString: search as string, filter: tag });
  const {
    data: featured,
    error: featuredError,
    isLoading: featuredLoading,
    mutate: mutateFeatured,
  } = useFetchFeaturedListings();

  useEffect(() => {
    if (listings) {
      const listingsNumber = listings.length;
      const pages = Math.ceil(listingsNumber / pageSize);
      setTotalPages(pages);
    }
  }, [featured, isLoading, listings, pageSize]);

  useEffect(() => {
    if (featured) {
      const idList = featured.map((listing: any) => listing.id);
      setfeaturedIdList(idList);
      console.log(idList);
    }
  }, [featured, featuredLoading]);

  const handleViewSimilarResults = () => {
    router.replace(
      `/properties?${new URLSearchParams({
        search: "Accra",
        tag: "all",
      })}`,
      {
        scroll: false,
      },
    );
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedListings = listings?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  return (
    <div className="h-[100vh] overflow-y-scroll p-8">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-3xl font-bold text-slate-800">
          Add Featured Properties
        </h2>
        <Link href={"not312/dashboard/featured-properties"}>
          <Button color="danger">Back</Button>
        </Link>
      </div>
      <section className="listing-grid">
        <FetchingStates
          data={paginatedListings}
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
          emptyStateComponent={
            <PropertiesEmptyState onClick={handleViewSimilarResults} />
          }
        />
        {paginatedListings?.map((listing: any) => (
          <div key={listing.id}>
            <ListingCard {...getListingProps(listing, user as UserType)} />
            <Button
              className="w-full"
              color={listing.id in featuredIdList ? "warning" : "primary"}
              onClick={() => {
                console.log(featuredIdList);
              }}
            >
              {listing.id in featuredIdList ? "Remove Listing" : "Add Listing"}
            </Button>
          </div>
        ))}
      </section>
      {totalPages > 0 && (
        <div className="mt-6 flex justify-center">
          <Pagination
            current={currentPage}
            total={listings?.length || 0}
            pageSize={pageSize}
            onChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default AddProperty;
