"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { LuCircle } from "react-icons/lu";

import { cn } from "@/lib/utils";
import {
  FieldHelperProps,
  FieldInputProps,
  FieldMetaProps,
  useFormikContext,
} from "formik";
import ErrorMessage from "../states/error-message";

type RadioInputProps = {
  options?: string[];
  color?: "accent" | "primary";
  disabled?: {
    [key: string]: boolean;
  };
};

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2 transition-colors", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    color?: "accent" | "primary";
  }
>(({ className, color, disabled, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "ring-offset-background form-field-border aspect-square h-6 w-6 rounded-full hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        {
          "data-[state=checked]:border-primary data-[state=checked]:bg-primary":
            color === "primary",
          "data-[state=checked]:border-accent data-[state=checked]:bg-accent":
            color === "accent",
          "border-shade-200 data-[state=checked]:border-shade-200": disabled,
        },
        className,
      )}
      disabled={disabled}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <LuCircle className="h-3 w-3 fill-white text-white" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

/**
 *A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time. <br />
 * Name is required if used in a Formik context.
 */
const RadioInput = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> &
    RadioInputProps & {
      label?: string;
    }
>(
  (
    {
      className,
      label,
      disabled,
      color = "accent",
      name,
      options,
      onValueChange,
      ...props
    },
    ref,
  ) => {
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
      <RadioGroup
        onValueChange={(value) => {
          helpers?.setValue(value);
          onValueChange?.(value);
        }}
        value={field?.value}
        name={field?.name}
        className="flex flex-col gap-4 text-shade-300"
        {...props}
        ref={ref}
      >
        <p className="flex gap-2 whitespace-nowrap text-base">{label}</p>
        <div className="flex flex-wrap gap-x-10 gap-y-5">
          {options?.map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <RadioGroupItem
                value={option}
                id={option}
                disabled={disabled?.[option] || false}
                color={color}
              />
              <div
                className={cn("pl-2 text-base leading-none transition-colors", {
                  "opacity-50": disabled?.[option],
                })}
              >
                {option}
              </div>
            </label>
          ))}
        </div>
        {meta?.touched && meta?.error ? (
          <ErrorMessage name={meta.error}>{meta.error}</ErrorMessage>
        ) : null}
      </RadioGroup>
    );
  },
);
RadioInput.displayName = "RadioInput";

export { RadioInput, RadioGroup, RadioGroupItem };
