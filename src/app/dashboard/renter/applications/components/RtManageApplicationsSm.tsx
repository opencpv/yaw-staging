"use client";

import React from "react";
import RtApplicationRowSm from "./RtApplicationRowSm";
import { useFetchTableWithInfiniteScroll } from "@/lib/custom-hooks/useFetch";
import TableMobileSkeleton from "../../../components/shared/skeleton/TableMobileSkeleton";
import ButtonInfiniteLoading from "@/components/__shared/ui/data_fetching/ButtonInfiniteLoading";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import FetchErrorMessage from "@/components/__shared/ui/data_fetching/FetchErrorMessage";
import { TableSm } from "../../../components/shared/table/Table";
import { IoArchiveOutline } from "react-icons/io5";
import Button from "@/components/__shared/ui/button/Button";

type Props = {};

const RtManageApplicationsSm = (props: Props) => {
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
        errorComponent={<FetchErrorMessage specificData="applications" />}
        noDataMessageComponent={
          <p className="mt-4 italic">There are no applications yet.</p>
        }
      />
      <TableSm className="mb-10 mt-3 flex lg:hidden">
        {applicants?.map((applicant) => (
          <RtApplicationRowSm
            key={applicant.id as string}
            propertyTitle="Single Room"
            propertyImage="/assets/images/Stock.jpg"
            listerImage="/assets/images/profile-image.jpg"
            listerName={`${applicant.firstname} ${applicant.lastname}`}
            propertyPrice={30000}
            date={applicant.created_at as string}
          />
        ))}
      </TableSm>
      <div className="text-center">
        {isLoading && loadMore ? "Fetching..." : null}
      </div>
      <div className="my-14 ml-auto grid place-items-end">
        <Button variant="ghost" className="" title="View all applications">
          Archive <IoArchiveOutline />
        </Button>
      </div>
      <div className="grid place-items-center">
        <ButtonInfiniteLoading
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

export default RtManageApplicationsSm;
