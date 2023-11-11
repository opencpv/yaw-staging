import React from "react";
import PropertyRow2 from "./PropertyRow2";
import { useFetchTableWithInfiniteScroll } from "@/lib/custom-hooks/useFetch";
import TableMobileSkeleton from "../../components/shared/skeleton/TableMobileSkeleton";

const ManagePropertiesSmallScreenView = () => {
  const { data, error, isValidating, isLoading, loadMore } =
    useFetchTableWithInfiniteScroll({
      tableName: "property",
      pageSize: 5,
      order: { column: "created_at", ascending: false },
      select: "id, created_at, status, is_paid_for",
    });

  return (
    <div className="lg:hidden">
      {isLoading ? (
        <TableMobileSkeleton rows={4} />
      ) : (
        error && <p>Error: Something went wrong while fetching</p>
      )}
      <section className="mt-3 mb-14 space-y-5">
        {data?.map((property) => (
          <PropertyRow2
            key={property.id as string}
            propertyTitle="Property Title"
            image="/assets/images/Stock.jpg"
            price={30000}
            posted_on={property.created_at as string}
            isPaidFor={property.is_paid_for as boolean}
            status={property.status.toLowerCase()}
          />
        ))}
      </section>
      <div className="text-center">
        {isLoading && loadMore ? "Fetching..." : null}
      </div>
      <div className="flex justify-center mb-20">
        <button
          onClick={() => loadMore && loadMore()}
          className={`${
            loadMore === null
              ? "bg-neutral-300 text-neutral-600 cursor-not-allowed"
              : "bg-accent-50 text-white"
          } ${isLoading && "hidden"} rounded-xl font-[600] p-2 px-5`}
          disabled={loadMore === null ? true : false}
        >
          {isValidating
            ? "Loading More..."
            : loadMore
            ? "Load More"
            : "End of data. Please scroll up"}
        </button>
      </div>
    </div>
  );
};

export default ManagePropertiesSmallScreenView;
