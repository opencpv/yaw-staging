"use client";
import { Checkbox as NextUICheckbox } from "@nextui-org/react";
import React from "react";

const Checkbox = ({ isSelected, onValueChange, name, label }: CheckboxProps) => {
  return (
    <NextUICheckbox
      classNames={{
        icon: "text-primary-200",
        // icon: "text-white bg-primary-200 text-xs rounded-md h-fit w-fit",
        label: "text-sm text-neutral-800",
      }}
      name={name}
      color="default"
      isSelected={isSelected}
      onValueChange={onValueChange}
    >
      {label}
    </NextUICheckbox>
  );
};

export default Checkbox;
