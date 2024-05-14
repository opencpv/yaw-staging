"use client";
import { invoiceStore } from "@/store/payment/invoiceStore";
import { Button } from "@nextui-org/react";
import Invoices from "../components/Invoices";
import Receipts from "../components/Receipts";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import OptionFilterTabs from "@/components/__shared/ui/OptionFilterTabs";

function Page() {
  const { activePage, setActivePage } = invoiceStore();

  return (
    <main className="wrapper bg-[#F8F8F8]">
      <OptionFilterTabs
        options={["invoice", "receipt"]}
        selectedKey={activePage}
        onSelectionChange={setActivePage}
        radius="large"
        padding="wide"
        cursorAnimation
      />

      {activePage === "invoice" ? <Invoices /> : <Receipts />}
    </main>
  );
}

export default Page;
