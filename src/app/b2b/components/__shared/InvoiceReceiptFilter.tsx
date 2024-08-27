"use client";
import { Tabs } from "@/components/__shared/ui/tabs";
import { invoiceStore } from "@/store/payment/invoiceStore";
import React, { useEffect, useState } from "react";
import Invoices from "../pages/Invoices";
import Receipts from "../pages/Receipts";
import Forms from "../pages/Forms";
import { createClient } from "@/lib/utils/supabase/auth/client";
import { useSearchParams } from "next/navigation";
import { customerStore } from "@/store/payment/customerStore";

type Props = {
  customerId: string;
};

const InvoiceReceiptFilter = (props: Props) => {
  const searchParams = useSearchParams();
  const id = searchParams?.get("id");

  const {
    activePage,
    setActivePage,
    setCheckoutItems,
    setInvoiceItems,
    setReceiptItems,
  } = invoiceStore();
  const { setCustomer, customer } = customerStore();
  const [loading, setloading] = useState(false);
  const supabaseClient = createClient();

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      let { data: invoices, error } = await supabaseClient
        .from("invoices")
        .select("*")
        .eq("customer", id);
      let { data: customerData, error: customerError } = await supabaseClient
        .from("customers")
        .select("*")
        .eq("customer_id", props.customerId);
      if (customerError) {
        setloading(false);
        console.log(customerError.message);
        return;
      }
      console.log(id);
      if (error) {
        setloading(false);
        console.log(error.message);

        return;
      }
      if (customerData) {
        setCustomer(customerData[0]);
      }
      setInvoiceItems(invoices as Invoice[]);
    };

    setCheckoutItems([]);
    setReceiptItems([]);

    fetchData();
  }, [
    id,
    props.customerId,
    setCheckoutItems,
    setCustomer,
    setInvoiceItems,
    setReceiptItems,
    supabaseClient,
  ]);

  useEffect(() => {
    console.log(customer);
  }, [customer]);
  return (
    <>
      <div className="mb-10">
        <Tabs
          options={["Invoice", "Receipt", "Forms"]}
          selectedKey={activePage}
          onSelectionChange={setActivePage}
          variant="rounded"
        />
      </div>
      {activePage === "Invoice" ? (
        <Invoices customerId={props.customerId} />
      ) : activePage === "Receipt" ? (
        <Receipts customerId={props.customerId} />
      ) : (
        <Forms />
      )}
    </>
  );
};

export default InvoiceReceiptFilter;
