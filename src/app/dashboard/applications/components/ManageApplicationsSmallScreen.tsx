"use client";

import React from "react";
import ApplicationRow2 from "./ApplicationRow2";
import { useFetchTableWithInfiniteScroll } from "@/lib/custom-hooks/useFetch";
import TableMobileSkeleton from "../../components/shared/skeleton/TableMobileSkeleton";
import Button from "@/components/__shared/ui/data_fetching/ButtonInfiniteLoading";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import FetchErrorMessage from "@/components/__shared/ui/data_fetching/FetchErrorMessage";
import { TableSm } from "../../components/shared/table/Table";

type Props = {};

const ManageApplicationsSmallScreen = (props: Props) => {
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
    <div className="xl:hidden">
      <FetchingStates
        data={applicants}
        error={error}
        isLoading={isLoading}
        isValidating={isValidating}
        isLoadingComponent={<TableMobileSkeleton rows={4} />}
        errorComponent={<FetchErrorMessage specificData="applications" />}
        noDataMessageComponent={
          <p className="mt-4 italic">There are no applications yet.</p>
        }
      />
      <TableSm className="mb-10 mt-3 flex lg:flex xl:hidden">
        {applicants?.map((applicant) => (
          <ApplicationRow2
            key={applicant.id as string}
            propertyTitle="Single Room"
            propertyImage="/assets/images/Stock.jpg"
            applicantImage="/assets/images/profile-image.jpg"
            applicantName={`${applicant.firstname} ${applicant.lastname}`}
            propertyPrice={30000}
            date={applicant.created_at as string}
          />
        ))}
      </TableSm>
      <div className="text-center">
        {isLoading && loadMore ? "Fetching..." : null}
      </div>
      <div className="mb-20 flex justify-center">
        <Button
          data={applicants}
          isLoading={isLoading}
          isValidating={isValidating}
          loadMore={loadMore}
          noDataMessage="No more applications"
        />
      </div>
    </div>
  );
};

export default ManageApplicationsSmallScreen;
