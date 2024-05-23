"use client";
import Cost from "../__shared/Cost";
import CheckoutButton from "../__shared/CheckoutButton";
import InvoiceTable from "../invoice/InvoiceTable";
import { invoiceStore } from "@/store/payment/invoiceStore";

function Invoices() {
  const { checkoutItems } = invoiceStore();
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
      </div>
      <div className="mt-10 flex w-full justify-end lg:hidden">
        <Cost subTotal={subTotal} tax={tax} total={total} variant={"invoice"} />
      </div>
      <InvoiceTable />

      <section className="hidden w-full justify-between gap-5 bg-[#F8F8F8] py-5 lg:flex">
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
        <div />
        <CheckoutButton affix={checkoutItems.length} />
      </section>
    </section>
  );
}

export default Invoices;
