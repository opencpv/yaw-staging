import React from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import capitalizeName from "@/lib/utils/stringManipulation";
import { cn } from "@/lib/utils";

type Props = {
  /** Use as aria-label */
  name: string;
  value: string;
  options: string[];
  classNames?: { content?: string; trigger?: string };
  onOpenChange?: (open: boolean) => void;
  onValueChange?: (value: string) => void;
  placeholder?: string;
};

const SelectMobile = ({
  options,
  value,
  name,
  onOpenChange,
  onValueChange,
  placeholder,
  classNames,
}: Props) => (
  <Select.Root
    onOpenChange={onOpenChange}
    onValueChange={onValueChange}
    value={value}
  >
    <Select.Trigger
      className={cn(
        "inline-flex h-[35px] items-center justify-center gap-[5px] rounded-full bg-gray-200 px-[15px] text-[13px] leading-none text-neutral-800 outline-none hover:bg-gray-300 focus:shadow-[0_0_0_2px] focus:shadow-accent data-[placeholder]:text-neutral-800",
        classNames?.trigger,
      )}
      aria-label={name}
    >
      <Select.Value placeholder={placeholder} />
      <Select.Icon className="text-neutral-800">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content
        className={cn(
          "z-50 overflow-hidden rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]",
          classNames?.content,
        )}
      >
        <Select.Viewport className="p-[5px]">
          <Select.Group>
            {options.map((option) => (
              <SelectItem key={option} value={option}>
                {capitalizeName(option)}
              </SelectItem>
            ))}
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

const SelectItem = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => {
    return (
      <Select.Item
        className={classnames(
          "relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] leading-none text-neutral-800 data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-100 data-[disabled]:text-mauve8 data-[highlighted]:text-neutral-800 data-[highlighted]:outline-none",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  },
);

SelectItem.displayName = Select.SelectItem.displayName;

export default SelectMobile;
