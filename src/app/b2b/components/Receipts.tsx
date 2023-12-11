import DataRow from "./DataRow";
import { invoiceData } from "./content";

function Receipts() {
  return (
    <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
            <p className="text-[1.5625rem] font-semibold">All Receipts</p>
            <p>Effortlessly handle your receipts right here</p>
        </div>
      <div className="flex flex-col gap-1 border-[1px] border-shade-50">
        <div className="grid grid-cols-5 bg-white py-4 text-center text-shade-300 font-semibold">
          <div>Invoice Id</div>
          <div>Service</div>
          <div>Billing Date</div>
          <div>Amount</div>
          <div>Actions</div>
        </div>
        <div className="">
          {invoiceData?.map((r: any, index: number) => (
            <DataRow data={r} variant="receipts" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Receipts;
