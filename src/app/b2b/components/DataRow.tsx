import { MdOutlineRemoveRedEye } from "react-icons/md";

type Data = {
  invoice_id: string | number;
  service: string;
  amount: number | string;
  status: string;
  billing_date: string;
};

type Props = {
  variant: "invoice" | "receipts";
  data: Data;
};

function DataRow({ data, variant }: Props) {
  const paidClasses: any = {
    Paid: "bg-[#FEDD9D] text-[#091E42] ",
    Unpaid: "bg-[#B0E3C9] text-[#00763A]",
  };
  return (
    <div
      className={`grid ${
        variant == "invoice" ? "grid-cols-6" : "grid-cols-5"
      } hover:bg-primary-300 cursor-pointer text-center h-[111px] font-semibold items-center justify-center capitalize`}>
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
      <div className="flex justify-center">
        <div className="bg-[#F1F1F1] rounded-lg p-4">
          <MdOutlineRemoveRedEye size="24" color="#3F3F46" />
        </div>
      </div>
    </div>
  );
}

export default DataRow;
