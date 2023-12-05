// @ts-nocheck
"use client"
import React from "react";
import PropertyRow from "./PropertyRow";
import { useFetchTableWithPagination } from "@/lib/custom-hooks/useFetch";
import TableSkeleton from "../../components/shared/skeleton/TableSkeleton";
import Spinner from "../../components/shared/Spinner";
import { useManagePropertiesStore } from "@/store/dashboard/propertiesStore";
import Pagination from "@/components/__shared/Pagination";

type Props = {};

const ManagePropertiesTable = (props: Props) => {
  let pageSize = 5;

  const filterOption = useManagePropertiesStore((state) => state.filterOption);
  const setCount = useManagePropertiesStore((state) => state.setFetchCount);

  const {
    currentPage,
    nextPage,
    previousPage,
    error,
    isLoading,
    isValidating,
    totalCount,
  } = useFetchTableWithPagination({
    tableName: "property",
    pageSize,
    order: { column: "created_at", ascending: false },
    select: "id, created_at, status, is_paid_for",
    revalidateOnFocus: false,
    ...(filterOption !== "all" && {
      eq: { column: "status", match: filterOption.toUpperCase() },
    }),
  });

  setCount(totalCount);

  return (
    <section className="hidden lg:table">
      {error && <p>Error: {error.message}</p>}
      <table className="w-full mb-8 table-fixed">
        <thead className="text-white bg-primary-400">
          <tr className="">
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
              <td>There are no properties in this category</td>
            </tr>
          )}
          {isLoading ? (
            <TableSkeleton rows={5} columns={4} />
          ) : (
            currentPage?.map((property) => (
              <PropertyRow
                key={property.id as string}
                propertyTitle="Property Title"
                image="/assets/images/Stock.jpg"
                price={30000}
                posted_on={property.created_at as string}
                isPaidFor={property.is_paid_for as boolean}
                status={
                  property.status.toLowerCase() as PropertyStatusInterface
                }
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

export default ManagePropertiesTable;
