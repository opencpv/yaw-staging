"use client";
import { Checkbox as NextUICheckbox } from "@nextui-org/react";
import React, { useState } from "react";

export const useCheckboxDisclosure = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleValueChange = () => {
    setChecked;
  };
  return { checked, handleValueChange };
};

const Checkbox = ({
  isSelected,
  onValueChange,
  value,
  label,
  labelColor,
  labelSize,
}: CheckboxProps) => {
  return (
    <NextUICheckbox
      classNames={{
        icon: "text-primary-200",
        // icon: "text-white bg-primary-200 text-xs rounded-md h-fit w-fit",
        label: `${labelSize ? labelSize : "text-sm"} ${
          labelColor ? labelColor : "text-neutral-800"
        }`,
      }}
      value={value}
      color="default"
      isSelected={isSelected}
      onValueChange={onValueChange}
    >
      {label}
    </NextUICheckbox>
  );
};

export default Checkbox;
