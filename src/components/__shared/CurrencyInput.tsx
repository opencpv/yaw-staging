"use client";

import * as React from "react";
import { Check, ChevronDown, ChevronsDown, ChevronsUpDown } from "lucide-react";

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
import { boolean } from "yup";
import { InfoBubble } from "@/app/components/application-form/components/InfoBubble";

type DataItem = {
  label: string;
  value: string;
  flags: string;
};

type Props = {
  initialCurrency?: any;

  initialValue?: any;

  placeholder?: string;
  label: string;
  onChange: (value: any) => void;
  onChange2?: (value: any) => void;
  placeholderMonthlyIncomeCurrency?: string;
  placeholderMonthlyIncome?: string;
  infoBubble?: boolean;
};

const CurrencyInput = ({
  initialCurrency,
  initialValue,
  placeholder = "Select currency",
  label,
  onChange,
  onChange2,
  placeholderMonthlyIncome,
  placeholderMonthlyIncomeCurrency,
  infoBubble,
}: Props) => {
  const [currencyData, setCurrencyData] = useState<DataItem[]>();
  const [selectedCurrency, setSelectedCurrency] = useState<any>({});
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string>(
    placeholderMonthlyIncomeCurrency || "",
  );
  const [value2, setValue2] = useState<string>("");

  const [totalValue, setTotalValue] = useState<string>();

  useEffect(() => {
    if (initialValue) {
      setValue(initialValue.slice(0, 4));
      setValue2(initialValue.slice(4));
    } else {
      setValue("GHS");
    }
  }, []);

  useEffect(() => {
    if (initialCurrency) {
      setSelectedCurrency(initialCurrency);
    }
  }, []);

  useEffect(() => {
    setTotalValue(value + value2);
  }, [value, value2]);

  useEffect(() => {
    onChange2 && onChange2(selectedCurrency);
    onChange(totalValue);
  }, [totalValue]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all?fields=currencies")
      .then((res) => {
        const resData = res.data;

        // Extract currencies and flatten them into a single array
        const currencies = resData
          .map((element: any) => element?.currencies)
          .flat()
          .map((currency: any, index: number) => ({
            label: Object.keys(currency)[0], // Corrected line
            value: Object.keys(currency)[0], // Corrected line
            code: currency?.code,
          }));

        // Sort the currencies alphabetically by label (currency code)
        currencies.sort((a: any, b: any) => a.label?.localeCompare(b.label));

        setCurrencyData(currencies);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div>
      <Root className="flex ">
        <div className={`flex gap-2 font-[400] capitalize text-[#6A6968]`}>
          <label>{label}</label>
          {infoBubble && <InfoBubble content="Data" />}
        </div>
        <div className="flex items-center justify-start gap-4">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="h-[52px] w-full max-w-[100px] justify-between whitespace-nowrap uppercase text-[#6A6968]"
              >
                {value ? value : placeholder}
                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="z-[200] max-h-[400px] w-fit overflow-y-scroll bg-white p-0 ">
              <Command onValueChange={onChange}>
                <CommandInput placeholder="Search data..." />
                <CommandEmpty>No data found.</CommandEmpty>
                <CommandGroup>
                  {currencyData?.map((data) => (
                    <CommandItem
                      className="flex cursor-pointer gap-3 hover:bg-slate-100"
                      key={data.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      {data.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <input
            name="salaryCurrency"
            type="number"
            className="form-input w-full"
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
          />
        </div>
      </Root>
    </div>
  );
};

export default CurrencyInput;

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
