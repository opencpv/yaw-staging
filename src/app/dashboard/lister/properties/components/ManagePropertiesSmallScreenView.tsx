"use client";

import React from "react";
import PropertyRow2 from "./PropertyRow2";
import { useFetchTableWithInfiniteScroll } from "@/lib/custom-hooks/useFetch";
import TableSkeletonSm from "../../../components/shared/skeleton/TableSkeletonSm";
import { useManagePropertiesStore } from "@/store/dashboard/propertiesStore";
import Button from "@/components/__shared/ui/data_fetching/ButtonInfiniteLoading";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import FetchErrorMessage from "@/components/__shared/ui/data_fetching/FetchErrorMessage";
import { UpperCase } from "@/lib/utils/stringManipulation";
import { PropertyStatusInterface } from "../../../../../../interfaces";

const ManagePropertiesSmallScreenView = () => {
  const filterOption = useManagePropertiesStore((state) => state.filterOption);

  const {
    data: properties,
    error,
    isValidating,
    isLoading,
    loadMore,
  } = useFetchTableWithInfiniteScroll({
    tableName: "property",
    pageSize: 5,
    order: { column: "created_at", ascending: false },
    ...(filterOption !== "all" && {
      eq: { column: "status", match: UpperCase(filterOption as string) },
    }),
    select: "id, created_at, status, is_paid",
  });

  return (
    <div className="lg:hidden">
      <FetchingStates
        data={properties}
        error={error}
        isLoading={isLoading}
        isValidating={isValidating}
        isLoadingComponent={<TableSkeletonSm rows={4} />}
        errorComponent={<FetchErrorMessage specificData="properties" />}
        emptyStateComponent={
          <p className="mt-4 italic">
            There are no properties in this category
          </p>
        }
      />
      <section className="mb-10 mt-3 space-y-5">
        {properties?.map((property) => (
          <PropertyRow2
            key={property.id as string}
            propertyTitle="Property Title"
            image="/assets/images/Stock.jpg"
            price={30000}
            posted_on={property.created_at as string}
            isPaidFor={property.is_paid as boolean}
            status={(property.status as PropertyStatusInterface).toLowerCase()}
          />
        ))}
      </section>
      <div className="text-center">
        {isLoading && loadMore ? "Fetching..." : null}
      </div>
      <div className="mb-20 flex justify-center">
        <Button
          data={properties}
          isLoading={isLoading}
          isValidating={isValidating}
          loadMore={loadMore}
        />
      </div>
    </div>
  );
};

export default ManagePropertiesSmallScreenView;
