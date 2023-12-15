import { MdOutlineRemoveRedEye } from "react-icons/md";
import ViewDataDetailsModal from "./ViewDataDetailsModal";
import YellowCheckBox from "./YellowCheckbox";

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
  index?: number | string;
};

function DataRow({ data, variant, index }: Props) {
  const paidClasses: any = {
    Paid: "bg-[#FEDD9D] text-[#091E42] ",
    Unpaid: "bg-[#B0E3C9] text-[#00763A]",
  };
  return (
    <div className="flex items-center gap-5 w-full hover:bg-primary-300">
      <div className={` ${variant == "receipt" && "hidden"} p-2.5`}>
        <YellowCheckBox id={index} />
      </div>
      <div
        className={`grid ${
          variant == "invoice" ? "grid-cols-6" : "grid-cols-5"
        }  cursor-pointer text-center h-[111px] font-semibold items-center justify-center capitalize w-full`}>
        <div>{data?.invoice_id}</div>
        <div>{data?.service}</div>
        <div>{data?.billing_date}</div>
        <div>GHS {data?.amount}</div>
        {variant == "invoice" && (
          <div className="flex justify-center">
            <div
              className={` text-[0.625rem] w-full max-w-[144px] py-2 px-4 rounded-2xl ${
                paidClasses[data?.status]
              }`}>
              {data?.status}
            </div>
          </div>
        )}
        <ViewDataDetailsModal variant={variant} />
      </div>
    </div>
  );
}

export default DataRow;
