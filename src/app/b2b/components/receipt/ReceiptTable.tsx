import React from "react";
import DataRowSm from "./DataRowSm";
import DataRow from "./DataRow";
import { receiptData } from "../content";
import {
  Table,
  TableBodyRowGroup,
  TableHeader,
  TableHeaderRow,
  TableSm,
} from "@/app/dashboard/components/shared/table/Table";
import Checkbox from "@/app/dashboard/components/shared/ui/Checkbox";
import { useReceiptData } from "../../hooks/useReceiptData";

const ReceiptTable = () => {
  const { handleCheckAll, allChecked } = useReceiptData({
    receiptData,
  });

  return (
    <>
      <Table>
        <TableHeaderRow className="grid-cols-6" gap="2rem">
          <TableHeader className="col-span-1">
            <Checkbox
              useWithFormik={false}
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
          <TableHeader className="col-span-1">Action</TableHeader>
        </TableHeaderRow>
        <TableBodyRowGroup>
          {receiptData?.map((data: any) => (
            <DataRow key={crypto.randomUUID()} data={data} variant="receipt" />
          ))}
        </TableBodyRowGroup>
      </Table>

      {/* Mobile */}
      <TableSm>
        <div className="relative right-5 top-5 ml-auto flex items-center gap-2">
          <p>Check All</p>
          <Checkbox
            useWithFormik={false}
            color="primary"
            onCheckedChange={handleCheckAll}
            checked={allChecked}
          />
        </div>
        {receiptData?.map((data: any) => (
          <DataRowSm key={crypto.randomUUID()} data={data} variant="receipt" />
        ))}
      </TableSm>
    </>
  );
};

export default ReceiptTable;
