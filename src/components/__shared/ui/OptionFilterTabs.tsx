"use client";
import capitalizeName, { LowerCase } from "@/lib/utils/stringManipulation";
import { Tab, Tabs } from "@nextui-org/react";
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
  selectedKey?: React.Key;
  cursorAnimation?: boolean;
};

const OptionFilterTabs = (
  {
    radius,
    options,
    selectedKey,
    onSelectionChange,
    variant = "default",
    padding,
    tabColor,
    cursorAnimation,
  }: Props,
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
          base: [
            variant === "gradient" && "w-full",
            "bg-transparent transition-all",
          ],
          tabList: [
            variant === "gradient" ? "gap-x-8 w-full" : null,
            "justify-center",
            variant === "gradient"
              ? "flex-col sm:flex-row sm:flex-wrap xl:flex-nowrap"
              : "flex flex-wrap",
          ],
          tab: [
            variant === "gradient"
              ? null
              : tabColor === "colored"
                ? "bg-slate-100"
                : "bg-transparent",
            variant === "gradient" ? "px-12 h-10 flex-initial" : "px-4 flex-1",
            "w-auto w-full sm:max-w-[200px] sm:w-fit",
            variant === "gradient"
              ? "data-[selected=true]:bg-gradient-to-r data-[selected=true]:from-[#21A19F] data-[selected=true]:to-[#1EA9A6A1]"
              : "data-[selected=true]:bg-primary-500",
            radius === "small" ? "rounded-lg" : "rounded-full",
            padding === "wide" && "px-8 sm:px-20",
            padding === "medium" && "px-5 xs:px-8",
            "py-5",
            cursorAnimation && "data-[selected=true]:bg-transparent",
          ],
          tabContent: [
            variant === "gradient" ? "text-neutral-600" : "text-primary-500",
            "text-[0.6rem]",
            "text-sm",
            "group-data-[selected=true]:text-white",
          ],
          cursor: [
            variant == "green1" && "bg-primary-100",
            variant === "gradient" &&
              "bg-gradient-to-r from-[#21A19F] to-[#1EA9A6A1]",
            variant == "default" &&
              "bg-primary-500 dark:bg-primary-500 shadow-none",
            !cursorAnimation && "bg-transparent dark:bg-transparent",
            "rounded-full",
          ],
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
