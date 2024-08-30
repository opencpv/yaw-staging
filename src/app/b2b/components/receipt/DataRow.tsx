import { TableBody, TableBodyRow } from "@/components/__shared/ui/table";
import { CheckboxNoFormik as Checkbox } from "@/components/__shared/ui/form/checkbox";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { formatDateOnly } from "@/lib/utils/stringManipulation";
import ViewDataDetailsModal from "../__shared/ViewDataDetailsModal";
import { useReceiptData } from "../../hooks/useReceiptData";
import { invoiceStore } from "@/store/payment/invoiceStore";
import { useEffect, useState } from "react";

type Props = {
  variant: "invoice" | "receipt";
  data: Invoice;
};

function DataRow({ data, variant }: Props) {
  const { receiptItem, addRecieptItem, removeReceiptItemById } = invoiceStore();
  const [checkStatus, setCheckStatus] = useState(false);

  useEffect(() => {
    receiptItem.map((item) => {
      item.id == data.id ? setCheckStatus(true) : null;
      return item;
    });
  }, [receiptItem, data.id]);
  return (
    <>
      <TableBodyRow className="grid-cols-6" gap="2rem">
        <TableBody className="col-span-1">
          <Checkbox
            color="primary"
            onCheckedChange={() => {
              checkStatus
                ? removeReceiptItemById(data.id as number)
                : addRecieptItem(data);
            }}
            checked={checkStatus}
          />
        </TableBody>
        <TableBody className="col-span-1">#{data.id}</TableBody>
        <TableBody className="col-span-1 text-center font-medium">
          {data.service}
        </TableBody>
        <TableBody className="col-span-1">
          {formatDateOnly(data.billing_date)}
        </TableBody>
        <TableBody className="col-span-1">
          {formatPrice((1 + data.tax_rate / 100) * data.amount)}
        </TableBody>
        <TableBody className="col-span-1">
          <ViewDataDetailsModal variant={variant} data={data} />
        </TableBody>
      </TableBodyRow>
    </>
  );
}

export default DataRow;
