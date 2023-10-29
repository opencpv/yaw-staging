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

type Props = {
  label: string;
  onChange: (value: any) => void;
  disabled?: any;
  placeholderDate?: string;
};
export function CustomDatePicker({
  label,
  onChange,
  disabled,
  placeholderDate,
}: Props) {
  const [date, setDate] = React.useState<Date>();

  React.useEffect(() => {
    if (placeholderDate) {
      setDate(new Date(placeholderDate));
    }
  }, []);

  return (
    <div className="flex flex-col text-[#6A6968] text-[1rem] font-[400] gap-[0.9375rem] w-full">
      <label htmlFor="">{label}</label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal h-[52px]",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>DD/MM/YYYY</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full z-[1001] bg-white p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(value) => {
              setDate(value);
              onChange(value);
            }}
            disabled={disabled}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
