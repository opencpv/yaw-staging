import { Button } from "@nextui-org/react";
import Cost from "./Cost";
import DataRow from "./DataRow";
import { invoiceData } from "./content";

function Invoices() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <p className="text-[1.5625rem] font-semibold">All Invoices</p>
        <p>Effortlessly handle your invoices right here</p>
      </div>
      <div className="flex flex-col gap-1 border-[1px] border-shade-50">
        <div className="grid grid-cols-6 bg-white py-4 text-center text-shade-300 font-semibold">
          <div>Invoice Id</div>
          <div>Service</div>
          <div>Billing Date</div>
          <div>Amount</div>
          <div>Status</div>
          <div>Actions</div>
        </div>
        <div className="">
          {invoiceData?.map((r: any, index: number) => (
            <DataRow data={r} variant="invoice" key={index} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center items-end flex-col gap-6">
        <Cost subTotal={200} tax={12} total={2000}/>
        <Button className="py-2.5 px-5 w-full max-w-[196px] text-white text-[0.8125rem] ronded-lg bg-[#DDB771]">
            Checkout Now
        </Button>
      </div>
    </div>
  );
}

export default Invoices;
