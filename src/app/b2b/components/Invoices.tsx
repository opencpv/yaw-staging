import { Button } from "@nextui-org/react";
import Cost from "./Cost";
import DataRow from "./DataRow";
import { invoiceData } from "./content";
import DownloadButton from "./DownloadButton";
import DataRowSm from "./DataRowSm";
import CheckoutButton from "./CheckoutButton";
import YellowCheckBox from "./YellowCheckbox";

function Invoices() {
  const handleClick = () => {};

  return (
    <div className="relative flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h2>All Invoices</h2>
        <p>Effortlessly handle your invoices right here</p>
      </div>
      <div className="flex w-full justify-end lg:hidden">
        <Cost subTotal={200} tax={12} total={2000} variant={"invoice"} />
      </div>
      <div className="flex flex-col gap-1 lg:border-[1px] lg:border-shade-50">
        <div className="flex w-full items-center gap-5 ">
          <div className="hidden p-2.5 lg:invisible ">
            <YellowCheckBox />
          </div>{" "}
          <div className="hidden w-full grid-cols-6 bg-white py-4 text-center font-semibold text-shade-300 lg:grid">
            <div>Invoice Id</div>
            <div>Service</div>
            <div>Billing Date</div>
            <div>Amount</div>
            <div>Status</div>
            <div>Actions</div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-6">
          {invoiceData?.map((r: any, index: any) => (
            <div className="w-full" key={index}>
              <div className="hidden w-full lg:flex">
                <DataRow data={r} variant="invoice" index={index} />
              </div>
              <div className="lg:hidden">
                <DataRowSm data={r} variant="invoice" index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden  w-full items-center justify-start lg:flex">
        <DownloadButton maxWidth="fit" />
      </div>
      <div className="sticky bottom-0 grid w-full grid-cols-2 items-center justify-end gap-1 bg-transparent pb-2 lg:hidden">
        <DownloadButton maxWidth="fit" />
        <CheckoutButton />
      </div>

      <div className="x hidden w-full flex-col items-end justify-center gap-6 py-5 lg:flex">
        <Cost subTotal={200} tax={12} total={2000} variant={"invoice"} />
        <div className="hidden w-full justify-end lg:flex">
          <CheckoutButton />
        </div>{" "}
      </div>
    </div>
  );
}

export default Invoices;
