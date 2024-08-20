import React, { useEffect, useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
// import { InfoBubble } from "@/components/__shared/ui/application-form/components/InfoBubble";
import { useField } from "formik";
import ErrorMessage from "@/components/__shared/ui/states/ErrorMessage";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  name?: string;
  defaultValue?: string;
  infoBubble?: boolean;
  infoBubbleContent?: string;
  options: string[];
  onChange?: (e: any) => void;
  color?: "accent" | "primary";
  disabled?: {
    [key: string]: boolean;
  };
};

const CustomRadioInput = ({
  label,
  onChange,
  defaultValue,
  infoBubble,
  infoBubbleContent,
  name,
  options,
  color = "accent",
  disabled,
}: Props) => {
  const [value, setValue] = useState<any>();
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const [field, meta, helpers] = useField(name as string);

  return (
    <RadioGroup.Root
      onValueChange={(value) => {
        helpers.setValue(value);
        setValue(value);
        onChange && onChange(value);
      }}
      value={field.value}
      name={field.name}
      className="flex flex-col gap-[0.9375rem] text-[#6A6968]"
      defaultValue={defaultValue}
      aria-label="View density"
    >
      <div className="flex gap-2 whitespace-nowrap text-[1rem]">
        {label}
        {/* {infoBubble && <InfoBubble content={"info content"} />} */}
      </div>{" "}
      <div className="flex flex-wrap gap-x-10 gap-y-5">
        {options?.map((option) => (
          <label key={option} className="flex items-center">
            <RadioGroup.Item
              className={cn(
                "h-[25px] w-[25px] cursor-default rounded-full border bg-white shadow-blackA4 outline-none hover:bg-violet3 focus:outline-0",
              )}
              disabled={disabled?.[option] || false}
              value={option}
            >
              <RadioGroup.Indicator
                className={cn(
                  "relative flex h-full w-full items-center justify-center after:block after:h-[25px] after:w-[25px] after:rounded-full after:border-[5px] after:bg-[white] after:content-['']",
                  {
                    "after:border-accent": color === "accent",
                    "after:border-primary": color === "primary",
                    "after:border-shade-200": disabled?.[option],
                  },
                )}
              />
            </RadioGroup.Item>
            <div
              className={cn(
                "pl-[15px] text-[15px] leading-none transition-colors",
                {
                  "text-neutral-300": disabled?.[option],
                },
              )}
            >
              {option}
            </div>
          </label>
        ))}
      </div>
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </RadioGroup.Root>
  );
};

export default CustomRadioInput;
