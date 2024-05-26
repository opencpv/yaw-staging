"use client";
import OptionFilterTabs from "@/components/__shared/ui/OptionFilterTabs";
import { invoiceStore } from "@/store/payment/invoiceStore";
import React, { useEffect, useState } from "react";
import Invoices from "../pages/Invoices";
import Receipts from "../pages/Receipts";
import Forms from "../pages/Forms";
import { createClient } from "@/lib/utils/supabase/auth/client";
import { useSearchParams } from "next/navigation";
import { PaymentData } from "../types";

type Props = {};

const InvoiceReceiptFilter = (props: Props) => {
  const searchParams = useSearchParams();
  const id = searchParams?.get("id");

  const { activePage, setActivePage } = invoiceStore();
  const [loading, setloading] = useState(false);
  const supabaseClient = createClient();
  const { setCheckoutItems } = invoiceStore();

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      let { data: invoices, error } = await supabaseClient
        .from("invoices")
        .select("*")
        .eq("customer", id);

      if (error) {
        setloading(false);
        console.log(error.message);

        return;
      }
      const invoicesOnly = invoices?.filter(
        (invoice: any) => invoice.type === "INVOICE",
      );
      const receiptsOnly = invoices?.filter(
        (invoice: any) => invoice.is_paid == true,
      );

      setCheckoutItems(invoices as PaymentData[]);
    };

    fetchData();
  }, []);

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
