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
} from "@/components/__shared/ui/command";
import {
  PopoverContent,
  PopoverTrigger,
} from "@/components/__shared/ui/popover";
import {
  FieldHelperProps,
  FieldInputProps,
  FieldMetaProps,
  useFormikContext,
} from "formik";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import capitalizeName from "@/lib/utils/stringManipulation";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import ErrorMessage from "../states/error-message";

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
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              `form-field-border h-[52px] w-full justify-between whitespace-nowrap border-neutral-300 text-shade-300 placeholder:text-neutral-500 hover:scale-100 [&>svg]:transition-transform [&[data-state=open]>svg]:rotate-180`,
              {
                "capitalize text-shade-300": field?.value || value,
              },
            )}
            size={"sm"}
            value={field?.value || value}
            name={field?.name || name}
          >
            {field?.value ? field?.value : value || placeholder}
            <IoChevronDown className="ml-2 h-4 w-4 shrink-0 text-neutral-500 opacity-50" />
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
            <CommandInput
              className="focus:outline-none"
              placeholder="Search data..."
            />
            <CommandList>
              <CommandEmpty>No data found.</CommandEmpty>
              <CommandGroup>
                {countryData?.map((data) => (
                  <CommandItem
                    key={data?.value}
                    onSelect={(currentValue) => {
                      onChange?.(capitalizeName(currentValue));
                      helpers?.setValue(capitalizeName(currentValue));
                      setOpen(false);
                    }}
                  >
                    <div className="relative aspect-square w-[20px]">
                      <Image
                        src={data?.flags}
                        alt={data?.label + " flag"}
                        fill
                      />
                    </div>
                    {data?.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {formikContext ? <ErrorMessage name={field?.name as string} /> : null}
    </div>
  );
};

export default CountryInput;
