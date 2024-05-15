import {
  TableBody,
  TableBodyRow,
} from "@/app/dashboard/components/shared/table/Table";
import ViewDataDetailsModal from "./ViewDataDetailsModal";
import YellowCheckBox from "./YellowCheckbox";
import Checkbox from "@/app/dashboard/components/shared/ui/Checkbox";
import ViewButton from "@/components/__shared/ui/button/ViewButton";

export type Data = {
  invoice_id: string | number;
  service: string;
  amount: number | string;
  status: string;
  billing_date: string;
};

type Props = {
  variant: "invoice" | "receipt";
  data: Data;
  index?: string;
};

function DataRow({ data, variant, index }: Props) {
  const paidClasses: any = {
    Paid: "bg-[#FEDD9D] text-[#091E42] ",
    Unpaid: "bg-primary-50 text-[#00763A]",
  };

  return (
    <TableBodyRow className="grid-cols-6" gap="2rem">
      <TableBody className="col-span-1">
        <Checkbox color="primary" name={data.invoice_id + data.service} />
      </TableBody>
      <TableBody className="col-span-1">Be my agent</TableBody>
      <TableBody className="col-span-1">Be the first to know</TableBody>
      <TableBody className="col-span-1">Be my agent</TableBody>
      <TableBody className="col-span-1">Be my agent</TableBody>
      <TableBody className="col-span-1">
        <ViewButton onOpen={() => {}} className="h-11" />
      </TableBody>
    </TableBodyRow>
  );
}

export default DataRow;

{
  /* <ViewDataDetailsModal variant={variant} /> */
}
// {variant == "invoice" && (
//   <div className="flex justify-center">
//     <div
//       className={` w-full max-w-[144px] rounded-2xl px-4 py-2 text-[0.625rem] ${
//         paidClasses[data?.status]
//       }`}
//     >
//       {data?.status}
//     </div>
//   </div>
// )}
