"use client";

import Button from "@/components/__shared/ui/button/Button";
import { cn } from "@/lib/utils";
import CallOut from "@/components/__shared/ui/CallOut";
import { pluralize } from "@/lib/utils/stringManipulation";
import { useFetchAllListerProperties } from "./services";
import { useAppStore } from "@/store/dashboard/AppStore";
import {
  Table,
  TableBodyRowGroup,
  TableHeader,
  TableHeaderRow,
  TableSm,
} from "../../components/shared/table/Table";
import ArchivedButton from "../../components/shared/table/Archived";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import TableSkeleton from "../../components/shared/skeleton/TableSkeleton";
import React, { useState } from "react";
import PropertyRow from "./components/PropertyRow";
import PropertyRowMobile from "./components/PropertyRowMobile";
import TableSkeletonSm from "../../components/shared/skeleton/TableSkeletonSm";
import { FaPlus } from "react-icons/fa6";
import OptionFilterTabs from "@/components/__shared/ui/OptionFilterTabs";
import EmptyState from "./components/EmptyState";
import dynamic from "next/dynamic";

const ListingModal = dynamic(() => import("../overview/components/steps/ListingModal")); 

const ManageProperties = () => {
  const { user } = useAppStore();
  const [status, setStatus] = useState("all");
  const [showArchived, setShowArchived] = useState(false);
  const {
    data: listings,
    error,
    isLoading,
  } = useFetchAllListerProperties({ listerId: user?.id as string, status, archived: showArchived });

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
          <ListingModal className="bg-primary flex items-center gap-2 w-fit text-white p-3 px-5 rounded-md">
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
              <ArchivedButton className="max-lg:hidden" onClick={() => setShowArchived(!showArchived)} showingArchived={showArchived} />
            </div>
            {listings?.length ? (
              <small className="inline-block capitalize">
                Showing {listings.length} {pluralize("Item", listings.length)}
              </small>
            ) : null}
          </div>
        </div>
      </section>

      {/* DESKTOP VIEW */}
      <div className="flex flex-col gap-8">
        <Table
          className={cn({
            "min-h-[35rem]": listings && listings?.length > 3,
          })}
        >
          <TableHeaderRow className="grid-cols-6">
            <TableHeader className="col-span-2">Property</TableHeader>
            <TableHeader className="col-span-1">Date Created</TableHeader>
            <TableHeader className="col-span-1">Published</TableHeader>
            <TableHeader className="col-span-1">Status</TableHeader>
            <TableHeader className="col-span-1"> </TableHeader>
          </TableHeaderRow>
          <TableBodyRowGroup>
            <FetchingStates
              data={listings}
              error={error}
              isLoading={isLoading}
              isLoadingComponent={<TableSkeleton rows={1} columns={5} />}
              emptyStateComponent={<EmptyState />}
            />

            {listings?.map((listing) => (
              <PropertyRow key={listing.id} listing={listing as unknown as Property} />
            ))}
          </TableBodyRowGroup>
        </Table>

        {/* MOBILE VIEW */}
        <TableSm>
          <FetchingStates
            data={listings}
            error={error}
            isLoading={isLoading}
            isLoadingComponent={<TableSkeletonSm rows={2} />}
            emptyStateComponent={<EmptyState />}
          />
          {listings?.map((listing) => (
            <PropertyRowMobile key={listing.id} listing={listing as unknown as Property} />
          ))}
        </TableSm>
      </div>
      <ArchivedButton className="lg:hidden" onClick={() => setShowArchived(!showArchived)} showingArchived={showArchived} />
    </main>
  );
};

export default ManageProperties;
