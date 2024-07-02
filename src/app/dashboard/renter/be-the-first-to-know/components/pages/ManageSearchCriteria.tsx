"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableBodyRow,
  TableBodyRowGroup,
  TableBodySm,
  TableHeader,
  TableHeaderRow,
  TableRowSm,
  TableSm,
} from "@/app/dashboard/components/shared/table/Table";
import SelectMobile from "@/app/dashboard/components/shared/ui/SelectMobile";
import BTFTKModal from "../../steps/BTFTKModal";
import Actions from "../Actions";
import { useFetchSearchCriteria } from "../../services";
import { useAppStore } from "@/store/dashboard/AppStore";
import TableSkeleton from "@/app/dashboard/components/shared/skeleton/TableSkeleton";
import CriteriaStatus from "../Status";
import MatchState from "../MatchState";
import ResultsState from "../ResultState";
import NoCriteriaEmptyState from "../NoCriteriaEmptyState";
import Pagination, { usePagination } from "@/components/__shared/ui/Pagination";
import { cn } from "@/lib/utils";
import TableSkeletonSm from "@/app/dashboard/components/shared/skeleton/TableSkeletonSm";

const ManageSearchCriteria = () => {
  const { user } = useAppStore();
  const [status, setStatus] = useState<string | undefined>(undefined);
  const { data: searchCriteria, isLoading } = useFetchSearchCriteria({
    userId: user?.id as string,
    status,
  });

  const {
    currentItems: paginatedCriteria,
    handlePageClick,
    pageCount,
  } = usePagination({
    items: searchCriteria as SearchCriteria[],
  });

  return searchCriteria?.length === 0 && status === undefined ? (
    <NoCriteriaEmptyState />
  ) : (
    <section className="space-y-8">
      <BTFTKModal float />
      <div className="flex flex-col justify-between gap-5 max-xs:mt-10 xs:flex-row xs:items-center">
        <h3 className="text-shade-300">Your Targeted Search</h3>
        <SelectMobile
          name="Status"
          options={["Match", "No Match", "Pending", "Not Started", "All"]}
          placeholder="Status"
          value={status as string}
          onValueChange={setStatus}
          classNames={{ trigger: "self-end" }}
        />
      </div>
      <Table>
        <TableHeaderRow className="grid-cols-8" gap="2rem">
          <TableHeader className="col-span-2">Search Title</TableHeader>
          <TableHeader className="col-span-1">Location</TableHeader>
          <TableHeader className="col-span-1">Status</TableHeader>
          <TableHeader className="col-span-2">Found Matches</TableHeader>
          <TableHeader className="col-span-1">Results</TableHeader>
          <TableHeader className="col-span-1"> </TableHeader>
        </TableHeaderRow>

        <TableBodyRowGroup>
          {isLoading && <TableSkeleton rows={3} columns={6} />}
          {paginatedCriteria?.map((criterion) => (
            <TableBodyRow key={criterion.id} className="grid-cols-8">
              {/* Property */}
              <TableBody className="col-span-2 flex gap-[0.62rem] truncate p-2.5">
                <div className="flex flex-col justify-between gap-[0.62rem] truncate">
                  <h4 className="truncate font-semibold">
                    {criterion.title || "-"}
                  </h4>
                </div>
              </TableBody>
              <TableBody className="col-span-1 text-center">
                {criterion.location || "-"}
              </TableBody>
              {/* Status */}
              <TableBody
                className={cn("col-span-1 mx-auto", {
                  "w-full justify-start": criterion.is_active === false,
                })}
              >
                <CriteriaStatus criterion={criterion} />
              </TableBody>
              {/* Actions */}
              <TableBody className="col-span-2 mx-auto">
                <MatchState criterion={criterion} />
              </TableBody>
              <TableBody className="col-span-1 mx-auto">
                <ResultsState criterion={criterion} />
              </TableBody>
              <TableBody className="col-span-1 mx-auto">
                <Actions criterion={criterion} />
              </TableBody>
            </TableBodyRow>
          ))}
        </TableBodyRowGroup>
      </Table>
      {/* Mobile table */}
      <TableSm>
        {isLoading && <TableSkeletonSm rows={3}/>}
        {paginatedCriteria?.map((criterion) => (
          <TableRowSm key={criterion.id}>
            <TableBodySm className="flex items-center justify-between gap-5">
              <h4 className="truncate">{criterion.title}</h4>
              <ResultsState criterion={criterion} />
            </TableBodySm>
            <TableBodySm className="flex items-center justify-between gap-5">
              <h4 className="truncate">
                <MatchState criterion={criterion} />
              </h4>
              <Actions criterion={criterion} />
            </TableBodySm>
          </TableRowSm>
        ))}
      </TableSm>
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </section>
  );
};

export default ManageSearchCriteria;
