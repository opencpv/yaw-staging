"use client";

import * as React from "react";
import { IoChevronDown } from "react-icons/io5";

import { Button } from "../button/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/__shared/ui/command/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/__shared/ui/popover";
import {
  FieldHelperProps,
  FieldInputProps,
  FieldMetaProps,
  useField,
  useFormikContext,
} from "formik";
import { styled } from "@stitches/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { SelectInput } from "@/components/__shared/ui/form/select";
import { Input } from "./input";
import { cn } from "@/lib/utils";
import ErrorMessage from "../states/error-message";

type DataItem = {
  label: string;
  value: string;
  flags: string;
};

type Props = {
  value2?: string;
  placeholder?: string;
  label: string;
  /** For first element */
  onChange: (value: any) => void;
  /** For second element */
  onChange2?: (value: any) => void;
  placeholderMonthlyIncomeCurrency?: string;
  placeholderMonthlyIncome?: string;
  infoBubble?: boolean;
  isSelectElement?: boolean;
  /** options to use when isSelectElement is true */
  options?: string[];
  /** For first element */
  name?: string;
  /** For second element */
  name2?: string;
};

const CurrencyInput = ({
  placeholder = "Select currency",
  label,
  onChange,
  onChange2,
  value2,
  placeholderMonthlyIncomeCurrency,
  isSelectElement,
  options,
  name,
  name2,
}: Props) => {
  const [currencyData, setCurrencyData] = useState<DataItem[]>();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string>(
    placeholderMonthlyIncomeCurrency || "",
  );

  const [totalValue, setTotalValue] = useState<string>();

  useEffect(() => {
    setTotalValue(value);
  }, [value]);

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
      .catch((error) => {
        null;
      });
  }, []);

  const formikContext = useFormikContext();
  let field: FieldInputProps<any> | undefined;
  let helpers: FieldHelperProps<any> | undefined;
  let meta: FieldMetaProps<any> | undefined;

  if (formikContext) {
    field = formikContext.getFieldProps(name as string);
    helpers = formikContext.getFieldHelpers(name as string);
    meta = formikContext.getFieldMeta(name as string);
  }

  return (
    <div className={cn("flex w-full flex-col gap-4 text-shade-300")}>
      {label && <label>{label}</label>}
      <div className="grid grid-cols-3 gap-4">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className={cn(
                `form-field-border col-span-1 h-[52px] w-full justify-between whitespace-nowrap border-neutral-300 text-shade-300 placeholder:text-neutral-500 hover:scale-100 [&>svg]:transition-transform [&[data-state=open]>svg]:rotate-180`,
              )}
              size={"sm"}
              value={field?.value || value}
              name={field?.name || name}
            >
              {field?.value ? field.value : value || placeholder}
              <IoChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="max-h-[200px] w-full p-0">
            <Command
              onValueChange={(value) => {
                onChange?.(value);
                helpers?.setValue(value);
              }}
              className="max-h-[200px] w-full"
            >
              <CommandInput placeholder="Search data..." />
              <CommandList>
                <CommandEmpty>No data found.</CommandEmpty>
                <CommandGroup>
                  {currencyData?.map((data) => (
                    <CommandItem
                      key={data?.label}
                      onSelect={(currentValue) => {
                        onChange?.(currentValue.toUpperCase());
                        helpers?.setValue(currentValue.toUpperCase());
                        setOpen(false);
                      }}
                    >
                      {data.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        {isSelectElement ? (
          <SelectInput
            name={name2}
            value={value2}
            options={options as string[]}
            onChange={(value) => onChange2 && onChange2(value)}
            className="col-span-2"
          />
        ) : (
          <Input
            name={name2 as string}
            onChange={(e) => onChange2 && onChange2(e.target.value)}
            className="col-span-2"
            //value={value2}
          />
        )}
      </div>

      {formikContext ? <ErrorMessage name={field?.name as string} /> : null}
    </div>
  );
};

export default CurrencyInput;
