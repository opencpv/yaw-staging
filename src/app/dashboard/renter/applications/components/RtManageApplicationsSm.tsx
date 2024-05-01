"use client";

import React, { useState } from "react";
import RtApplicationRowSm from "./RtApplicationRowSm";
import { useFetchTableWithInfiniteScroll } from "@/lib/custom-hooks/useFetch";
import TableSkeletonSm from "../../../components/shared/skeleton/TableSkeletonSm";
import ButtonInfiniteLoading from "@/components/__shared/ui/data_fetching/ButtonInfiniteLoading";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import FetchErrorMessage from "@/components/__shared/ui/data_fetching/FetchErrorMessage";
import { TableSm } from "../../../components/shared/table/Table";
import { IoArchiveOutline } from "react-icons/io5";
import Button from "@/components/__shared/ui/button/Button";
import RtMobileFilters from "./RtMobileFilters";
import { RenterApplicationStatus } from "./RtApplicationStatus";

type Props = {};

type StatusFilter = "all" | "archived" | RenterApplicationStatus;
type DateFilter = "newest" | "oldest" | "last modified";

const RtManageApplicationsSm = (props: Props) => {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  const {
    data: applicants,
    error,
    isValidating,
    isLoading,
    loadMore,
  } = useFetchTableWithInfiniteScroll({
    tableName: "regular_application",
    pageSize: 5,
    order: { column: "created_at", ascending: false },
    select: "id, created_at, firstname, lastname",
  });

  return (
    <div className="flex flex-col gap-10 lg:hidden">
      <RtMobileFilters
        statusFilter={statusFilter}
        handleStatusSelectionChange={(e) =>
          setStatusFilter(e.target.value as StatusFilter)
        }
      />
      <FetchingStates
        data={applicants}
        error={error}
        isLoading={isLoading}
        isValidating={isValidating}
        isLoadingComponent={<TableSkeletonSm rows={4} />}
        errorComponent={<FetchErrorMessage specificData="applications" />}
        emptyStateComponent={
          <p className="mt-4 italic">There are no applications yet.</p>
        }
      />
      <TableSm className="flex-1">
        {applicants?.map((applicant, idx) => (
          <RtApplicationRowSm
            key={applicant.id as string}
            propertyTitle="Single Room"
            propertyImage="/assets/images/Stock.jpg"
            listerImage="/assets/images/profile-image.jpg"
            listerName={`${applicant.firstname} ${applicant.lastname}`}
            propertyPrice={30000}
            date={applicant.created_at as string}
            status={
              idx === 1 || idx === 9
                ? "accepted"
                : idx === 3 || idx === 12
                  ? "declined"
                  : idx === 0
                    ? "incomplete"
                    : "under review"
            }
          />
        ))}
      </TableSm>
      <div className="text-center">
        {isLoading && loadMore ? "Fetching..." : null}
      </div>
      <div className="grid place-items-center">
        <ButtonInfiniteLoading
          data={applicants}
          isLoading={isLoading}
          isValidating={isValidating}
          loadMore={loadMore}
        />
      </div>
    </div>
  );
};

export default RtManageApplicationsSm;
