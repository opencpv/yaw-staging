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
import { montserat, openSans } from "@/styles/font";
import Image from "next/image";
import { dateDefault } from "@/enum/defaultPhone";

type DataItem = {
  label: string;
  value: string;
  flags: string;
};

type Props = {
  initialCountry?: any;
  placeholder?: string;
  label: string;
  onChange: (value: any) => void;
  onChange2?: (value: any) => void;
  initialValue?: any;
  name?: string;
  font?: "Montserrat" | "OpenSans";
};

const PhoneNumberInputv2 = ({
  initialCountry,
  initialValue,
  placeholder = "Select your country",
  label,
  onChange,
  onChange2,
  name,
  font,
}: Props) => {
  const [countryData, setCountryData] = useState<DataItem[]>();
  const [selectedCountry, setSelectedCountry] = useState<any>({});
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string | number>();
  const [value2, setValue2] = useState<string>("");

  const [totalNumber, setTotalNumber] = useState<string>();

  useEffect(() => {
    if (initialValue) {
      setValue(initialValue.slice(0, 4));
      setValue2(initialValue.slice(4));
    } else {
      setValue("+233");
    }
  }, []);

  useEffect(() => {
    if (initialCountry && (initialCountry.name || initialCountry.label)) {
      setSelectedCountry(initialCountry);
    } else {
      setSelectedCountry(dateDefault);
    }
  }, []);

  useEffect(() => {
    setTotalNumber(value + value2);
  }, [value, value2]);

  useEffect(() => {
    if (totalNumber && onChange2) {
      onChange2(selectedCountry);
    }
  }, [selectedCountry?.name, selectedCountry?.label]);

  useEffect(() => {
    if (totalNumber) {
      onChange(totalNumber);
    }
  }, [totalNumber]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all?fields=name,flags,idd")
      .then((res) => {
        const resData = res.data;
        const newCountryData = resData.map((element: any) => ({
          label: element?.name?.official,
          value: element?.name?.official,
          flags: element?.flags,
          idd: element?.idd,
        }));

        // Sort the newCountryData array alphabetically by label
        newCountryData.sort((a: any, b: any) => a.label.localeCompare(b.label));

        setCountryData(newCountryData);
        // console.log(resData);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="w-full">
      <Root className=" gap-3">
        <div className={`flex gap-2 font-[400] capitalize text-[#6A6968]`}>
          <label>{label}</label>
        </div>
        <div className="flex gap-3">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className={`flex w-fit justify-between gap-2  ${
                  value ? "capitalize text-[#6A6968]" : "text-[#B4B2AF] "
                } h-[53px] whitespace-nowrap`}
              >
                <div className="relative h-[18px] w-5 rounded-[4px]">
                  <Image
                    src={selectedCountry.flags?.png}
                    alt={selectedCountry.flags?.alt}
                    fill
                    sizes="1.25rem"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    className="rounded-[4px] "
                  />
                </div>
                <p className={`text-[13px] text-[#000] `}>
                  {selectedCountry.idd?.root}
                  {selectedCountry.idd?.suffixes}
                </p>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="z-[200] max-h-[400px] w-fit max-w-[150px] overflow-y-scroll bg-white p-0">
              <Command onValueChange={onChange}>
                <CommandInput placeholder="Search code..." />
                <CommandEmpty>No data found.</CommandEmpty>
                <CommandGroup>
                  {countryData?.map((data: any) => (
                    <CommandItem
                      className="flex cursor-pointer gap-3 hover:bg-slate-100 "
                      key={data.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue);
                        setSelectedCountry(data);
                        setOpen(false);
                      }}
                    >
                      <div className="relative aspect-square w-[20px]">
                        <Image src={data.flags?.png} alt="flag" fill />
                      </div>
                      {data?.idd?.root}
                      {data?.idd?.suffixes}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <input
            type="number"
            name={name}
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
            className="flex w-full flex-auto rounded-[4px] border-[1px] border-[#EBEBEB] p-[15px] outline-none"
          />
        </div>
      </Root>
    </div>
  );
};

export default PhoneNumberInputv2;

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
