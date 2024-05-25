"use client";
import OptionFilterTabs from "@/components/__shared/ui/OptionFilterTabs";
import { invoiceStore } from "@/store/payment/invoiceStore";
import React from "react";
import Invoices from "../pages/Invoices";
import Receipts from "../pages/Receipts";
import Forms from "../pages/Forms";

type Props = {
  customerId: string;
};

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
          tabColor="colored"
          cursorAnimation
        />
      </div>
      {activePage === "invoice" ? (
        <Invoices customerId={props.customerId} />
      ) : activePage === "receipt" ? (
        <Receipts customerId={props.customerId} />
      ) : (
        <Forms />
      )}
    </>
  );
};

export default InvoiceReceiptFilter;
