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
  index?: string;
};

function DataRow({ data, variant, index }: Props) {
  const paidClasses: any = {
    Paid: "bg-[#FEDD9D] text-[#091E42] ",
    Unpaid: "bg-primary-50 text-[#00763A]",
  };
  return (
    <div className="flex w-full items-center gap-5 hover:bg-primary-300">
      <div className={` ${variant == "receipt" && "hidden"} p-2.5`}>
        <YellowCheckBox id={index} />
      </div>
      <div
        className={`grid ${
          variant == "invoice" ? "grid-cols-6" : "grid-cols-5"
        }  h-[111px] w-full cursor-pointer items-center justify-center text-center font-semibold capitalize`}
      >
        <div>{data?.invoice_id}</div>
        <div>{data?.service}</div>
        <div>{data?.billing_date}</div>
        <div>GHS {data?.amount}</div>
        {variant == "invoice" && (
          <div className="flex justify-center">
            <div
              className={` w-full max-w-[144px] rounded-2xl px-4 py-2 text-[0.625rem] ${
                paidClasses[data?.status]
              }`}
            >
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
