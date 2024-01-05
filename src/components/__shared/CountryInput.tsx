"use client";

import * as React from "react";
import { Check, ChevronDown, ChevronsDown, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ErrorMessage, Field } from "formik";
import { styled } from "@stitches/react";
import { SelectSearchInput } from "@/app/components/SelectSearchInput";
import axios from "axios";
import { useEffect, useState } from "react";
import { openSans } from "@/styles/font";
import Image from "next/image";

type DataItem = {
  label: string;
  value: string;
  flags: string;
};

type Props = {
  placeholder?: string;
  label: string;
  onChange: (value: any) => void;
  initialValue?: string;
};

const CountryInput = ({
  initialValue,
  placeholder = "Select your country",
  label,
  onChange,
}: Props) => {
  const [countryData, setCountryData] = useState<DataItem[]>();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  useEffect(() => {
    if (initialValue) {
      setValue(initialValue);
    }
  }, []);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((res) => {
        const resData = res.data;
        const newCountryData = resData.map((element: any) => ({
          label: element?.name?.official,
          value: element?.name?.official,
          flags: element?.flags?.png,
        }));

        // Sort the newCountryData array alphabetically by label
        newCountryData.sort((a: any, b: any) => a.label.localeCompare(b.label));

        setCountryData(newCountryData);
        // console.log(resData);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div>
      <Root>
        <div
          className={`font-[400] ${openSans.className} text-[#6A6968] capitalize`}
        >
          <label>{label}</label>
        </div>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className={`w-full justify-between  ${
                value ? "text-[#6A6968] capitalize" : "text-[#B4B2AF] "
              } whitespace-nowrap h-[52px]`}
            >
              {value ? value : placeholder}
              <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-fit p-0 z-[200] max-h-[400px] overflow-y-scroll bg-white ">
            <Command onValueChange={onChange}>
              <CommandInput placeholder="Search data..." />
              <CommandEmpty>No data found.</CommandEmpty>
              <CommandGroup>
                {countryData?.map((data) => (
                  <CommandItem
                    className="flex gap-3 cursor-pointer hover:bg-slate-100"
                    key={data.value}
                    onSelect={(currentValue) => {
                      onChange(currentValue);
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {/* <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === data.value ? "opacity-100" : "opacity-0"
                      )}
                    /> */}
                    <div className="relative w-[20px] aspect-square">
                      <Image src={data.flags} alt="flag" fill />
                    </div>
                    {data.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </Root>
    </div>
  );
};

export default CountryInput;

const Root = styled("div", {
  fontSize: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.9375rem",
  ".form-input": {
    height: "52px",
    padding: "15px",
    fontSize: " 0.8125rem",
    border: "1px solid #E6E6E6",
    borderRadius: "4px",
  },
});
