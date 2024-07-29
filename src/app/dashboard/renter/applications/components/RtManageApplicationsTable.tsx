"use client";

import React, { useEffect, useState } from "react";
import RtApplicationRow from "./RtApplicationRow";
import { useFetchTableWithPagination } from "@/lib/custom-hooks/useFetch";
import TableSkeleton from "../../../components/shared/skeleton/TableSkeleton";
import Pagination, { usePagination } from "@/components/__shared/ui/Pagination";
import {
  Table,
  TableBodyRowGroup,
  TableHeader,
  TableHeaderRow,
} from "../../../components/shared/table/Table";
import Loader from "@/components/__shared/ui/loader/Loader";
import { cn } from "@/lib/utils";
import { RenterApplicationStatus } from "./RtApplicationStatus";
import Archived from "@/app/dashboard/components/shared/table/Archived";

type Props = { data: any[]; loading: boolean; refetch: () => void };

const RtManageApplicationsTable = ({ data, loading, refetch }: Props) => {
  const { currentItems, handlePageClick, pageCount } = usePagination({
    items: data,
  });
  const [onlyArchived, setonlyArchived] = useState(false);
  const handleArchived = () => {
    setonlyArchived(!onlyArchived);
  };
  const [filteredData, setfilteredData] = useState<any[]>(currentItems);

  useEffect(() => {
    setfilteredData(
      currentItems.filter((item) => item.is_archived == onlyArchived),
    );
  }, [currentItems, onlyArchived]);

  return (
    <section className="hidden lg:block">
      <div className="mb-4 flex items-center justify-between">
        <small className="text-sm capitalize">
          {filteredData
            ? `Showing ${
                (filteredData.length as number) > 9
                  ? filteredData.length
                  : filteredData.length == 0
                    ? "0"
                    : `0${filteredData.length}`
              } Results`
            : "..."}
        </small>
        <Archived clickHandler={handleArchived} />
      </div>
      <Table
        className={cn("mb-8", {
          "min-h-[35rem]": filteredData && filteredData.length > 3,
        })}
      >
        <TableHeaderRow className="grid-cols-5" gap="2rem">
          <TableHeader className="col-span-1">Property</TableHeader>
          <TableHeader className="col-span-1">Property Owner</TableHeader>
          <TableHeader className="col-span-1">Date</TableHeader>
          <TableHeader className="col-span-1">Status</TableHeader>
          <TableHeader className="col-span-1">Actions</TableHeader>
        </TableHeaderRow>
        <TableBodyRowGroup>
          {data && data?.length === 0 && (
            <tr className="mt-4 italic">
              <td>There are no applications yet.</td>
            </tr>
          )}
          {loading ? (
            <TableSkeleton rows={4} columns={4} />
          ) : (
            filteredData?.map((applicant: any, idx: number) => (
              <RtApplicationRow
                key={applicant?.id as string}
                propertyTitle={applicant?.property!.property_name}
                propertyImage="/assets/images/Stock.jpg"
                listerImage={applicant.property.owner_uid.avatar_url}
                listerName={`${applicant.property.owner_uid.full_name}`}
                propertyPrice={applicant?.property?.total_amount}
                date={applicant.created_at as string}
                status={applicant.status as RenterApplicationStatus}
                submitted={applicant.is_submitted}
                applicationId={applicant.id}
                refetch={refetch}
              />
            ))
          )}
          {loading ? (
            <div className="flex h-[20rem] w-full items-center justify-center">
              <Loader />
            </div>
          ) : null}
        </TableBodyRowGroup>
      </Table>
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </section>
  );
};

export default RtManageApplicationsTable;
