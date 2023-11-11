import React, { useState } from "react";
import PropertyRow from "./PropertyRow";
import { useFetchTableWithPagination } from "@/lib/custom-hooks/useFetch";
import TableSkeleton from "../../components/shared/skeleton/TableSkeleton";
import Spinner from "../../components/shared/Spinner";

type Props = {};

const ManagePropertiesTable = (props: Props) => {
  const [count, setCount] = useState<number>(0);
  const pageSize = 5;

  const {
    currentPage,
    nextPage,
    previousPage,
    error,
    isLoading,
    isValidating,
  } = useFetchTableWithPagination({
    tableName: "property",
    pageSize: 5,
    order: { column: "created_at", ascending: false },
    select: "id, created_at, status, is_paid_for",
  });

  return (
    <section className="hidden lg:table">
      {error && <p>Error: {error.message}</p>}
      <table className=" w-full mb-14 table-fixed">
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
      <div className="flex gap-2 items-center mb-20">
        <button
          className={`${
            previousPage === null
              ? "bg-neutral-300 text-neutral-600 cursor-not-allowed"
              : "bg-accent-50 text-white"
          } rounded-xl font-[600] p-2 px-5`}
          disabled={previousPage === null ? true : false}
          onClick={() => {
            if (previousPage) previousPage();
            setCount((currentCount) => currentCount - 1);
          }}
        >
          Previous
        </button>
        <button
          className={`${
            nextPage === null
              ? "bg-neutral-300 text-neutral-600 cursor-not-allowed"
              : "bg-accent-50 text-white"
          } rounded-xl font-[600] p-2 px-5`}
          disabled={nextPage === null ? true : false}
          onClick={() => {
            if (nextPage) nextPage();
            setCount((currentCount) => currentCount + 1);
          }}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default ManagePropertiesTable;
