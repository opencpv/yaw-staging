"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useField } from "formik";
import { formatDate } from "@/lib/utils/stringManipulation";
import { useToastDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";

type Props = {
  label: string;
  onChange: (value: any) => void;
  disabled?: any;
  placeholderDate?: string;
  className?: string;
  name?: string;
  value: string;
};
export function CustomDatePicker({
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
  const { onOpen } = useToastDisclosure();

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
            className={cn(
              "h-[52px] w-full justify-start border-[#a3a3a3] text-left font-normal hover:border-black/50 focus:border-2 focus:border-accent-50 focus:outline-none focus-visible:ring-0",
              !field.value && "text-muted-foreground",
            )}
            name={field.name}
            value={value || field.value}
            onClick={() => setOpen(!open)}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {/* {field.value ? format(field.value, "PPP") : <span>DD/MM/YYYY</span>} */}
            {field.value ? formatDate(field.value) : value}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="z-[1001] w-full bg-[#fefefe] p-0"
          align="start"
        >
          <Calendar
            mode="single"
            selected={field.value}
            onSelect={(value) => {
              if (isBefore(value as Date)) {
                onOpen("❌ Please select a future date", true);
                return;
              }
              helpers.setValue(value);
              setDate(value);
              onChange(value);
              setOpen(false);
            }}
            disabled={disabled}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
