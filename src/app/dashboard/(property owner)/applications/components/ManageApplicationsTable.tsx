"use client";

import React from "react";
import ApplicationRow from "./ApplicationRow";
import { useFetchTableWithPagination } from "@/lib/custom-hooks/useFetch";
import TableSkeleton from "../../../components/shared/skeleton/TableSkeleton";
import Spinner from "../../../components/shared/Spinner";
import { useApplicationsStore } from "@/store/dashboard/applicationsStore";
import Pagination from "@/components/__shared/Pagination";

type Props = {};

const ManageApplicationsTable = (props: Props) => {
  let pageSize = 5;
  const setCount = useApplicationsStore((state) => state.setFetchCount);

  const {
    currentPage,
    nextPage,
    previousPage,
    error,
    isLoading,
    isValidating,
    totalCount,
  } = useFetchTableWithPagination({
    tableName: "regular_application",
    pageSize,
    order: { column: "created_at", ascending: false },
    select: "id, created_at, firstname, lastname",
    // revalidateOnFocus: false,
  });


  setCount(totalCount);

  return (
    <section className="hidden lg:table">
      {error && <p>Error: {error.message}</p>}
      <table className="w-full mb-8 table-fixed">
        <thead className="text-white bg-primary-400">
          <tr className="">
            <th className="p-3 text-center font-[500] capitalize text-sm">
              Applicant
            </th>
            <th className="p-3 text-center font-[500] capitalize text-sm">
              Property
            </th>
            <th className="p-3 text-center font-[500] capitalize text-sm">
              Posted on
            </th>
            <th className="p-3 text-center font-[500] capitalize text-sm">
              Status
            </th>
            <th className="p-3 text-center font-[500] capitalize text-sm">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {isValidating === false && !error && currentPage?.length === 0 && (
            <tr className="italic mt-4">
              <td>There are no applications yet.</td>
            </tr>
          )}
          {isLoading ? (
            <TableSkeleton rows={5} columns={5} />
          ) : (
            currentPage?.map((applicant) => (
              <ApplicationRow
                key={applicant.id as string}
                propertyTitle="Property Title"
                propertyImage="/assets/images/Stock.jpg"
                applicantImage="/assets/images/profile-image.jpg"
                applicantName={`${applicant.firstname} ${applicant.lastname}`}
                propertyPrice={30000}
                date={applicant.created_at as string}
              />
            ))
          )}
        </tbody>
      </table>
      {isValidating ? <Spinner color="default" /> : null}
      <div className="mb-20">
        <Pagination
          total={totalCount ? totalCount / pageSize : 1}
          handlePrev={() => {
            if (previousPage) previousPage();
          }}
          handleNext={() => {
            if (nextPage) nextPage();
          }}
          nextDisabled={nextPage === null ? true : false}
          prevDisabled={previousPage === null ? true : false}
        />
      </div>
    </section>
  );
};

export default ManageApplicationsTable;
