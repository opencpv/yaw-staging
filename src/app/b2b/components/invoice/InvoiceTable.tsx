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

type Props = {};

const InvoiceTable = (props: Props) => {
  const { handleCheckAll, allChecked } = useInvoiceData({
    invoiceData,
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
          {invoiceData?.map((data: any) => (
            <DataRow key={crypto.randomUUID()} data={data} variant="invoice" />
          ))}
        </TableBodyRowGroup>
      </Table>

      {/* Mobile */}
      <TableSm>
        <div className="relative right-5 top-5 ml-auto flex items-center gap-2">
          <p>Check All</p>
          <Checkbox
            color="primary"
            onCheckedChange={handleCheckAll}
            checked={allChecked}
          />
        </div>
        {invoiceData?.map((data: any) => (
          <DataRowSm key={crypto.randomUUID()} data={data} variant="invoice" />
        ))}
      </TableSm>
    </>
  );
};

export default InvoiceTable;
