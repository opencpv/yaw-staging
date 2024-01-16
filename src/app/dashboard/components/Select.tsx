import React from "react";
import { Select as NextUISelect, SelectItem, cn } from "@nextui-org/react";
import { FaCaretDown } from "react-icons/fa";
import { LowerCase } from "@/lib/utils/stringManipulation";

type Props = {
  options: string[];
  value: string;
  handleSelectionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  radius?: "full" | "lg" | "md" | "none";
  selectorIcon?: React.ReactNode;
  className?: string;
};

const Select = ({ options, handleSelectionChange, value, radius, selectorIcon, className }: Props) => {
  return (
    <NextUISelect
      size="sm"
      radius={radius ? radius : "full"}
      label="select"
      //   selectionMode="single"
      labelPlacement="outside"
      selectedKeys={[value]}
      classNames={{
        base: cn('w-48 mx-auto text-xs', className),
        value: "text-xs",
        selectorIcon: "mr-5 h-3 w-3",
        trigger: "px-10 z-30",
        label: "hidden",
      }}
      selectorIcon={selectorIcon ? selectorIcon : <FaCaretDown />}
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
