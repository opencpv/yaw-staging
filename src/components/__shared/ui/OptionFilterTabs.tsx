"use client";
import capitalizeName, { LowerCase } from "@/lib/utils/stringManipulation";
import { Tab, Tabs, cn } from "@nextui-org/react";
import React, { forwardRef } from "react";

type Option = {
  label: string;
  icon?: React.ReactNode;
};

type Props = {
  /** You can use any case. The key is converted to lowercase Eg: ["First", "SECOND"] --> "first", "second" */
  options: (string | Option)[];
  radius?: "large" | "small";
  padding?: "small" | "medium" | "wide";
  tabColor?: "transparent" | "colored";
  onSelectionChange: (key: React.Key) => void;
  variant?: "default" | "gradient" | "green1";
  selectedKey?: any;
  cursorAnimation?: boolean;
  classNames?: {
    base?: string;
    tabList?: string;
  };
};

const OptionFilterTabs = (
  {
    radius,
    options,
    selectedKey,
    onSelectionChange,
    variant = "default",
    padding = "medium",
    tabColor,
    cursorAnimation,
    classNames,
  }: Props,
  ref: any,
) => {
  return (
    <>
      <Tabs
        ref={ref}
        variant="light"
        aria-label="Tabs variants"
        classNames={{
          base: cn(
            "bg-transparent transition-all",
            {
              "w-full": variant === "gradient",
            },
            classNames?.base,
          ),
          tabList: cn(
            "justify-center flex flex-wrap",
            {
              "gap-x-8 w-full flex-col sm:flex-row sm:flex-wrap xl:flex-nowrap":
                variant === "gradient",
            },
            classNames?.tabList,
          ),
          tab: cn(
            "bg-transparent px-4 py-5 flex-1 w-auto w-full rounded-full data-[selected=true]:bg-primary sm:max-w-[200px] sm:w-fit",
            {
              "px-12 h-10 flex-initial data-[selected=true]:bg-gradient-to-r data-[selected=true]:from-[#21A19F] data-[selected=true]:to-[#1EA9A6A1]":
                variant === "gradient",
              "bg-primary-50": tabColor === "colored",
              "rounded-lg": radius === "small",
              "px-8 sm:px-20": padding === "wide",
              "px-5 xs:px-8": padding === "medium",
              "data-[selected=true]:bg-transparent": cursorAnimation,
            },
          ),
          tabContent: cn(
            "text-primary text-[0.6rem] text-sm group-data-[selected=true]:text-white",
            {
              "text-neutral-600": variant === "gradient",
            },
          ),
          cursor: cn("rounded-full", {
            "bg-primary-100": variant === "green1",
            "bg-gradient-to-r from-[#21A19F] to-[#1EA9A6A1]":
              variant === "gradient",
            "bg-primary dark:bg-primary shadow-none": variant === "default",
            "rounded-lg": radius === "small",
            "bg-transparent dark:bg-transparent": !cursorAnimation,
          }),
        }}
        selectedKey={selectedKey}
        onSelectionChange={onSelectionChange}
        disableCursorAnimation={!cursorAnimation}
      >
        {options.map((option) => (
          <Tab
            key={
              typeof option !== "string"
                ? LowerCase(option.label)
                : LowerCase(option)
            }
            title={
              <div className="flex items-center space-x-2">
                {typeof option !== "string" ? (
                  <>
                    <span>{capitalizeName(option.label, " ")}</span>
                    {option.icon && option.icon}
                  </>
                ) : (
                  <span>{capitalizeName(option, " ")}</span>
                )}
              </div>
            }
            tabIndex={0}
          />
        ))}
      </Tabs>
    </>
  );
};

export default forwardRef(OptionFilterTabs);
