"use client";
import Cost from "../__shared/Cost";
import DownloadButton from "../__shared/DownloadButton";
import CheckoutButton from "../__shared/CheckoutButton";
import InvoiceTable from "../invoice/InvoiceTable";
import { invoiceStore } from "@/store/payment/invoiceStore";
import SearchInput from "@/components/__shared/ui/form/SearchInput";
import { useState } from "react";

type Props = {
  customerId: string;
};
function Invoices({ customerId }: Props) {
  const { checkoutItems } = invoiceStore();
  const [searchString, setSearchString] = useState("");
  const subTotal = checkoutItems.reduce((acc, item) => acc + item.amount, 0);
  const tax = 12;
  const total = subTotal + tax;

  return (
    <section className="relative flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h2>All Invoices</h2>
        <h4 className="font-normal">
          Effortlessly handle your invoices right here
        </h4>
        <SearchInput
          onChange={(e) => setSearchString(e.target.value)}
          className="mt-5"
          placeholder="Search invoice ID"
        />
      </div>
      <div className="mt-10 flex w-full justify-end lg:hidden">
        <Cost subTotal={subTotal} tax={tax} total={total} variant={"invoice"} />
      </div>
      <InvoiceTable searchString={searchString} customerId={customerId} />

      <section className="hidden w-full justify-between gap-5 bg-[#F8F8F8] py-5 lg:flex">
        {/* <DownloadButton maxWidth="fit"  /> */}
        <div />
        <div>
          <Cost
            subTotal={subTotal}
            tax={tax}
            total={total}
            variant={"invoice"}
          />
          <div className="mt-8 max-lg:hidden">
            <CheckoutButton affix={checkoutItems.length} />
          </div>
        </div>
      </section>
      <section className="sticky bottom-0 z-50 grid w-full grid-cols-2 items-center justify-end gap-5 bg-[#F8F8F8] py-5 pb-2 max-lg:max-w-2xl lg:hidden">
        {/* <DownloadButton maxWidth="fit" /> */}
        <div />
        <CheckoutButton affix={checkoutItems.length} />
      </section>
    </section>
  );
}

export default Invoices;
