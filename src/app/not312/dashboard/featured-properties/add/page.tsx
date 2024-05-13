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
import supabase from "@/lib/utils/supabase/supabaseClient";
import { pages } from "next/dist/build/templates/app-page";

const AddProperty = () => {
  const searchParams = useSearchParams();
  const search = searchParams?.get("search") || "";
  const tag = searchParams?.get("tag") || "all";
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [pageSize] = useState(3); // Number of items per page
  const [totalPages, setTotalPages] = useState(0); // Total number of pages
  const [loading, setLoading] = useState(false);
  const { user } = useAppStore();
  const [buttonIndex, setbuttonIndex] = useState<number>();
  const [propertyIdx, setPropertyIdx] = useState<number[]>([]);
  const removeFeatured = async (id: number) => {
    const { data, error } = await supabase
      .from("featured_properties")
      .delete()
      .eq("property_id", id);
    if (error) {
      // console.log("error removing listing");
      setLoading(false);
      return;
    }
    setLoading(false);
  };

  const addFeaturedItem = async (id: number) => {
    const { data, error } = await supabase
      .from("featured_properties")
      .insert({ property_id: id })
      .select();
    if (error) {
      console.log("error removing listing");
      setLoading(false);
      return;
    }
    setLoading(false);
  };

  const {
    data: listings,
    error,
    isLoading,
    mutate,
  } = useFetchProperties({ searchString: search as string, filter: tag });

  const {
    data: featured,
    error: featuredError,
    isLoading: featuredLoading,
    mutate: mutateFeatured,
  } = useFetchFeaturedListings();

  const featuredListingIdArray =
    featured?.map((listing: any) => listing.id) || [];

  useEffect(() => {
    if (listings) {
      const listingsNumber = listings.length;
      const pages = Math.ceil(listingsNumber / pageSize);
      setTotalPages(pages);
    }
  }, [listings, pageSize]);

  useEffect(() => {
    if (featured) {
      const featuredListingIdArray =
        featured?.map((listing: any) => listing.id) || [];

      setPropertyIdx(() => featuredListingIdArray);
    }
  }, [featured]);

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
        <Link href={"/not312/dashboard/featured-properties"}>
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
                mutateFeatured();
              }}
            />
          }
          emptyStateComponent={
            <PropertiesEmptyState onClick={handleViewSimilarResults} />
          }
        />
        {paginatedListings?.map((listing: any, index) => (
          <div key={listing.id}>
            <ListingCard {...getListingProps(listing, user as UserType)} />

            <Button
              className="w-full"
              isLoading={loading && buttonIndex == index}
              color={propertyIdx.includes(listing.id) ? "primary" : "default"}
              onClick={() => {
                setbuttonIndex(() => index);
                setLoading(() => true);
                if (propertyIdx.includes(listing.id)) {
                  removeFeatured(listing.id);
                  mutateFeatured();
                  mutate();
                } else {
                  addFeaturedItem(listing.id);
                  mutate();
                  mutateFeatured();
                }
              }}
            >
              {featuredListingIdArray.includes(listing.id)
                ? "Remove Listing"
                : "Add Listing"}
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
