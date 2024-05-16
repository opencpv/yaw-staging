import {
  TableBody,
  TableBodyRow,
} from "@/app/dashboard/components/shared/table/Table";
import { CheckboxNoFormik as Checkbox } from "@/app/dashboard/components/shared/ui/Checkbox";
import InvoiceStatus from "./InvoiceStatus";
import { PaymentData } from "../types";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { formatDateTime } from "@/lib/utils/stringManipulation";
import ViewDataDetailsModal from "../__shared/ViewDataDetailsModal";
import { useInvoiceData } from "../../hooks/useInvoiceData";

type Props = {
  variant: "invoice" | "receipt";
  data: PaymentData;
};

function DataRow({ data, variant }: Props) {
  const { checked, handleCheckChange } = useInvoiceData({ data });

  return (
    <>
      <TableBodyRow className="grid-cols-7" gap="2rem">
        <TableBody className="col-span-1">
          <Checkbox
            color="primary"
            onCheckedChange={handleCheckChange}
            checked={checked}
          />
        </TableBody>
        <TableBody className="col-span-1">{data.invoice_id}</TableBody>
        <TableBody className="col-span-1 text-center font-medium">
          {data.service}
        </TableBody>
        <TableBody className="col-span-1">
          {formatDateTime(data.billing_date)}
        </TableBody>
        <TableBody className="col-span-1">{formatPrice(data.amount)}</TableBody>
        <TableBody className="col-span-1">
          <InvoiceStatus
            status={data.status === "Paid" ? "paid" : "not paid"}
          />
        </TableBody>
        <TableBody className="col-span-1">
          <ViewDataDetailsModal variant={variant} data={data} />
        </TableBody>
      </TableBodyRow>
    </>
  );
}

export default DataRow;
