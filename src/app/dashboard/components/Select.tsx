import React, { useState } from "react";
import { Select as NextUISelect, SelectItem } from "@nextui-org/react";
import { FaCaretDown } from "react-icons/fa";

type Props = {
  options: string[];
  value: string;
  handleSelectionChange: () => void
};

const Select = ({ options, handleSelectionChange, value }: Props) => {

  return (
    <NextUISelect
      size="sm"
      radius="full"
      label="available"
      //   selectionMode="single"
      labelPlacement="outside"
      selectedKeys={[value]}
      classNames={{
        base: "w-48 mx-auto text-xs",
        value: "text-xs",
        selectorIcon: "mr-5",
        trigger: "px-10",
        label: "hidden",
      }}
      selectorIcon={<FaCaretDown />}
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
