"use client";

import * as React from "react";
import { IoChevronDown } from "react-icons/io5";
import Button from "../button/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/__shared/ui/command";
import {
  PopoverContent,
  PopoverTrigger,
} from "@/components/__shared/ui/popover";
import { useField } from "formik";
import { styled } from "@stitches/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import capitalizeName from "@/lib/utils/stringManipulation";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const Popover = dynamic(() =>
  import("@/components/__shared/ui/popover").then((mod) => mod.Popover),
);

type DataItem = {
  label: string;
  value: string;
  flags: string;
};

type Props = {
  placeholder?: string;
  label: string;
  onChange?: (value: any) => void;
  initialValue?: string;
  name?: string;
  value?: string;
};

const CountryInput = ({
  initialValue,
  placeholder = "Select your country",
  label,
  onChange,
  name,
  value,
}: Props) => {
  const [countryData, setCountryData] = useState<DataItem[]>();
  const [open, setOpen] = React.useState(false);
  // const [value, setValue] = React.useState("");

  // useEffect(() => {
  //   if (initialValue) {
  //     setValue(initialValue);
  //   }
  // }, [initialValue]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((res) => {
        const resData = res.data;
        const newCountryData = resData.map((element: any) => ({
          label: element?.name?.common,
          value: element?.name?.common,
          flags: element?.flags?.png,
        }));

        // Sort the newCountryData array alphabetically by label
        newCountryData.sort((a: any, b: any) => a.label.localeCompare(b.label));

        setCountryData(newCountryData);
      });
  }, []);

  const [field, meta, helpers] = useField(name as string);

  return (
    <div>
      <Root>
        <div className={`font-[400] capitalize text-[#6A6968]`}>
          <label className="normal-case">{label}</label>
        </div>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className={cn(
                `h-[52px] w-full justify-between whitespace-nowrap border-[#a3a3a3] text-[#B4B2AF] placeholder:text-neutral-500 hover:border-black/50 hover:bg-transparent focus:border-2 focus:border-accent focus-visible:outline-0 focus-visible:ring-0`,
                {
                  "capitalize text-[#6A6968]": field.value,
                },
              )}
              //@ts-ignore
              name={field.name}
              value={value || field.value}
            >
              {field.value ? field.value : value || placeholder}
              <IoChevronDown className="ml-2 h-4 w-4 shrink-0 text-neutral-500 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="z-[200] max-h-[200px] w-fit overflow-y-scroll bg-[#fefefe] p-0 focus:outline-none">
            <Command
              onValueChange={(value) => {
                onChange?.(value);
                helpers.setValue(value);
              }}
            >
              <CommandInput
                className="focus:outline-none"
                placeholder="Search data..."
              />
              <CommandEmpty>No data found.</CommandEmpty>
              <CommandGroup>
                {countryData?.map((data) => (
                  <CommandItem
                    className="flex cursor-pointer gap-3 hover:bg-accent-50 focus:bg-accent-50 focus:text-white"
                    key={data.value}
                    onSelect={(currentValue) => {
                      onChange?.(capitalizeName(currentValue));
                      helpers.setValue(capitalizeName(currentValue));
                      setOpen(false);
                    }}
                  >
                    <div className="relative aspect-square w-[20px]">
                      <Image src={data.flags} alt={data.label + " flag"} fill />
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
