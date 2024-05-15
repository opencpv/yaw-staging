import React from "react";
import * as RadixUICheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { useField } from "formik";

interface Props extends React.ComponentProps<typeof RadixUICheckbox.Root> {
  color?: "accent" | "primary" | "white";
  label?: string;
  classNames?: {
    checkIcon?: string;
  };
  useWithFormik?: boolean;
}

const Checkbox: React.FC<Props> = ({
  color,
  label,
  name,
  className,
  classNames,
  useWithFormik = true,
  ...props
}) => {
  if (useWithFormik) {
    const [field, meta, helpers] = useField(name as string);
    return (
      <form className={className}>
        <div className="flex items-center">
          <RadixUICheckbox.Root
            className={cn(
              "flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] border border-shade-200 shadow-blackA4 outline-none data-[state=checked]:border-none data-[state=checked]:bg-accent-50",
              {
                "focus:outline-primary-500 data-[state=checked]:bg-primary-500":
                  color === "primary",
                "border-accent-500 focus:outline-accent-500 data-[state=checked]:bg-accent-500":
                  color === "white",
              },
            )}
            checked={field.value}
            name={field.name}
            id={name}
            onCheckedChange={(value) => {
              helpers.setValue(value);
              props.onCheckedChange?.(value);
            }}
            {...props}
          >
            <RadixUICheckbox.Indicator
              className={cn("text-white", classNames?.checkIcon)}
            >
              <CheckIcon />
            </RadixUICheckbox.Indicator>
          </RadixUICheckbox.Root>
          {label && (
            <label
              className="pl-[15px] text-[15px] leading-none text-shade-200"
              htmlFor={name}
            >
              {label}
            </label>
          )}
        </div>
      </form>
    );
  } else
    return (
      <form className={className}>
        <div className="flex items-center">
          <RadixUICheckbox.Root
            className={cn(
              "flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] border border-shade-200 shadow-blackA4 outline-none data-[state=checked]:border-none data-[state=checked]:bg-accent-50",
              {
                "focus:outline-primary-500 data-[state=checked]:bg-primary-500":
                  color === "primary",
                "border-accent-500 focus:outline-accent-500 data-[state=checked]:bg-accent-500":
                  color === "white",
              },
            )}
            {...props}
          >
            <RadixUICheckbox.Indicator
              className={cn("text-white", classNames?.checkIcon)}
            >
              <CheckIcon />
            </RadixUICheckbox.Indicator>
          </RadixUICheckbox.Root>
          {label && (
            <label
              className="pl-[15px] text-[15px] leading-none text-shade-200"
              htmlFor={name}
            >
              {label}
            </label>
          )}
        </div>
      </form>
    );
};

export default Checkbox;
