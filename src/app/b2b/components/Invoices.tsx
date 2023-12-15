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
    <div className="flex flex-col gap-8 relative">
      <div className="flex flex-col gap-4">
        <p className="text-[1.5625rem] font-semibold">All Invoices</p>
        <p>Effortlessly handle your invoices right here</p>
      </div>
      <div className="lg:hidden w-full flex justify-end">
        <Cost subTotal={200} tax={12} total={2000} variant={"invoice"} />
      </div>
      <div className="flex flex-col gap-1 lg:border-[1px] lg:border-shade-50">
        <div className="flex gap-5 items-center w-full ">
          <div className="p-2.5 hidden lg:invisible ">
            <YellowCheckBox />
          </div>{" "}
          <div className="hidden lg:grid grid-cols-6 bg-white py-4 text-center text-shade-300 font-semibold w-full">
            <div>Invoice Id</div>
            <div>Service</div>
            <div>Billing Date</div>
            <div>Amount</div>
            <div>Status</div>
            <div>Actions</div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6">
          {invoiceData?.map((r: any, index: number) => (
            <div className="w-full" key={index}>
              <div className="hidden lg:flex w-full">
                <DataRow data={r} variant="invoice" index={index} />
              </div>
              <div className="lg:hidden">
                <DataRowSm data={r} variant="invoice" index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full  justify-start items-center hidden lg:flex">
        <DownloadButton maxWidth="fit" />
      </div>
      <div className="w-full sticky bottom-0 pb-2 bg-transparent justify-end items-center lg:hidden gap-1 grid grid-cols-2">
        <DownloadButton maxWidth="fit" />
        <CheckoutButton />
      </div>

      <div className="w-full x justify-center items-end flex-col gap-6 py-5 hidden lg:flex">
        <Cost subTotal={200} tax={12} total={2000} variant={"invoice"} />
        <div className="w-full justify-end hidden lg:flex">
          <CheckoutButton />
        </div>{" "}
      </div>
    </div>
  );
}

export default Invoices;
