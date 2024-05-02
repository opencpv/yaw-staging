"use client";
import React, { useEffect, useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { useLocalStorage } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";

type Data = {
  name: string;
  value: string;
};
type Props = {
  data: Data[];
  onChange: any;
  color?: "primary" | "accent";
};
const CustomCheckBoxes = ({ data, onChange, color }: Props) => {
  const [selected, setSelected] = useState<any>([]);
  const [listingFormData, setListingFormData] = useLocalStorage(
    "listing-form",
    {
      advancePaymentDuration: [],
    },
  );

  useEffect(() => {
    if (selected) {
      onChange && onChange(selected);
    }
  }, [onChange, selected]);

  const handleChange = (r: any) => {
    if (selected.includes(r?.name)) {
      setSelected(selected.filter((item: any) => item !== r?.name));
    } else {
      setSelected([...selected, r?.name]);
    }
  };

  useEffect(() => {
    if (listingFormData?.advancePaymentDuration) {
      setSelected(listingFormData?.advancePaymentDuration);
    }
  }, []);

  return (
    <form className="flex w-full flex-wrap gap-5">
      {data?.map((r, index: number) => (
        <div className="flex w-fit items-center gap-3" key={index}>
          <Checkbox.Root
            checked={selected?.includes(r?.name)}
            onCheckedChange={() => handleChange(r)}
            className={cn(
              "form-field-border flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] border bg-white shadow-blackA4 hover:bg-violet3",
              {
                "data-[state=checked]:border-0 data-[state=checked]:bg-accent-50":
                  color === "accent",
                "data-[state=checked]:bg-primary-100": color === "primary",
              },
            )}
            id={r?.name}
          >
            <Checkbox.Indicator
              className={cn("text-violet11", {
                "text-white": color === "primary" || color === "accent",
              })}
            >
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label
            className="text-[0.975rem] font-[400] leading-5 text-[#737373]"
            htmlFor={r?.name}
          >
            {r?.name}
          </label>
        </div>
      ))}
    </form>
  );
};

export default CustomCheckBoxes;
