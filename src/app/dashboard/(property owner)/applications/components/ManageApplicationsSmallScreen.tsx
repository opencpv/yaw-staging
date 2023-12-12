"use client";

import React from "react";
import ApplicationRow2 from "./ApplicationRow2";
import { useFetchTableWithInfiniteScroll } from "@/lib/custom-hooks/useFetch";
import TableMobileSkeleton from "../../../components/shared/skeleton/TableMobileSkeleton";
import Button from "@/components/__shared/ui/data_fetchting/ButtonInfiniteLoading";
import FetchingStates from "@/components/__shared/ui/data_fetchting/FetchingStates";

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
    <div className="lg:hidden">
      <FetchingStates
        data={applicants}
        error={error}
        isLoading={isLoading}
        isValidating={isValidating}
        isLoadingComponent={<TableMobileSkeleton rows={4} />}
        errorComponent={<p>Error: Something went wrong while fetching</p>}
        noDataMessageComponent={
          <p className="italic mt-4">There are no applications yet.</p>
        }
      />
      <section className="mt-3 mb-10 space-y-5">
        {applicants?.map((applicant) => (
          <ApplicationRow2
            key={applicant.id as string}
            propertyTitle="Property Title"
            propertyImage="/assets/images/Stock.jpg"
            applicantImage="/assets/images/profile-image.jpg"
            applicantName={`${applicant.firstname} ${applicant.lastname}`}
            propertyPrice={30000}
            date={applicant.created_at as string}
          />
        ))}
      </section>
      <div className="text-center">
        {isLoading && loadMore ? "Fetching..." : null}
      </div>
      <div className="flex justify-center mb-20">
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
