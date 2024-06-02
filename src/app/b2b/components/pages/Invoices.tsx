"use client";
import Cost from "../__shared/Cost";
import CheckoutButton from "../__shared/CheckoutButton";
import InvoiceTable from "../invoice/InvoiceTable";
import { invoiceStore } from "@/store/payment/invoiceStore";
import SearchInput from "@/components/__shared/ui/form/SearchInput";
import { useState } from "react";
import OptionFilterTabs from "@/components/__shared/ui/OptionFilterTabs";

type Status = "all" | "paid" | "pending";

type Props = {
  customerId: string;
};
function Invoices({ customerId }: Props) {
  const { checkoutItems } = invoiceStore();
  const [searchString, setSearchString] = useState("");
  const [filter, setFilter] = useState<Status>("all");
  const subTotal = checkoutItems.reduce((acc, item) => acc + item.amount, 0);
  const tax = 12;
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
        <SearchInput
          onChange={(e) => setSearchString(e.target.value)}
          className="mt-5"
          placeholder="Search invoice ID"
        />
      </div>
      <OptionFilterTabs
        options={["all", "paid", "pending"]}
        selectedKey={filter}
        onSelectionChange={(key) => setFilter(key as Status)}
        radius="small"
        padding="small"
        tabColor="colored"
      />
      <InvoiceTable
        searchString={searchString}
        customerId={customerId}
        filter={filter}
      />

      <section className="hidden w-full justify-between gap-5 bg-[#F8F8F8] py-5 lg:flex">
        <div />
        <div>
          <Cost
            subTotal={subTotal}
            tax={tax}
            total={total}
            variant={"invoice"}
          />
          <div className="mt-8">
            <CheckoutButton affix={checkoutItems.length} />
          </div>
        </div>
      </section>
      <section className="mt-10 flex w-full justify-end lg:hidden">
        <Cost subTotal={subTotal} tax={tax} total={total} variant={"invoice"} />
      </section>
      <section className="sticky bottom-0 z-50 grid w-full grid-cols-2 items-center justify-end gap-5 bg-[#F8F8F8] py-5 pb-2 max-lg:max-w-2xl lg:hidden">
        <div />
        <CheckoutButton affix={checkoutItems.length} />
      </section>
    </section>
  );
}

export default Invoices;
