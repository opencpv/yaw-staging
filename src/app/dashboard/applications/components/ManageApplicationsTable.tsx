"use client";

import React from "react";
import ApplicationRow from "./ApplicationRow";
import { useFetchTableWithPagination } from "@/lib/custom-hooks/useFetch";
import TableSkeleton from "../../components/shared/skeleton/TableSkeleton";
import Spinner from "../../components/shared/Spinner";
import { useApplicationsStore } from "@/store/dashboard/applicationsStore";
import Pagination from "@/components/__shared/Pagination";
import {
  Table,
  TableBodyRowGroup,
  TableHeader,
  TableHeaderRow,
} from "../../components/shared/table/Table";

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
    <section className="hidden lg:block">
      {error && <p>Error: {error.message}</p>}
      <Table className="mb-8 hidden lg:flex">
        <TableHeaderRow className="grid-cols-5" gap="2rem">
          <TableHeader className="col-span-1">Applicant</TableHeader>
          <TableHeader className="col-span-2">Property</TableHeader>
          <TableHeader className="col-span-1">Posted on</TableHeader>
          <TableHeader className="col-span-1">Status</TableHeader>
          {/* <TableHeader className="col-span-1">Actions on</TableHeader> */}
        </TableHeaderRow>
        <TableBodyRowGroup>
          {isValidating === false && !error && currentPage?.length === 0 && (
            <tr className="mt-4 italic">
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
        </TableBodyRowGroup>
      </Table>
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
