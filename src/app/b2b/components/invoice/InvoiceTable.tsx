import React from "react";
import DataRowSm from "./DataRowSm";
import DataRow from "./DataRow";
import {
  Table,
  TableBodyRowGroup,
  TableHeader,
  TableHeaderRow,
  TableSm,
} from "@/components/__shared/ui/table";
import { Checkbox } from "@/components/__shared/ui/form/checkbox";
import { useInvoiceData } from "../../hooks/useInvoiceData";
import { createUUID } from "@/lib/utils/stringManipulation";
import { useFetchInvoices } from "../../services";
import FetchingStates from "@/components/__shared/ui/data_fetching/fetching-states";
import SomethingWentWrong from "@/components/__shared/ui/states/SomethingWentWrong";
import TableSkeleton from "@/components/__shared/ui/skeleton/skeleton-table";
import TableSkeletonSm from "@/components/__shared/ui/skeleton/skeleton-table-mobile";
import Pagination, { usePagination } from "@/components/__shared/ui/pagination";
import InvoiceEmptyState from "../__shared/InvoiceEmptyState";
import toast from "react-hot-toast";

type Props = {
  searchString: string;
  filter: "All" | "Paid" | "Pending";
  customerId: string;
};

const InvoiceTable = ({ searchString, customerId, filter }: Props) => {
  const {
    data: invoices,
    error,
    isLoading,
    mutate,
  } = useFetchInvoices({ searchString, customerId, filter });

  const { handleCheckAll, allChecked } = useInvoiceData({
    invoiceData: invoices as Invoice[],
  });

  const {
    currentItems: paginatedInvoices,
    handlePageClick,
    pageCount,
  } = usePagination({
    items: invoices as Invoice[],
  });

  if (error) toast.error("Something went wrong while fetching invoices");

  return (
    <>
      <Table>
        <TableHeaderRow className="grid-cols-7" gap="2rem">
          <TableHeader className="col-span-1">
            <Checkbox
              name="check-all"
              color="white"
              className="relative xl:left-1"
              onCheckedChange={handleCheckAll}
              checked={allChecked}
            />{" "}
          </TableHeader>
          <TableHeader className="col-span-1">Invoice Id</TableHeader>
          <TableHeader className="col-span-1">Service</TableHeader>
          <TableHeader className="col-span-1">Billing Date</TableHeader>
          <TableHeader className="col-span-1">Amount Due</TableHeader>
          <TableHeader className="col-span-1">Status</TableHeader>
          <TableHeader className="col-span-1">Action</TableHeader>
        </TableHeaderRow>
        <TableBodyRowGroup>
          <FetchingStates
            data={invoices}
            error={error}
            isLoading={isLoading}
            isLoadingComponent={<TableSkeleton rows={3} columns={7} />}
            emptyStateComponent={<InvoiceEmptyState />}
          />
          {paginatedInvoices?.map((invoice) => (
            <DataRow key={createUUID()} data={invoice} variant="invoice" />
          ))}
        </TableBodyRowGroup>
      </Table>
      {/* Mobile */}
      <TableSm>
        <FetchingStates
          data={invoices}
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
        {paginatedInvoices?.map((invoice: any) => (
          <DataRowSm key={createUUID()} data={invoice} variant="invoice" />
        ))}
      </TableSm>

      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </>
  );
};

export default InvoiceTable;
