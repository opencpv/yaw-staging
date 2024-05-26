import {
  TableBody,
  TableBodyRow,
} from "@/app/dashboard/components/shared/table/Table";
import { CheckboxNoFormik as Checkbox } from "@/app/dashboard/components/shared/ui/Checkbox";
import { PaymentData } from "../types";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { formatDateOnly, formatDateTime } from "@/lib/utils/stringManipulation";
import ViewDataDetailsModal from "../__shared/ViewDataDetailsModal";
import { useReceiptData } from "../../hooks/useReceiptData";

type Props = {
  variant: "invoice" | "receipt";
  data: PaymentData;
};

function DataRow({ data, variant }: Props) {
  const { checked, handleCheckChange } = useReceiptData({ data });

  return (
    <>
      <TableBodyRow className="grid-cols-6" gap="2rem">
        <TableBody className="col-span-1">
          <Checkbox
            color="primary"
            onCheckedChange={handleCheckChange}
            checked={checked}
          />
        </TableBody>
        <TableBody className="col-span-1">{data.id}</TableBody>
        <TableBody className="col-span-1 text-center font-medium">
          {data.service}
        </TableBody>
        <TableBody className="col-span-1">
          {formatDateOnly(data.billing_date)}
        </TableBody>
        <TableBody className="col-span-1">
          {data.is_paid ? formatPrice(0) : formatPrice(data.amount)}
        </TableBody>
        <TableBody className="col-span-1">
          <ViewDataDetailsModal variant={variant} data={data} />
        </TableBody>
      </TableBodyRow>
    </>
  );
}

export default DataRow;
