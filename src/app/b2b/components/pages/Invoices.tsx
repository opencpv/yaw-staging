"use client";
import Cost from "../__shared/Cost";
import InvoiceTable from "../invoice/InvoiceTable";
import { invoiceStore } from "@/store/payment/invoiceStore";
import SearchInput from "@/components/__shared/ui/form/search-input";
import { useState } from "react";
import { Tabs } from "@/components/__shared/ui/tabs";
import { customerStore } from "@/store/payment/customerStore";
import CheckoutButton from "../__shared/CheckoutButton";
import { HiOutlineDownload } from "react-icons/hi";
import { Button } from "@/components/__shared/ui/button";
import axios from "axios";
import { title } from "process";
import downloadPdf from "@/lib/utils/downloadPdf";
import ReactPDF, { PDFDownloadLink } from "@react-pdf/renderer";
import { PDFDownload, PDFTemplateObject } from "../__shared/InvoiceTemplate";
import CaCard from "@/components/__shared/ui/icons/CaCard";
import theme from "tailwindcss/defaultTheme";
import { IoArchiveOutline } from "react-icons/io5";
import ArchivedButton from "@/components/__shared/ui/table/archived-button";

type Status = "All" | "Paid" | "Pending";

type Props = {
  customerId: string;
};
function Invoices({ customerId }: Props) {
  const { checkoutItems } = invoiceStore();
  const [searchString, setSearchString] = useState("");
  const [filter, setFilter] = useState<Status>("All");
  const subTotal = checkoutItems.reduce(
    (acc, item) => (item.is_paid ? 0 : acc + item.amount),
    0,
  );
  const tax = checkoutItems.reduce(
    (acc, item) =>
      item.is_paid ? 0 : acc + (item.tax_rate / 100) * item.amount,
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
            <Button id={`${item.service}-invoice`}>Download</Button>
          </PDFDownloadLink>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <h2>All Invoices</h2>
        <h4 className="font-normal">
          Effortlessly handle your invoices right here
        </h4>
        {/* <SearchInput
          onChange={(e) => setSearchString(e.target.value)}
          className="mt-5"
          placeholder="Search invoice ID"
        /> */}
      </div>
      <div className="flex flex-wrap items-center justify-between">
        <Tabs
          options={["All", "Paid", "Pending"]}
          selectedKey={filter}
          onSelectionChange={(key) => setFilter(key as Status)}
        />
        <div className="flex gap-2">
          <Button>
            Checkout <CaCard />
          </Button>
          <Button
            className="bg-primary-50 text-primary"
            onClick={() => {
              downloadAll();
            }}
          >
            Download{" "}
            <HiOutlineDownload
              size="24"
              className="shrink-0 group-hover:text-white"
            />
          </Button>
          {/* <Button
            color=""
            className="gap-2 bg-primary-50 text-[#11605E] hover:text-white"
          >
            Archive <IoArchiveOutline />
          </Button> */}
          <ArchivedButton showingArchived={false} />
        </div>
      </div>
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
            <CheckoutButton
              affix={
                checkoutItems.filter((items) => items.is_paid == false).length
              }
            />
          </div>
        </div>
      </section>
      <section className="mt-10 flex w-full justify-end lg:hidden">
        <Cost subTotal={subTotal} tax={tax} total={total} variant={"invoice"} />
      </section>
      <section className="sticky bottom-0 z-50 grid w-full grid-cols-2 items-center justify-end gap-5 bg-shade py-5 pb-2 max-lg:max-w-2xl lg:hidden">
        <div />
        <CheckoutButton
          affix={checkoutItems.filter((items) => items.is_paid == false).length}
        />
      </section>
    </section>
  );
}

export default Invoices;
