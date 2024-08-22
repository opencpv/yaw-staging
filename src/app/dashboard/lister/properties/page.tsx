"use client";

import { cn } from "@/lib/utils";
import CallOut from "@/components/__shared/ui/callout";
import { pluralize } from "@/lib/utils/stringManipulation";
import { useFetchAllListerProperties } from "./services";
import { useAppStore } from "@/store/dashboard/AppStore";
import {
  Table,
  TableBodyRowGroup,
  TableHeader,
  TableHeaderRow,
  TableSm,
} from "@/components/__shared/ui/table";
import ArchivedButton from "@/components/__shared/ui/table/archived-button";
import FetchingStates from "@/components/__shared/ui/data_fetching/fetching-states";
import TableSkeleton from "@/components/__shared/ui/skeleton/skeleton-table";
import React, { useState } from "react";
import PropertyRow from "./components/PropertyRow";
import PropertyRowMobile from "./components/PropertyRowMobile";
import TableSkeletonSm from "@/components/__shared/ui/skeleton/skeleton-table-mobile";
import { FaPlus } from "react-icons/fa6";
import OptionFilterTabs from "@/components/__shared/ui/tabs";
import dynamic from "next/dynamic";
import Pagination, { usePagination } from "@/components/__shared/ui/pagination";
const EmptyState = dynamic(() => import("./components/EmptyState"));

const ListingModal = dynamic(
  () => import("../overview/components/steps/ListingModal"),
);

const ManageProperties = () => {
  const { user } = useAppStore();
  const [status, setStatus] = useState("all");
  const [showArchived, setShowArchived] = useState(false);
  const {
    data: listings,
    error,
    isLoading,
  } = useFetchAllListerProperties({
    listerId: user?.id as string,
    status,
    archived: showArchived,
  });

  const {
    currentItems: paginatedListings,
    handlePageClick,
    pageCount,
    currentPage,
  } = usePagination({
    items: listings as Property[],
    variable: status,
  });

  const options = [
    "All",
    "Published",
    "Unpublished",
    "Incomplete",
    "Suspended",
  ];

  return (
    <main className="pb-40">
      <section className="mb-6 flex flex-col gap-5">
        <h2>My Listings</h2>
        <CallOut content="Members post for free" />
        <div className="flex flex-col gap-8">
          <ListingModal className="flex w-fit items-center gap-2 rounded-md bg-primary p-3 px-5 text-white">
            <FaPlus />
            Create New Listing
          </ListingModal>
          <div className="flex flex-col gap-5">
            <h3>Manage Properties</h3>
            <div className="hidden-scrollbar flex items-center justify-between gap-5 overflow-x-auto">
              <OptionFilterTabs
                options={options}
                selectedKey={status}
                onSelectionChange={(selection) => {
                  setStatus(selection as string);
                }}
                radius="small"
                tabColor="colored"
                classNames={{
                  tabList: "flex-nowrap",
                }}
              />
              <ArchivedButton
                className="max-lg:hidden"
                onClick={() => setShowArchived(!showArchived)}
                showingArchived={showArchived}
              />
            </div>
            {paginatedListings?.length ? (
              <small className="inline-block capitalize">
                Showing {paginatedListings.length}{" "}
                {pluralize("Item", paginatedListings.length)}
              </small>
            ) : null}
          </div>
        </div>
      </section>

      {/* DESKTOP VIEW */}
      <div className="flex flex-col gap-8">
        <Table className={cn("min-h-[35rem]")}>
          <TableHeaderRow className="grid-cols-12">
            <TableHeader className="col-span-4">Property</TableHeader>
            <TableHeader className="col-span-2">Date Created</TableHeader>
            <TableHeader className="col-span-3">Published</TableHeader>
            <TableHeader className="col-span-2">Status</TableHeader>
            <TableHeader className="col-span-1"> </TableHeader>
          </TableHeaderRow>
          <TableBodyRowGroup>
            <FetchingStates
              data={paginatedListings}
              error={error}
              isLoading={isLoading}
              isLoadingComponent={<TableSkeleton rows={1} columns={5} />}
              emptyStateComponent={<EmptyState />}
            />

            {paginatedListings?.map((listing) => (
              <PropertyRow
                key={listing.id}
                listing={listing as unknown as Property}
              />
            ))}
          </TableBodyRowGroup>
        </Table>

        {/* MOBILE VIEW */}
        <TableSm>
          <FetchingStates
            data={paginatedListings}
            error={error}
            isLoading={isLoading}
            isLoadingComponent={<TableSkeletonSm rows={2} />}
            emptyStateComponent={<EmptyState />}
          />
          {paginatedListings?.map((listing) => (
            <PropertyRowMobile
              key={listing.id}
              listing={listing as unknown as Property}
            />
          ))}
        </TableSm>
      </div>
      <ArchivedButton
        className="lg:hidden"
        onClick={() => setShowArchived(!showArchived)}
        showingArchived={showArchived}
      />
      <Pagination
        handlePageClick={handlePageClick}
        pageCount={pageCount}
        forcePage={currentPage}
      />
    </main>
  );
};

export default ManageProperties;
