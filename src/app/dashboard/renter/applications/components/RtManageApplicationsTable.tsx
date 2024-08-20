"use client";

import React from "react";
import RtApplicationRow from "./RtApplicationRow";
import TableSkeleton from "@/components/__shared/ui/skeleton/TableSkeleton";
import { useApplicationsStore } from "@/store/dashboard/applicationsStore";
import {
  Table,
  TableBodyRowGroup,
  TableHeader,
  TableHeaderRow,
} from "@/components/__shared/ui/table/Table";
import Button from "@/components/__shared/ui/button/Button";
import { IoArchiveOutline } from "react-icons/io5";
import Loader from "@/components/__shared/ui/loader/Loader";
import { cn } from "@/lib/utils";

type Props = {};

const RtManageApplicationsTable = (props: Props) => {
  let pageSize = 4;

  // setCount(totalCount);

  return (
    // <section className="hidden lg:block">
    //   {error && <p>Error: {error.message}</p>}
    //   <Table
    //     className={cn("mb-8", {
    //       "min-h-[35rem]": currentPage && currentPage.length > 3,
    //     })}
    //   >
    //     <TableHeaderRow className="grid-cols-5" gap="2rem">
    //       <TableHeader className="col-span-2">Property</TableHeader>
    //       <TableHeader className="col-span-1">Applied on</TableHeader>
    //       <TableHeader className="col-span-1">Status</TableHeader>
    //       <TableHeader className="col-span-1">Actions</TableHeader>
    //     </TableHeaderRow>
    //     <TableBodyRowGroup>
    //       {isValidating === false && !error && currentPage?.length === 0 && (
    //         <tr className="mt-4 italic">
    //           <td>There are no applications yet.</td>
    //         </tr>
    //       )}
    //       {isLoading ? (
    //         <TableSkeleton rows={4} columns={4} />
    //       ) : (
    //         currentPage?.map((applicant, idx) => (
    //           <RtApplicationRow
    //             key={applicant.id as string}
    //             propertyTitle="Property Title"
    //             propertyImage="/assets/images/Stock.jpg"
    //             listerImage="/assets/images/profile-image.jpg"
    //             listerName={`${applicant.firstname} ${applicant.lastname}`}
    //             propertyPrice={30000}
    //             date={applicant.created_at as string}
    //             status={
    //               idx === 1
    //                 ? "accepted"
    //                 : idx === 3
    //                   ? "declined"
    //                   : idx === 0
    //                     ? "incomplete"
    //                     : "under review"
    //             }
    //           />
    //         ))
    //       )}
    //       {isValidating ? (
    //         <div className="flex h-[20rem] w-full items-center justify-center">
    //           <Loader />
    //         </div>
    //       ) : null}
    //     </TableBodyRowGroup>
    //   </Table>
    //   <div className="grid place-items-end">
    //     <Button
    //       variant="ghost"
    //       className="ml-auto"
    //       title="View all applications"
    //     >
    //       Archive <IoArchiveOutline />
    //     </Button>
    //   </div>
    //   <div className="mt-5 grid place-items-center">
    //     {/* <Pagination
    //       total={totalCount ? totalCount / pageSize : 1}
    //       handlePrev={() => {
    //         if (previousPage) previousPage();
    //       }}
    //       handleNext={() => {
    //         if (nextPage) nextPage();
    //       }}
    //       nextDisabled={nextPage === null ? true : false}
    //       prevDisabled={previousPage === null ? true : false}
    //     /> */}
    //   </div>
    // </section>
    <></>
  );
};

export default RtManageApplicationsTable;
