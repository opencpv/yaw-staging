import React from "react";
import { Select as NextUISelect, SelectItem } from "@nextui-org/react";
import { FaCaretDown } from "react-icons/fa";

type Props = {
  options: string[];
  value: string;
  radius?: "full" | "lg" | "md" | "none";
  selectorIcon?: React.ReactNode;
  handleSelectionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({
  options,
  handleSelectionChange,
  value,
  radius,
  selectorIcon,
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
        base: `${width ? width : "w-48"}  mx-auto text-xs `,
        value: "text-xs",
        selectorIcon: "mr-5 h-3 w-3",
        trigger: "px-10",
        label: "hidden",
      }}
      selectorIcon={selectorIcon ? selectorIcon : <FaCaretDown />}
      onChange={handleSelectionChange}
    >
      {options.map((option) => (
        <SelectItem
          key={option.toLowerCase()}
          className="text-neutral-800"
          value={option.toLowerCase()}
        >
          {option}
        </SelectItem>
      ))}
    </NextUISelect>
  );
};

export default Select;
