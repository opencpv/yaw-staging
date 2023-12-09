"use client";
import capitalizeName from "@/lib/utils/stringManipulation";
import { Selection, Tab, Tabs } from "@nextui-org/react";
import React from "react";

type Props = {
  radius?: "large" | "small";
  options: string[];
  onSelectionChange: (key: string) => void;
  variant?: "default" | "gradient";
  selectedKey?: string;
};

const OptionFilterTabs = ({
  radius,
  options,
  selectedKey,
  onSelectionChange,
  variant,
}: Props) => {
  return (
    <>
      <Tabs
        variant="light"
        aria-label="Tabs variants"
        // radius="full"
        classNames={{
          base: "bg-transparent transition-all",
          tabList: [
            variant === "gradient" ? "gap-x-16" : null,
            "justify-center",
            "flex-wrap",
             "xl:flex-nowrap"
          ],
          tab: [
            variant === "gradient" ? null : "bg-slate-100",
            variant === "gradient" ? "px-2 data-[selected=true]:px-12 h-10" : "px-4",
            "min-w-fit",
            "max-w-fit",
            variant === "gradient"
              ? "data-[selected=true]:bg-gradient-to-r data-[selected=true]:from-[#21A19F] data-[selected=true]:to-[#1EA9A6A1]"
              : "data-[selected=true]:bg-[#45808B]",
            radius === "small" ? "rounded-lg" : "rounded-large",
          ],
          tabContent: [
            variant === "gradient" ? "text-neutral-600" : "text-primary-500",
            "text-[0.6rem]",
            "text-sm",
            "group-data-[selected=true]:text-white",
          ],
          // panel: "bg-primary-400",
        }}
        selectedKey={selectedKey}
        onSelectionChange={(key) => onSelectionChange(key as string)}
        disableCursorAnimation
      >
        {options.map((option) => (
          <Tab key={option} title={capitalizeName(option, " ")} />
        ))}
      </Tabs>
    </>
  );
};

export default OptionFilterTabs;
