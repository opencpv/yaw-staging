import { Data } from "./DataRow";
import ViewDataDetailsModal from "./ViewDataDetailsModal";
import YellowCheckBox from "./YellowCheckbox";

type Props = {
  variant: "invoice" | "receipt";
  data: Data;
  index? : any
};

function DataRowSm({ variant, data , index}: Props) {
  return (
    <div
      className="flex flex-col gap-4 p-4 font-semibold rounded-lg border-[1px] border-[#396261]"
      style={{
        boxShadow:
          "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
      }}>
      <div className="flex items-center justify-between">
        <div>
          <YellowCheckBox id={index}/>
        </div>
        <div className="flex flex-col gap-4 border-b-[1px] border-b-shade-50 items-end">
          <p className="font-semibold text-shade-300">
            {variant == "invoice" ? "Invoice Id" : "ID"}
          </p>
          <p className="py-2 5 font-semibold">{data?.invoice_id}</p>
        </div>
      </div>
      <div className="flex items-center justify-between border-b-[1px] border-b-shade-50">
        <p className="text-shade-300 font-semibold">Service</p>
        <p className="py-2.5">{data?.service}</p>
      </div>
      <div className="flex items-center justify-between border-b-[1px] border-b-shade-50">
        <p className="text-shade-300 font-semibold">Amount</p>
        <p className="py-2.5">{data?.amount}</p>
      </div>
      <div className="flex items-center justify-between border-b-[1px] border-b-shade-50">
        <p className="text-shade-300 font-semibold">Date</p>
        <p className="py-2.5">{data?.billing_date}</p>
      </div>
      <ViewDataDetailsModal variant={variant} maxWidth />
    </div>
  );
}

export default DataRowSm;
