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
import Checkbox from "@/app/dashboard/components/shared/ui/Checkbox";
import { invoiceStore } from "@/store/payment/invoiceStore";

type Props = {};

const InvoiceTable = (props: Props) => {
  const { checkoutItems, setCheckoutItems } = invoiceStore();

  const handleCheckAll = () => {
    const allSelected = checkoutItems.length === invoiceData.length;
    setCheckoutItems(allSelected ? [] : invoiceData);
  };

  return (
    <>
      <Table>
        <TableHeaderRow className="grid-cols-7" gap="2rem">
          <TableHeader className="col-span-1">
            <Checkbox
              useWithFormik={false}
              name="check-all"
              color="white"
              className="relative xl:left-1"
              onCheckedChange={handleCheckAll}
              checked={checkoutItems.length === invoiceData.length}
              classNames={{ checkIcon: "text-primary" }}
            />{" "}
          </TableHeader>
          <TableHeader className="col-span-1">Invoice Id</TableHeader>
          <TableHeader className="col-span-1">Service</TableHeader>
          <TableHeader className="col-span-1">Billing Date</TableHeader>
          <TableHeader className="col-span-1">Amount</TableHeader>
          <TableHeader className="col-span-1">Status</TableHeader>
          <TableHeader className="col-span-1">Action</TableHeader>
        </TableHeaderRow>
        <TableBodyRowGroup>
          {invoiceData?.map((r: any) => (
            <DataRow key={crypto.randomUUID()} data={r} variant="invoice" />
          ))}
        </TableBodyRowGroup>
      </Table>

      {/* Mobile */}
      <TableSm>
        {invoiceData?.map((r: any) => (
          <DataRowSm
            key={crypto.randomUUID()}
            data={r}
            variant="invoice"
            index={crypto.randomUUID()}
          />
        ))}
      </TableSm>
    </>
  );
};

export default InvoiceTable;
