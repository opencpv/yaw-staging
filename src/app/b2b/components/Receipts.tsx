import DataRow from "./DataRow";
import DataRowSm from "./DataRowSm";
import DownloadButton from "./DownloadButton";
import { invoiceData } from "./content";

function Receipts() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <p className="text-[1.5625rem] font-semibold">All Receipts</p>
        <p>Effortlessly handle your receipts right here</p>
      </div>
      <div className="flex flex-col gap-1 border-[1px] border-shade-50">
        <div className="hidden lg:grid grid-cols-5 bg-white py-4 text-center text-shade-300 font-semibold">
          <div>Invoice Id</div>
          <div>Service</div>
          <div>Billing Date</div>
          <div>Amount</div>
          <div>Actions</div>
        </div>

        <div className="w-full flex flex-col gap-6">
          {invoiceData?.map((r: any, index: number) => (
            <div className="w-full" key={index}>
              <div className="hidden lg:flex w-full">
                <DataRow data={r} variant="receipt" />
              </div>
              <div className="lg:hidden">
                <DataRowSm data={r} variant="receipt" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full hidden lg:flex justify-end items-center">
        <DownloadButton maxWidth="fit" />
      </div>

      <div className="w-full sticky bottom-0 bg-white justify-end pb-3 items-center lg:hidden gap-5">
        <DownloadButton />
      </div>
    </div>
  );
}

export default Receipts;
