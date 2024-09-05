"use client";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/__shared/ui/tabs/tabs";
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

  const { setCheckoutItems, setInvoiceItems, setReceiptItems } = invoiceStore();
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
      <Tabs defaultValue="Invoice" variant="rounded">
        <TabsList className="mb-10">
          <TabsTrigger variant="rounded" value="Invoice">
            Invoices
          </TabsTrigger>
          <TabsTrigger variant="rounded" value="Receipt">
            Receipts
          </TabsTrigger>
          <TabsTrigger variant="rounded" value="Forms">
            Forms
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Invoice">
          <Invoices customerId={props.customerId} />
        </TabsContent>
        <TabsContent value="Receipt">
          <Receipts customerId={props.customerId} />
        </TabsContent>
        <TabsContent value="Forms">
          <Forms />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default InvoiceReceiptFilter;
