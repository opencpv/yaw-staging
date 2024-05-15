"use client";
import OptionFilterTabs from "@/components/__shared/ui/OptionFilterTabs";
import { invoiceStore } from "@/store/payment/invoiceStore";
import React from "react";
import Invoices from "../pages/Invoices";
import Receipts from "../pages/Receipts";

type Props = {};

const InvoiceReceiptFilter = (props: Props) => {
  const { activePage, setActivePage } = invoiceStore();

  return (
    <>
      <div className="mb-10">
        <OptionFilterTabs
          options={["invoice", "receipt"]}
          selectedKey={activePage}
          onSelectionChange={setActivePage}
          radius="large"
          padding="wide"
          cursorAnimation
        />
      </div>
      {activePage === "invoice" ? <Invoices /> : <Receipts />}
    </>
  );
};

export default InvoiceReceiptFilter;
