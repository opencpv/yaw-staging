"use client";
import { Selection, Tab, Tabs } from "@nextui-org/react";
import React, { useState } from "react";

const OptionFilterTab = () => {
  const [selected, setSelected] = useState<
    | "all"
    | "available"
    | "contract pending"
    | "leased"
    | "dormant"
    | "payment pending"
  >("all");

  return (
    <div className="flex flex-wrap gap-4">
      <Tabs
        variant="light"
        aria-label="Tabs variants"
        radius="full"
        classNames={{
          tab: "bg-slate-100 min-w-[5rem] px-8",
          tabContent:
            "text-primary-500 text-[0.6rem] group-data-[selected=true]:text-white",
          cursor: "bg-[#45808B] text-white",
          panel: "bg-primary-400",
        }}
        selectedKey={selected}
        onSelectionChange={setSelected}
      >
        <Tab key="all" title="All" />
        <Tab key="available" title="Available" />
        <Tab key="contract pending" title="Contract Pending" />
        <Tab key="leased" title="Leased" />
        <Tab key="dormant" title="Dormant" />
        <Tab key="payment pending" title="Payment Pending" />
      </Tabs>
    </div>
  );
};

export default OptionFilterTab;
