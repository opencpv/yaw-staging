import React from "react";
import DataRowSm from "./DataRowSm";
import DataRow from "./DataRow";
import { invoiceData } from "../content";
import {
  Table,
  TableBodyRowGroup,
  TableHeader,
  TableHeaderRow,
  TableSm,
} from "@/app/dashboard/components/shared/table/Table";
import { CheckboxNoFormik as Checkbox } from "@/app/dashboard/components/shared/ui/Checkbox";
import { useInvoiceData } from "../../hooks/useInvoiceData";
import { createUUID } from "@/lib/utils/stringManipulation";
import SearchInput from "@/components/__shared/ui/form/SearchInput";
import { useFetchInvoices } from "../../services";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import SomethingWentWrong from "@/components/__shared/ui/states/SomethingWentWrong";
import TableSkeleton from "@/app/dashboard/components/shared/skeleton/TableSkeleton";
import PropertiesEmptyState from "@/app/properties/components/PropertiesEmptyState";
import TableSkeletonSm from "@/app/dashboard/components/shared/skeleton/TableSkeletonSm";
import Pagination, { usePagination } from "@/components/__shared/ui/Pagination";

type Props = {
  searchString: string;
};

const InvoiceTable = ({ searchString }: Props) => {
  const {
    data: invoices,
    error,
    isLoading,
    isValidating,
    mutate,
  } = useFetchInvoices({ searchString });

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
              classNames={{ checkIcon: "text-primary" }}
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
            errorComponent={
              <SomethingWentWrong
                className="h-fit"
                onTryAgain={() => {
                  mutate();
                }}
              />
            }
            emptyStateComponent={<PropertiesEmptyState />}
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
          emptyStateComponent={<PropertiesEmptyState />}
        />
        {invoices?.map((invoice: any) => (
          <DataRowSm key={createUUID()} data={invoice} variant="invoice" />
        ))}
      </TableSm>

      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </>
  );
};

export default InvoiceTable;
