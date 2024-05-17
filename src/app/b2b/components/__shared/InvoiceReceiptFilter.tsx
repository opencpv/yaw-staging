"use client";
import OptionFilterTabs from "@/components/__shared/ui/OptionFilterTabs";
import { invoiceStore } from "@/store/payment/invoiceStore";
import React from "react";
import Invoices from "../pages/Invoices";
import Receipts from "../pages/Receipts";
import Forms from "../pages/Forms";

type Props = {};

const InvoiceReceiptFilter = (props: Props) => {
  const { activePage, setActivePage } = invoiceStore();

  return (
    <>
      <div className="mb-10">
        <OptionFilterTabs
          options={["invoice", "receipt", "forms"]}
          selectedKey={activePage}
          onSelectionChange={setActivePage}
          radius="large"
          padding="wide"
          cursorAnimation
        />
      </div>
      {activePage === "invoice" ? (
        <Invoices />
      ) : activePage === "receipt" ? (
        <Receipts />
      ) : (
        <Forms />
      )}
    </>
  );
};

export default InvoiceReceiptFilter;
