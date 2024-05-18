import {
  TableBodySm,
  TableRowSm,
} from "@/app/dashboard/components/shared/table/Table";
import { Data } from "./DataRow";
import ViewDataDetailsModal from "./ViewDataDetailsModal";
import YellowCheckBox from "./YellowCheckbox";

type Props = {
  variant: "invoice" | "receipt";
  data: Data;
  index?: any;
};

function DataRowSm({ variant, data, index }: Props) {
  return (
    <TableRowSm>
      <TableBodySm>Mobile</TableBodySm>
      <TableBodySm>Mobile</TableBodySm>
      <TableBodySm>Mobile</TableBodySm>
      <TableBodySm>Mobile</TableBodySm>
    </TableRowSm>
  );
}

export default DataRowSm;

{
  /* <ViewDataDetailsModal variant={variant} maxWidth /> */
}
