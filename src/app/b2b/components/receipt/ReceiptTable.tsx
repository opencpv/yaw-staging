import React from "react";
import DataRowSm from "./DataRowSm";
import DataRow from "./DataRow";
import {
  Table,
  TableBodyRowGroup,
  TableHeader,
  TableHeaderRow,
  TableSm,
} from "@/app/dashboard/components/shared/table/Table";
import { CheckboxNoFormik as Checkbox } from "@/app/dashboard/components/shared/ui/Checkbox";
import { useReceiptData } from "../../hooks/useReceiptData";
import { createUUID } from "@/lib/utils/stringManipulation";
import { useFetchReceipts } from "../../services";
import Pagination, { usePagination } from "@/components/__shared/ui/Pagination";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import TableSkeleton from "@/app/dashboard/components/shared/skeleton/TableSkeleton";
import SomethingWentWrong from "@/components/__shared/ui/states/SomethingWentWrong";
import TableSkeletonSm from "@/app/dashboard/components/shared/skeleton/TableSkeletonSm";
import InvoiceEmptyState from "../__shared/InvoiceEmptyState";

type Props = {
  searchString: string;
  customerId: string;
};

const ReceiptTable = ({ searchString, customerId }: Props) => {
  const {
    data: receipts,
    error,
    isLoading,
    mutate,
  } = useFetchReceipts({ searchString, customerId });

  const { handleCheckAll, allChecked } = useReceiptData({
    receiptData: receipts as Invoice[],
  });

  const {
    currentItems: paginatedReceipts,
    handlePageClick,
    pageCount,
  } = usePagination({
    items: receipts as Invoice[],
  });

  return (
    <>
      <Table>
        <TableHeaderRow className="grid-cols-6" gap="2rem">
          <TableHeader className="col-span-1">
            <Checkbox
              name="check-all"
              color="white"
              className="relative xl:left-1"
              onCheckedChange={handleCheckAll}
              checked={allChecked}
              classNames={{ checkIcon: "text-primary" }}
            />{" "}
          </TableHeader>
          <TableHeader className="col-span-1">Invoice Id</TableHeader>
          <TableHeader className="col-span-1">Service</TableHeader>
          <TableHeader className="col-span-1">Billing Date</TableHeader>
          <TableHeader className="col-span-1">Amount Paid</TableHeader>
          <TableHeader className="col-span-1">Action</TableHeader>
        </TableHeaderRow>
        <TableBodyRowGroup>
          <FetchingStates
            data={receipts}
            error={error}
            isLoading={isLoading}
            isLoadingComponent={<TableSkeleton rows={3} columns={7} />}
            errorComponent={
              <SomethingWentWrong
                className="h-fit"
                onTryAgain={() => {
                  mutate();
                }}
              />
            }
            emptyStateComponent={<InvoiceEmptyState />}
          />
          {paginatedReceipts?.map((data: any) => (
            <DataRow key={createUUID()} data={data} variant="receipt" />
          ))}
        </TableBodyRowGroup>
      </Table>

      {/* Mobile */}
      <TableSm>
        <FetchingStates
          data={receipts}
          error={error}
          isLoading={isLoading}
          isLoadingComponent={<TableSkeletonSm rows={3} />}
          errorComponent={
            <SomethingWentWrong
              className="h-fit"
              onTryAgain={() => {
                mutate();
              }}
            />
          }
          emptyStateComponent={<InvoiceEmptyState />}
        />
        {paginatedReceipts?.map((data: any) => (
          <DataRowSm key={createUUID()} data={data} variant="receipt" />
        ))}
      </TableSm>

      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </>
  );
};

export default ReceiptTable;
