import React from "react";
import { Select } from "@/components/__shared/ui/form/select";
import { cn } from "@/lib/utils";

type Props = {
  /** Use as aria-label */
  name: string;
  value: string;
  options: string[];
  classNames?: { trigger?: string };
  onValueChange?: (value: string) => void;
  placeholder?: string;
};

export default function SelectMobile(props: Props) {
  return (
    <Select
      radius="full"
      position="item-aligned"
      classNames={{
        trigger: cn("w-[100px] bg-neutral-200", props.classNames?.trigger),
      }}
      {...props}
    />
  );
}
