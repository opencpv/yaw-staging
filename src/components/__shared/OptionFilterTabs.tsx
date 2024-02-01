"use client";
import capitalizeName, { LowerCase } from "@/lib/utils/stringManipulation";
import { Tab, Tabs } from "@nextui-org/react";
import React, { LegacyRef, forwardRef } from "react";
import { ReactRef } from "@nextui-org/react-utils";

type Props = {
  /** You can use any case. The key is converted to lowercase Eg: ["First", "SECOND"] --> "first", "second" */
  options: string[];
  radius?: "large" | "small";
  padding?: "small" | "wide";
  tabColor?: "transparent" | "colored";
  onSelectionChange: (key: React.Key) => void;
  variant?: "default" | "gradient";
  selectedKey?: React.Key;
};

const OptionFilterTabs = (
  { radius, options, selectedKey, onSelectionChange, variant, padding, tabColor }: Props,
  ref: any,
) => {
  return (
    <>
      <Tabs
        ref={ref}
        variant="light"
        aria-label="Tabs variants"
        // radius="full"
        classNames={{
          base: "bg-transparent transition-all",
          tabList: [
            variant === "gradient" ? "gap-x-8" : null,
            "justify-center",
            variant === "gradient"
              ? "flex-col sm:flex-row sm:flex-wrap xl:flex-nowrap"
              : "flex flex-wrap",
          ],
          tab: [
            variant === "gradient" ? null : "bg-slate-100",
            variant === "gradient" ? "px-12 h-10 flex-initial" : "px-4 flex-1",
            tabColor === "transparent" && "bg-transparent",
            "w-auto max-w-[200px]",
            variant === "gradient"
              ? "data-[selected=true]:bg-gradient-to-r data-[selected=true]:from-[#21A19F] data-[selected=true]:to-[#1EA9A6A1]"
              : "data-[selected=true]:bg-[#45808B]",
            radius === "small" ? "rounded-lg" : "rounded-full",
            padding === "wide" && "px-20",
            "py-5",
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
        onSelectionChange={onSelectionChange}
        disableCursorAnimation
      >
        {options.map((option) => (
          <Tab key={LowerCase(option)} title={capitalizeName(option, " ")} />
        ))}
      </Tabs>
    </>
  );
};

export default forwardRef(OptionFilterTabs);
