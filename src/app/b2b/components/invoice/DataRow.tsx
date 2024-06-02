import {
  TableBody,
  TableBodyRow,
} from "@/app/dashboard/components/shared/table/Table";
import { CheckboxNoFormik as Checkbox } from "@/app/dashboard/components/shared/ui/Checkbox";
import InvoiceStatus from "./InvoiceStatus";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { formatDateDMY, formatDateOnly } from "@/lib/utils/stringManipulation";
import ViewDataDetailsModal from "../__shared/ViewDataDetailsModal";
import { useInvoiceData } from "../../hooks/useInvoiceData";
import { invoiceStore } from "@/store/payment/invoiceStore";
import { useEffect, useState } from "react";

type Props = {
  variant: "invoice" | "receipt";
  data: Invoice;
};

function DataRow({ data, variant }: Props) {
  const { checkoutItems, addCheckoutItem, removeCheckoutItemById } =
    invoiceStore();
  const [checkStatus, setCheckStatus] = useState(false);
  const { checked, handleCheckChange, allChecked } = useInvoiceData({
    invoiceData: checkoutItems,
  });

  useEffect(() => {
    checkoutItems.map((item) => {
      item.id == data.id ? setCheckStatus(true) : null;
      return item;
    });
  }, [checkoutItems, data.id]);
  return (
    <>
      <TableBodyRow className="grid-cols-7" gap="2rem">
        <TableBody className="col-span-1">
          <Checkbox
            color="primary"
            onCheckedChange={() => {
              checkStatus
                ? removeCheckoutItemById(data.id as number)
                : addCheckoutItem(data);
            }}
            checked={checkStatus}
          />
        </TableBody>
        <TableBody className="col-span-1">{data.id}</TableBody>
        <TableBody className="col-span-1 font-medium">{data.service}</TableBody>
        <TableBody className="col-span-1">
          {formatDateDMY(data.billing_date)}
        </TableBody>
        <TableBody className="col-span-1">{formatPrice(data.amount)}</TableBody>
        <TableBody className="col-span-1">
          <InvoiceStatus status={data.is_paid ? "paid" : "pending"} />
        </TableBody>
        <TableBody className="col-span-1">
          <ViewDataDetailsModal variant={variant} data={data} />
        </TableBody>
      </TableBodyRow>
    </>
  );
}

export default DataRow;
