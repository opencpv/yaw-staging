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
    <div className="flex w-full flex-col gap-[0.9375rem] text-[1rem] font-[400] text-[#6A6968]">
      <label htmlFor="">{label}</label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "h-[52px] w-full justify-start text-left font-normal",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>DD/MM/YYYY</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="z-[1001] w-full bg-[#fefefe] p-0"
          align="start"
        >
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
