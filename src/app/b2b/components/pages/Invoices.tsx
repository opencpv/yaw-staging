"use client";
import Cost from "../__shared/Cost";
import CheckoutButton from "../__shared/CheckoutButton";
import InvoiceTable from "../invoice/InvoiceTable";
import { invoiceStore } from "@/store/payment/invoiceStore";
import { Button } from "@nextui-org/react";
import PdfTemplate from "../__shared/InvoiceTemplate";
import { saveAs } from "file-saver";
import { customerStore } from "@/store/payment/customerStore";

function Invoices() {
  const { checkoutItems, invoiceItems } = invoiceStore();
  const subTotal =
    checkoutItems.length > 0
      ? checkoutItems.reduce((acc, item) => acc + item.amount, 0)
      : 0;
  const tax =
    checkoutItems.length > 0
      ? checkoutItems.reduce(
          (acc, item) => acc + (item.tax_rate / 100) * item.amount,
          0,
        )
      : 0;
  const total = subTotal + tax;
  const { customer } = customerStore();
  const downloadInvoices = async () => {
    for (const item of checkoutItems) {
      const filename = item.service + ".pdf";
    }
  };

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
      {checkoutItems.length == invoiceItems.length && (
        <Button className="w-fit" onClick={downloadInvoices}>
          Download
        </Button>
      )}
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
