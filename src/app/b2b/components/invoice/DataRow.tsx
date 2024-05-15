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
import ViewDataDetailsModal from "../ViewDataDetailsModal";

type Props = {
  variant: "invoice" | "receipt";
  data: PaymentData;
};

function DataRow({ data, variant }: Props) {
  const { checkoutItems, setCheckoutItems } = invoiceStore();
  const handleCheckChange = () => {
    if (checkoutItems.some((item) => item.invoice_id === data.invoice_id)) {
      setCheckoutItems(
        checkoutItems.filter((item) => item.invoice_id !== data.invoice_id),
      );
    } else {
      setCheckoutItems([...checkoutItems, data]);
    }
  };

  return (
    <>
      <TableBodyRow className="grid-cols-7" gap="2rem">
        <TableBody className="col-span-1">
          <Checkbox
            color="primary"
            onCheckedChange={handleCheckChange}
            checked={checkoutItems.some(
              (item) => item.invoice_id === data.invoice_id,
            )}
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
          <ViewDataDetailsModal variant={variant} />
        </TableBody>
      </TableBodyRow>
    </>
  );
}

export default DataRow;
