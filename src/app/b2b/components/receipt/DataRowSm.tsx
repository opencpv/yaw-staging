import {
  TableBodySm,
  TableRowSm,
} from "@/app/dashboard/components/shared/table/Table";
import ViewDataDetailsModal from "../__shared/ViewDataDetailsModal";
import { PaymentData } from "../types";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { formatDateTime } from "@/lib/utils/stringManipulation";
import { CheckboxNoFormik as Checkbox } from "@/app/dashboard/components/shared/ui/Checkbox";
import { useReceiptData } from "../../hooks/useReceiptData";

type Props = {
  variant: "invoice" | "receipt";
  data: PaymentData;
};

function DataRowSm({ variant, data }: Props) {
  const { checked, handleCheckChange } = useReceiptData({ data });

  return (
    <TableRowSm>
      <TableBodySm className="flex items-center justify-between gap-5">
        <div className="space-y-5 rounded-xl border border-shade-300 p-3">
          <h4>Invoice Id</h4>
          <p>{data.invoice_id}</p>
        </div>
        <Checkbox
          color="primary"
          onCheckedChange={handleCheckChange}
          checked={checked}
        />
      </TableBodySm>
      <TableBodySm className="flex items-center justify-between gap-5">
        <h4>Service</h4>
        <p>{data.service}</p>
      </TableBodySm>
      <TableBodySm className="flex items-center justify-between gap-5">
        <h4>Amount Due</h4>
        <p>{formatPrice(data.amount)}</p>
      </TableBodySm>
      <TableBodySm className="flex items-center justify-between gap-5">
        <h4>Billing Date</h4>
        <p>{formatDateTime(data.billing_date)}</p>
      </TableBodySm>
      <TableBodySm className="ml-auto flex w-20 justify-end">
        <ViewDataDetailsModal variant={variant} data={data} />
      </TableBodySm>
    </TableRowSm>
  );
}

export default DataRowSm;
