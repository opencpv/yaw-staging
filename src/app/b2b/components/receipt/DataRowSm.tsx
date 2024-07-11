// @ts-nocheck
import {
  TableBodySm,
  TableRowSm,
} from "@/app/dashboard/components/shared/table/Table";
import ViewDataDetailsModal from "../__shared/ViewDataDetailsModal";
import { PaymentData } from "../types";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { formatDateOnly } from "@/lib/utils/stringManipulation";
import { CheckboxNoFormik as Checkbox } from "@/app/dashboard/components/shared/ui/Checkbox";
import { useReceiptData } from "../../hooks/useReceiptData";
import { RiFileListLine } from "react-icons/ri";

type Props = {
  variant: "invoice" | "receipt";
  data: PaymentData;
};

function DataRowSm({ variant, data }: Props) {
  const { checked, handleCheckChange } = useReceiptData({ data });

  return (
    <TableRowSm className="p-0">
      <TableBodySm className="flex items-center justify-between gap-2">
        <Checkbox
          color="primary"
          onCheckedChange={handleCheckChange}
          checked={checked}
        />
        <div className="grid aspect-square w-20 place-items-center rounded-md bg-primary-50 text-primary">
          <RiFileListLine size={32} />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold">{data.service}</h3>
          <p>#{data.id}</p>
          <small>{formatDateOnly(data.billing_date)}</small>
        </div>
        <div className="ml-auto flex flex-col items-center gap-3">
          <p className="text-lg font-semibold">{formatPrice(data.amount)}</p>
          {/* <ViewDataDetailsModal variant={variant} data={data} /> */}
        </div>
      </TableBodySm>
    </TableRowSm>
  );
}

export default DataRowSm;
