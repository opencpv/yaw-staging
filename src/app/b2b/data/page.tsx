"use client";
import { useManageInvoicesStore } from "@/store/dashboard/propertiesStore";
import { Button } from "@nextui-org/react";
import Invoices from "../components/Invoices";
import Receipts from "../components/Receipts";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

function Page() {
  const optionSelect = useManageInvoicesStore(
    (state: any) => state.filterOption
  );
  const handleOptionChange = useManageInvoicesStore(
    (state: any) => state.changeOption
  );

  return (
    <div className=" flex flex-col items-center justify-start bg-[#F8F8F8]">
      <div className="bg-[url('/assets/images/b2b-home.png')] bg-no-repeat bg-cover h-[468px] w-full max-w-[1728px] text-[2.4375rem] font-bold text-white flex items-center justify-center">
        <p className="uppercase">invoices & receipts</p>
      </div>
      <div className="w-full max-w-[1728px]">
        <Tabs
          variant="light"
          aria-label="Tabs variants"
          // radius="full"
          classNames={{
            base: " w-full md:w-fit rounded-2xl p-[0.75rem] md:overflow-hidden",
            tabList: " gap-4",
            tab: "bg-[#ECF2F3] px-4 py-3 w-[120px]  rounded-2xl",
            tabContent:
              "text-shade-200 text-[0.625rem] group-data-[selected=true]:text-white group-data-[selected=true]:font-semibold ",
            cursor: "bg-[#45808B] sm:bg-[#45808B] text-white rounded-2xl",
            panel: "pt-8",
          }}
          selectedKey={optionSelect}
          onSelectionChange={(selectedOption) =>
            handleOptionChange(selectedOption)
          }>
          <Tab key="invoices" title="Invoices">
            <Invoices />
          </Tab>{" "}
          <Tab key="receipts" title="Receipts">
            <Receipts />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Page;
