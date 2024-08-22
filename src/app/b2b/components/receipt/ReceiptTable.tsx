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
import { CheckboxNoFormik as Checkbox } from "@/components/__shared/ui/form/Checkbox";
import { useReceiptData } from "../../hooks/useReceiptData";
import { createUUID } from "@/lib/utils/stringManipulation";
import { useFetchReceipts } from "../../services";
import Pagination, { usePagination } from "@/components/__shared/ui/pagination";
import FetchingStates from "@/components/__shared/ui/data_fetching/fetching-states";
import TableSkeleton from "@/components/__shared/ui/skeleton/skeleton-table";
import SomethingWentWrong from "@/components/__shared/ui/states/SomethingWentWrong";
import TableSkeletonSm from "@/components/__shared/ui/skeleton/skeleton-table-mobile";
import InvoiceEmptyState from "../__shared/InvoiceEmptyState";
import { customerStore } from "@/store/payment/customerStore";
import { HiOutlineDownload } from "react-icons/hi";
import { invoiceStore } from "@/store/payment/invoiceStore";

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

  const { receiptItem } = invoiceStore();

  const {
    currentItems: paginatedReceipts,
    handlePageClick,
    pageCount,
  } = usePagination({
    items: receipts as Invoice[],
  });
  const { customer } = customerStore();

  const downloadAll = () => {
    receipts?.forEach((item) => {
      const button = document.getElementById(`${item.service}-receipt`);
      if (button) {
        button.click();
      }
    });
  };

  return (
    <>
      <div className="absolute left-[-9999px] top-[-9999px]"></div>
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
          <TableHeader className="col-span-1">Receipt Id</TableHeader>
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
