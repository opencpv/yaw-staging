import React from "react";
import { Select as NextUISelect, SelectItem, cn } from "@nextui-org/react";
import { FaCaretDown } from "react-icons/fa";
import { LowerCase } from "@/lib/utils/stringManipulation";

type Props = {
  options: string[];
  value: string;
  handleSelectionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  radius?: "full" | "lg" | "md" | "none";
  variant?: "default" | "ghost";
  color?: "default" | "primary";
  selectorIcon?: React.ReactNode;
  className?: string;
};

const Select = ({
  options,
  handleSelectionChange,
  value,
  radius,
  selectorIcon,
  className,
  variant,
  color,
}: Props) => {
  return (
    <NextUISelect
      size="sm"
      radius={radius ? radius : "full"}
      label="select"
      //   selectionMode="single"
      labelPlacement="outside"
      selectedKeys={[value]}
      classNames={{
        // mainWrapper: [variant === "ghost" && "hover:bg-transparent"],
        base: cn("w-48 mx-auto text-xs", className, {
          "text-base": variant === "ghost",
        }),
        value: cn("text-xs", {
          "text-base": variant === "ghost",
        }),
        selectorIcon: cn(`mr-5 h-3 w-3`, {
          "text-accent-50": color === "default",
          "text-primary-100": color === "primary",
          "h-4.5 w-4.5 mr-0": variant === "ghost",
        }),
        trigger: cn("px-10 z-30", {
          "pl-1 text-base bg-transparent shadow-none": variant === "ghost",
        }),
        label: "hidden",
      }}
      selectorIcon={selectorIcon ? selectorIcon : <FaCaretDown />}
      onChange={handleSelectionChange}
    >
      {options.map((option) => (
        <SelectItem
          key={LowerCase(option)}
          className={cn("text-neutral-800", {
            "text-base": variant === "ghost",
            "data-[hover=true]:bg-primary-100 data-[focus-visible=true]:outline-primary-100 data-[selectable=true]:focus:bg-primary-100":
              color === "primary",
            "data-[hover=true]:bg-accent-50 data-[focus-visible=true]:outline-accent-50 data-[selectable=true]:focus:bg-accent-50":
              color === "default",
          })}
          value={LowerCase(option)}
        >
          {option}
        </SelectItem>
      ))}
    </NextUISelect>
  );
};

export default Select;
