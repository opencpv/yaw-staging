"use client";
import SearchInput from "@/components/__shared/ui/form/search-input";
import DownloadButton from "../__shared/DownloadButton";
import ReceiptTable from "../receipt/ReceiptTable";
import { useState } from "react";
import { invoiceStore } from "@/store/payment/invoiceStore";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PDFTemplateObject } from "../__shared/InvoiceTemplate";
import { customerStore } from "@/store/payment/customerStore";
import { Button } from "@/components/__shared/ui/button";
import { HiOutlineDownload } from "react-icons/hi";

type Props = {
  customerId: string;
};

function Receipts({ customerId }: Props) {
  const [searchString, setSearchString] = useState("");
  const { receiptItem } = invoiceStore();
  const { customer } = customerStore();

  const downloadAll = () => {
    receiptItem.forEach((item) => {
      const button = document.getElementById(`${item.service}-receipt`);
      if (button) {
        button.click();
      }
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="absolute left-[-9999px] top-[-9999px]">
        {receiptItem.map((item, index) => (
          <PDFDownloadLink
            key={index}
            document={
              <PDFTemplateObject
                variant={"receipt"}
                data={item}
                customer={customer}
              />
            }
            fileName={`${item.service}-receipt.pdf`}
          >
            <Button size="sm" id={`${item.service}-receipt`}>
              Download
            </Button>
          </PDFDownloadLink>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <h2>All Receipts</h2>
        <h4 className="font-normal">
          Effortlessly handle your receipts right here
        </h4>
        <SearchInput
          onChange={(e) => setSearchString(e.target.value)}
          className="mt-5"
          placeholder="Search receipt ID"
        />
      </div>
      <ReceiptTable searchString={searchString} customerId={customerId} />
      <Button
        color="primary"
        disabled={receiptItem.length == 0}
        className={`text group bg-opacity-20 text-shade-500 hover:text-white`}
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
      <div className="hidden w-full items-center justify-end lg:flex">
        {/* <DownloadButton maxWidth="fit" /> */}
      </div>

      <div className="sticky bottom-0 w-full items-center justify-end gap-5 bg-shade pb-3 lg:hidden">
        {/* <DownloadButton /> */}
      </div>
    </div>
  );
}

export default Receipts;
