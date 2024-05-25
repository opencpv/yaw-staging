import {
  TableBodySm,
  TableRowSm,
} from "@/app/dashboard/components/shared/table/Table";
import ViewDataDetailsModal from "../__shared/ViewDataDetailsModal";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { formatDateOnly } from "@/lib/utils/stringManipulation";
import InvoiceStatus from "./InvoiceStatus";
import { CheckboxNoFormik as Checkbox } from "@/app/dashboard/components/shared/ui/Checkbox";
import { useInvoiceData } from "../../hooks/useInvoiceData";
import { RiFileListLine } from "react-icons/ri";

type Props = {
  variant: "invoice" | "receipt";
  data: Invoice;
};

function DataRowSm({ variant, data }: Props) {
  const { checked, handleCheckChange } = useInvoiceData({ data });

  return (
    <TableRowSm className="p-0">
      <TableBodySm className="flex gap-5 rounded-lg border border-b-0 border-neutral-300 p-5 pt-8 first:pb-8">
        <div className="grid aspect-square w-20 place-items-center rounded-md bg-primary-50 text-primary">
          <RiFileListLine size={32} />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold">{data.service}</h3>
          <p>{data.id}</p>
          <small>{formatDateOnly(data.billing_date)}</small>
        </div>
        <div className="ml-auto flex flex-col items-center gap-3">
          <p className="text-lg font-semibold">{formatPrice(data.amount)}</p>
          <InvoiceStatus status={data.is_paid ? "paid" : "pending"} />
          {/* <ViewDataDetailsModal variant={variant} data={data} /> */}
        </div>
        {/* <Checkbox
          color="primary"
          onCheckedChange={handleCheckChange}
          checked={checked}
        /> */}
      </TableBodySm>
    </TableRowSm>
  );
}

export default DataRowSm;
