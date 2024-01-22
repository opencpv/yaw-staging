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
          "h-4.5 w-4.5": variant === "ghost",
        }),
        trigger: cn("px-10 z-30", {
          "px-0 text-base bg-transparent shadow-none hover:bg-transparent":
            variant === "ghost",
        }),
        listboxWrapper: cn("hover:bg-neutral-100 hover:text-neutral-800", {
          "hover:bg-accent-50 hover:text-white": color === "default",
          "hover:bg-primary-100 hover:text-white": color === "primary",
          "text-base": variant === "ghost",
        }),
        label: "hidden",
      }}
      selectorIcon={
        selectorIcon ? (
          selectorIcon
        ) : (
          <FaCaretDown
            className={`${
              color === "default"
                ? "text-accent-50"
                : color === "primary" && "text-primary text-red-500"
            }`}
          />
        )
      }
      onChange={handleSelectionChange}
    >
      {options.map((option) => (
        <SelectItem
          key={LowerCase(option)}
          className="text-neutral-800"
          value={LowerCase(option)}
        >
          {option}
        </SelectItem>
      ))}
    </NextUISelect>
  );
};

export default Select;
