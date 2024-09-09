"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "../button";
import { Calendar } from "@/components/__shared/ui/calendar";
import {
  PopoverContent,
  PopoverTrigger,
} from "@/components/__shared/ui/popover";
import { useField } from "formik";
import { formatDate } from "@/lib/utils/stringManipulation";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";
const Popover = dynamic(() =>
  import("@/components/__shared/ui/popover").then((mod) => mod.Popover),
);

type Props = {
  label: string;
  onChange?: (value: any) => void;
  disabled?: any;
  placeholderDate?: string;
  className?: string;
  name?: string;
  value?: string;
};

export function DatePicker({
  label,
  onChange,
  disabled,
  placeholderDate,
  className,
  name,
  value,
}: Props) {
  const [date, setDate] = React.useState<Date>();
  const [open, setOpen] = React.useState(false);
  const [field, meta, helpers] = useField(name as string);

  React.useEffect(() => {
    if (placeholderDate) {
      setDate(new Date(placeholderDate));
    }
  }, [placeholderDate]);

  const isBefore = (value: Date) => {
    const today = new Date();
    return value?.getTime() < today.getTime();
  };

  return (
    <div
      className={cn(
        "flex w-full flex-col gap-[0.9375rem] text-[1rem] font-[400] text-[#6A6968]",
        className,
      )}
    >
      <label htmlFor="">{label}</label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            size={"sm"}
            className={cn(
              `form-field-border h-[52px] w-full justify-start whitespace-nowrap border-neutral-300 text-shade-200 placeholder:text-neutral-500 hover:scale-100`,
            )}
            name={field?.name || name}
            value={field?.value || value}
            onClick={() => setOpen(!open)}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {/* {field.value ? format(field.value, "PPP") : <span>DD/MM/YYYY</span>} */}
            {field.value
              ? formatDate(field.value)
              : formatDate(value as string)}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Calendar
            mode="single"
            selected={field.value}
            onSelect={(value) => {
              if (isBefore(value as Date)) {
                toast.error("Please select a future date");
                return;
              }
              helpers.setValue(value);
              setDate(value);
              onChange?.(value);
              setOpen(false);
            }}
            //@ts-ignore
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
