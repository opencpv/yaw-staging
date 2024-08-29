"use client";

import React, { useState } from "react";
import RtApplicationRowSm from "./RtApplicationRowSm";
import TableSkeletonSm from "@/components/__shared/ui/skeleton/skeleton-table-mobile";
import ButtonInfiniteLoading from "@/components/__shared/ui/data_fetching/button-infinite-loading";
import FetchingStates from "@/components/__shared/ui/data_fetching/fetching-states";
import FetchErrorMessage from "@/components/__shared/ui/data_fetching/FetchErrorMessage";
import { TableSm } from "@/components/__shared/ui/table";
import RtMobileFilters from "./RtMobileFilters";
import { RenterApplicationStatus } from "./RtApplicationStatus";

type Props = {};

type StatusFilter = "all" | "archived" | RenterApplicationStatus;
type DateFilter = "newest" | "oldest" | "last modified";

const RtManageApplicationsSm = (props: Props) => {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  return (
    <div className="flex flex-col gap-10 lg:hidden">
      <RtMobileFilters
        statusFilter={statusFilter}
        handleStatusSelectionChange={(value) =>
          setStatusFilter(value as StatusFilter)
        }
      />
      {/* <FetchingStates
        data={applicants}
        error={error}
        isLoading={isLoading}
        isValidating={isValidating}
        isLoadingComponent={<TableSkeletonSm rows={4} />}
        errorComponent={<FetchErrorMessage specificData="applications" />}
        emptyStateComponent={
          <p className="mt-4 italic">There are no applications yet.</p>
        }
      /> */}
      {/* <TableSm className="flex-1">
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
      </TableSm> */}
      {/* <div className="text-center">
        {isLoading && loadMore ? "Fetching..." : null}
      </div>
      <ButtonInfiniteLoading
        data={applicants}
        isLoading={isLoading}
        isValidating={isValidating}
        loadMore={loadMore}
      /> */}
    </div>
  );
};

export default RtManageApplicationsSm;
