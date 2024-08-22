import { TableBodySm, TableRowSm } from "@/components/__shared/ui/table";
import ViewDataDetailsModal from "../__shared/ViewDataDetailsModal";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { formatDateOnly } from "@/lib/utils/stringManipulation";
import InvoiceStatus from "./InvoiceStatus";
import { CheckboxNoFormik as Checkbox } from "@/components/__shared/ui/form/Checkbox";
import { useInvoiceData } from "../../hooks/useInvoiceData";
import { RiFileListLine } from "react-icons/ri";
import { cn } from "@/lib/utils";
import { invoiceStore } from "@/store/payment/invoiceStore";
import { useEffect, useState } from "react";

type Props = {
  variant: "invoice" | "receipt";
  data: Invoice;
};

function DataRowSm({ variant, data }: Props) {
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
      <div className="-mb-6 flex items-center justify-between gap-5">
        <Checkbox
          color="primary"
          onCheckedChange={() => {
            checkStatus
              ? removeCheckoutItemById(data.id as number)
              : addCheckoutItem(data);
          }}
          checked={checkStatus}
        />
        <ViewDataDetailsModal variant={variant} data={data} />
      </div>
      <TableRowSm
        className={cn("p-0", {
          "bg-white": checked,
        })}
      >
        <TableBodySm className="flex gap-5 rounded-lg border border-neutral-300 p-5 pt-8 first:pb-8">
          <div className="grid aspect-square w-20 place-items-center rounded-md bg-primary-50 text-primary">
            <RiFileListLine size={32} />
          </div>
          <div className="flex flex-col gap-3">
            <h4>{data.service}</h4>
            <p>{data.id}</p>
            <small>{formatDateOnly(data.billing_date)}</small>
          </div>
          <div className="ml-auto flex flex-col items-center gap-3">
            <p className="text-lg font-semibold">{formatPrice(data.amount)}</p>
            <InvoiceStatus status={data.is_paid ? "paid" : "pending"} />
          </div>
        </TableBodySm>
      </TableRowSm>
    </>
  );
}

export default DataRowSm;
