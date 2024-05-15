import {
  TableBody,
  TableBodyRow,
} from "@/app/dashboard/components/shared/table/Table";
import Checkbox from "@/app/dashboard/components/shared/ui/Checkbox";
import ViewButton from "@/components/__shared/ui/button/ViewButton";
import InvoiceStatus from "./InvoiceStatus";
import { PaymentData } from "../types";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { formatDateTime } from "@/lib/utils/stringManipulation";
import { invoiceStore } from "@/store/payment/invoiceStore";
import ViewDataDetailsModal from "../__shared/ViewDataDetailsModal";
import { usePaymentData } from "../../hooks/usePaymentData";

type Props = {
  variant: "invoice" | "receipt";
  data: PaymentData;
};

function DataRow({ data, variant }: Props) {
  const { checked, handleCheckChange } = usePaymentData({ data });

  return (
    <>
      <TableBodyRow className="grid-cols-7" gap="2rem">
        <TableBody className="col-span-1">
          <Checkbox
            color="primary"
            onCheckedChange={handleCheckChange}
            checked={checked}
            useWithFormik={false}
          />
        </TableBody>
        <TableBody className="col-span-1">{data.invoice_id}</TableBody>
        <TableBody className="col-span-1 text-center font-medium">
          {data.service}
        </TableBody>
        <TableBody className="col-span-1">
          {formatDateTime(data.billing_date)}
        </TableBody>
        <TableBody className="col-span-1">
          {data.status === "Paid" ? formatPrice(0) : formatPrice(data.amount)}
        </TableBody>
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
