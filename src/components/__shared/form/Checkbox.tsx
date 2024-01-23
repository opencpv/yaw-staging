"use client";
import { cn } from "@/lib/utils";
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
  color,
  labelSize,
}: CheckboxProps) => {
  return (
    <NextUICheckbox
      classNames={{
        // icon: "text-primary-200",
        // icon: "text-white bg-primary-200 text-xs rounded-md h-fit w-fit",
        label: `${labelSize ?? "text-sm"} ${labelColor ?? "text-neutral-800"}`,
      }}
      value={value}
      color={color === "primary" ? "danger" : "default"}
      // isSelected={isSelected}
      // className={cn({
      //   "before:border-primary-100  after:bg-red-800 group-data-[focus-visible=true]:ring-primary-100 group-data-[focus-visible=true]:ring-offset-primary-100 group-data-[hover=true]:before:bg-primary-100":
      //     color === "primary",
      //   "before:border-accent-50  after:bg-accent-50 group-data-[focus-visible=true]:ring-accent-50 group-data-[focus-visible=true]:ring-offset-accent-50 group-data-[hover=true]:before:bg-accent-50":
      //     color === "default" || !color,
      // })}
      onValueChange={onValueChange}
    >
      {label}
    </NextUICheckbox>
  );
};

export default Checkbox;
