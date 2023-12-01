"use client";
import capitalizeName from "@/lib/utils/capitalizeName";
import { Selection, Tab, Tabs } from "@nextui-org/react";
import React from "react";

type Props = {
  radius?: "large" | "small";
  onSelectionChange: (key: string) => void;
  selectedKey?: string;
  options: string[];
};

const OptionFilterTabs = ({
  radius,
  options,
  selectedKey,
  onSelectionChange,
}: Props) => {
  return (
    <>
      <Tabs
        variant="light"
        aria-label="Tabs variants"
        // radius="full"
        classNames={{
          base: "bg-transparent",
          tabList: "flex-wrap xl:flex-nowrap",
          tab: [
            "bg-slate-100",
            "px-4",
            "min-w-fit",
            "max-w-fit",
            radius === "small" ? "rounded-lg" : "rounded-large",
          ],
          tabContent:
            "text-primary-500 text-[0.6rem] md:text-sm group-data-[selected=true]:text-white",
          cursor: [
            "bg-[#45808B]",
            "sm:bg-[#45808B]",
            "text-white",
            radius === "small" ? "rounded-lg" : "rounded-large",
          ],
          panel: "bg-primary-400",
        }}
        selectedKey={selectedKey}
        onSelectionChange={(key) => onSelectionChange(key as string)}
      >
        {options.map((option) => (
          <Tab key={option} title={capitalizeName(option, " ")} />
        ))}
      </Tabs>
    </>
  );
};

export default OptionFilterTabs;
