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

import {
  Popover as Popover2,
  PopoverTrigger as PopoverTrigger2,
  PopoverContent as PopoverContent2,
} from "@nextui-org/react";

type Props = {
  label: string;
  onChange: (value: any) => void;
  disabled?: any;
  placeholderDate?: string;
  className?: string;
  /** work around for popover not working with nextui modal */
  type?: 1 | 2;
};
export function CustomDatePicker({
  label,
  onChange,
  disabled,
  placeholderDate,
  className,
  type,
}: Props) {
  const [date, setDate] = React.useState<Date>();

  React.useEffect(() => {
    if (placeholderDate) {
      setDate(new Date(placeholderDate));
    }
  }, [placeholderDate]);

  return (
    <div
      className={cn(
        "flex w-full flex-col gap-[0.9375rem] text-[1rem] font-[400] text-[#6A6968]",
        className,
      )}
    >
      <label htmlFor="">{label}</label>
      {type === 2 ? (
        <Popover2>
          <PopoverTrigger2>
            <Button
              variant={"outline"}
              className={cn(
                "h-[52px] w-full justify-start border-[#a3a3a3] text-left font-normal hover:border-black/50 focus:border-2 focus:border-accent-50 focus:outline-none focus-visible:ring-0",
                !date && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>DD/MM/YYYY</span>}
            </Button>
          </PopoverTrigger2>
          <PopoverContent2 className="relative right-[20%] z-[1001] w-full rounded-md bg-[#fefefe] p-0">
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
          </PopoverContent2>
        </Popover2>
      ) : (
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "h-[52px] w-full justify-start border-[#a3a3a3] text-left font-normal hover:border-black/50 focus:border-2 focus:border-accent-50 focus:outline-none focus-visible:ring-0",
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
      )}
    </div>
  );
}
