import DataRow from "../invoice/DataRow";
import DataRowSm from "../invoice/DataRowSm";
import DownloadButton from "../__shared/DownloadButton";
import { invoiceData } from "../content";

function Receipts() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <p className="text-[1.5625rem] font-semibold">All Receipts</p>
        <p>Effortlessly handle your receipts right here</p>
      </div>
      <div className="flex flex-col gap-1 border-[1px] border-shade-50">
        <div className="hidden grid-cols-5 bg-white py-4 text-center font-semibold text-shade-300 lg:grid">
          <div>Invoice Id</div>
          <div>Service</div>
          <div>Billing Date</div>
          <div>Amount</div>
          <div>Actions</div>
        </div>

        <div className="flex w-full flex-col gap-6">
          {invoiceData?.map((r: any, index: number) => (
            <div className="w-full" key={index}>
              <div className="hidden w-full lg:flex">
                <DataRow data={r} variant="receipt" />
              </div>
              <div className="lg:hidden">
                <DataRowSm data={r} variant="receipt" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden w-full items-center justify-end lg:flex">
        <DownloadButton maxWidth="fit" />
      </div>

      <div className="sticky bottom-0 w-full items-center justify-end gap-5 bg-white pb-3 lg:hidden">
        <DownloadButton />
      </div>
    </div>
  );
}

export default Receipts;
