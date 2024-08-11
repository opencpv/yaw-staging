"use client";

import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import Button from "@/components/__shared/ui/button/Button";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";
import { cn } from "@/lib/utils";
import CallOut from "@/components/__shared/ui/CallOut";
import { pluralize } from "@/lib/utils/stringManipulation";
import { useFetchAllListerProperties } from "./services";
import { useAppStore } from "@/store/dashboard/AppStore";
import {
  Table,
  TableBody,
  TableBodyRow,
  TableBodyRowGroup,
  TableHeader,
  TableHeaderRow,
  TableSm,
} from "../../components/shared/table/Table";
import ArchivedButton from "../../components/shared/table/Archived";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import TableSkeleton from "../../components/shared/skeleton/TableSkeleton";
import React from "react";
import PropertyRow from "./components/PropertyRow";

const ManageProperties = () => {
  const { user } = useAppStore();
  const {
    data: listings,
    error,
    isLoading,
  } = useFetchAllListerProperties({ listerId: user?.id as string });


  return (
    <main className="pb-40">
      <section className="mb-6 flex flex-col gap-5">
        <h2>My Listings</h2>
        <CallOut
          content="Members post for free"
        />
        {listings && listings?.length > 0 ? (
          <small className="inline-block capitalize">
            Showing {listings.length} {pluralize("Item", listings.length)}
          </small>
        ) : null}
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
            <TableHeader className="col-span-1">{" "}</TableHeader>
          </TableHeaderRow>
          <TableBodyRowGroup>
            <FetchingStates
              data={listings}
              error={error}
              isLoading={isLoading}
              isLoadingComponent={<TableSkeleton rows={1} columns={5} />}
              emptyStateComponent={<ListingEmptyState />}
            />

            {listings?.map((listing) => <PropertyRow key={listing.id} listing={listing} />)}
          </TableBodyRowGroup>
        </Table>

        {/* MOBILE VIEW */}
        <TableSm>{listings?.map((item) => <React.Fragment key={item.id}></React.Fragment>)}</TableSm>
      </div>
      <ArchivedButton />
    </main>
  );
};

export default ManageProperties;

const ListingEmptyState = () => {
  const { images } = useAssets();

  return (
    <div className="flex justify-center lg:mt-20">
      <div className="flex flex-col items-center gap-6">
        <Image
          src={images.Clipboard}
          alt="clipboard"
          width={250}
          className="w-[150px] sm:w-[250px]"
        />
        <p className="text-2xl font-semibold text-neutral-600">No item Added</p>
        <Button
          href={`/dashboard/lister/overview/create`}
          color="primary"
        >
          Add New Item
        </Button>
      </div>
    </div>
  );
};
