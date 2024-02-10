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
        label: `${labelSize ?? "text-sm"} ${labelColor ?? "text-neutral-800"}`,
        wrapper: [
          "before:border-neutral-200",
          color === "primary"
            ? "after:bg-primary-100 group-data-[focus-visible=true]:ring-primary-100"
            : "after:bg-accent-50 group-data-[focus-visible=true]:ring-accent-50",
        ],
      }}
      value={value}
      onValueChange={onValueChange}
    >
      {label}
    </NextUICheckbox>
  );
};

export default Checkbox;
