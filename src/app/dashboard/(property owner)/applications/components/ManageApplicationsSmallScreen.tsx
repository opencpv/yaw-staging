"use client";

import React from "react";
import ApplicationRow2 from "./ApplicationRow2";
import { useFetchTableWithInfiniteScroll } from "@/lib/custom-hooks/useFetch";
import TableMobileSkeleton from "../../../components/shared/skeleton/TableMobileSkeleton";
import Button from "@/components/__shared/Button";

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
      {isLoading ? (
        <TableMobileSkeleton rows={4} />
      ) : (
        error && <p>Error: Something went wrong while fetching</p>
      )}
      {isValidating === false && !error && applicants?.length === 0 && (
        <p className="italic mt-4">There are no applications yet.</p>
      )}
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
        {isLoading ? null : (
          <Button
            onClick={() => loadMore && loadMore()}
            className={`${
              loadMore === null
                ? "bg-neutral-300 text-neutral-600 cursor-not-allowed"
                : "bg-accent-50 text-white"
            } ${
              isLoading || (applicants?.length === 0 && "hidden")
            } rounded-xl font-[600] p-2 px-5`}
            disabled={loadMore === null ? true : false}
          >
            {isValidating
              ? "Loading More..."
              : loadMore
              ? "Load More"
              : "No more applications"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ManageApplicationsSmallScreen;
