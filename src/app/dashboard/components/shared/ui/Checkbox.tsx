import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { useField } from "formik";

interface Props extends React.ComponentProps<typeof Checkbox.Root> {
  color?: "accent" | "primary";
  label?: string;
}

const RadixUICheckbox: React.FC<Props> = ({
  color,
  label,
  name,
  className,
  ...props
}) => {
  const [field, meta, helpers] = useField(name as string);

  return (
    <form className={className}>
      <div className="flex items-center">
        <Checkbox.Root
          className={cn(
            "flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] border border-shade-200 shadow-blackA4 outline-none data-[state=checked]:border-none data-[state=checked]:bg-accent-50",
            {
              "focus:outline-primary-500 data-[state=checked]:bg-primary-500":
                color === "primary",
            },
          )}
          checked={field.value}
          name={field.name}
          id={name}
          onCheckedChange={(value) => helpers.setValue(value)}
          {...props}
        >
          <Checkbox.Indicator className="text-white">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
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

export default RadixUICheckbox;
