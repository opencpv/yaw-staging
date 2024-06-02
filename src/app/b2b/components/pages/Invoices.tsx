"use client";
import Cost from "../__shared/Cost";
import InvoiceTable from "../invoice/InvoiceTable";
import { invoiceStore } from "@/store/payment/invoiceStore";
import SearchInput from "@/components/__shared/ui/form/SearchInput";
import { useState } from "react";
import OptionFilterTabs from "@/components/__shared/ui/OptionFilterTabs";
import { customerStore } from "@/store/payment/customerStore";
import CheckoutButton from "../__shared/CheckoutButton";
import { HiOutlineDownload } from "react-icons/hi";
import { Button } from "@/components/__shared/ui/button";
import axios from "axios";
import { title } from "process";
import downloadPdf from "@/lib/utils/downloadPdf";
import ReactPDF, { PDFDownloadLink } from "@react-pdf/renderer";
import { PDFDownload, PDFTemplateObject } from "../__shared/InvoiceTemplate";

type Status = "all" | "paid" | "pending";

type Props = {
  customerId: string;
};
function Invoices({ customerId }: Props) {
  const { checkoutItems } = invoiceStore();
  const [searchString, setSearchString] = useState("");
  const [filter, setFilter] = useState<Status>("all");
  const subTotal = checkoutItems.reduce((acc, item) => acc + item.amount, 0);
  const tax = checkoutItems.reduce(
    (acc, item) => acc + (item.tax_rate / 100) * item.amount,
    0,
  );
  const total = subTotal + tax;
  const { customer } = customerStore();

  const downloadAll = () => {
    checkoutItems.forEach((item) => {
      const button = document.getElementById(`${item.service}-invoice`);
      if (button) {
        button.click();
      }
    });
  };

  return (
    <section className="relative flex flex-col gap-8">
      <div className="absolute left-[-9999px] top-[-9999px]">
        {checkoutItems.map((item, index) => (
          <PDFDownloadLink
            key={index}
            document={
              <PDFTemplateObject
                variant={"invoice"}
                data={item}
                customer={customer}
              />
            }
            fileName={`${item.service}.pdf`}
          >
            <Button size="sm" className="px-4" id={`${item.service}-invoice`}>
              Download
            </Button>
          </PDFDownloadLink>
        ))}
      </div>
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
      <Button
        disabled={checkoutItems.length == 0}
        color="primary"
        className={`text group w-fit gap-2  bg-opacity-20 px-8 font-bold text-[#545454] hover:text-white`}
        onClick={() => {
          downloadAll();
        }}
      >
        Download
        <HiOutlineDownload
          size="24"
          className="shrink-0 group-hover:text-white"
        />
      </Button>
      <section className="hidden w-full justify-between gap-5 bg-[#F8F8F8] py-5  lg:flex">
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
