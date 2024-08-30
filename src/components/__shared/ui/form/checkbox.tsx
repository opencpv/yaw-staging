"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { LuCheck } from "react-icons/lu";

import { cn } from "@/lib/utils";
import { useField } from "formik";

type CheckboxProps = {
  color?: "accent" | "primary" | "white";
  radius?: "default" | "md";
};

const BaseCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & CheckboxProps
>(
  (
    { className, color = "accent", radius = "default", disabled, ...props },
    ref,
  ) => (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "ring-offset-background peer h-5 w-5 shrink-0 rounded-sm border border-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-none data-[state=checked]:text-white data-[state=checked]:transition-colors",
        {
          "data-[state=checked]:bg-primary": color === "primary",
          "data-[state=checked]:bg-accent": color === "accent",
          "data-[state=checked]:bg-white": color === "white",
          "rounded-md": radius === "md",
          "data-[state=checked]:bg-neutral-400": disabled,
        },
        className,
      )}
      disabled={disabled}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <LuCheck className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  ),
);
BaseCheckbox.displayName = "BaseCheckbox";

const Checkbox = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<typeof BaseCheckbox> &
    CheckboxProps & {
      label?: string;
      classNames?: {
        label?: string;
      };
    }
>(
  (
    {
      className,
      classNames,
      label,
      disabled,
      color,
      radius,
      name,
      onCheckedChange,
      ...props
    },
    ref,
  ) => {
    const [field, meta, helpers] = useField(name as string);

    return (
      <label className="flex w-fit items-center space-x-2" ref={ref}>
        <BaseCheckbox
          checked={field.value}
          name={field.name}
          onCheckedChange={(value) => {
            helpers.setValue(value);
            onCheckedChange?.(value);
          }}
          aria-readonly={disabled}
          color={color}
          radius={radius}
          {...props}
        />
        {label && (
          <span
            className={cn(
              "text-base text-shade-200",
              {
                "cursor-not-allowed": disabled,
              },
              classNames?.label,
            )}
          >
            {label}
          </span>
        )}
      </label>
    );
  },
);
Checkbox.displayName = "Checkbox";

const CheckboxNoFormik = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<typeof BaseCheckbox> &
    CheckboxProps & {
      label?: string;
      classNames?: {
        label?: string;
      };
    }
>(
  (
    {
      className,
      classNames,
      label,
      disabled,
      checked,
      color,
      radius,
      onCheckedChange,
      ...props
    },
    ref,
  ) => {
    return (
      <label className="flex w-fit items-center space-x-2" ref={ref}>
        <BaseCheckbox
          checked={checked}
          onCheckedChange={onCheckedChange}
          aria-readonly={disabled}
          color={color}
          radius={radius}
          disabled={disabled}
          {...props}
        />
        {label && (
          <span
            className={cn(
              "text-base text-shade-200",
              {
                "cursor-not-allowed": disabled,
              },
              classNames?.label,
            )}
          >
            {label}
          </span>
        )}
      </label>
    );
  },
);
CheckboxNoFormik.displayName = "CheckboxNoFormik";

export { Checkbox, CheckboxNoFormik };

//import React from "react";
//import * as RadixUICheckbox from "@radix-ui/react-checkbox";
//import { CheckIcon } from "@radix-ui/react-icons";
//import { cn } from "@/lib/utils";
//import { useField } from "formik";
//
//interface Props extends React.ComponentProps<typeof RadixUICheckbox.Root> {
//  color?: "accent" | "primary" | "white" | "disabled";
//  label?: string;
//  classNames?: {
//    checkIcon?: string;
//  };
//}
//
//export default function Checkbox({
//  color,
//  label,
//  name,
//  className,
//  classNames,
//  ...props
//}: Props) {
//  const [field, meta, helpers] = useField(name as string);
//  return (
//    <div className={cn("flex items-center", className)}>
//      <RadixUICheckbox.Root
//        className={cn(
//          "flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] border border-shade-200 shadow-blackA4 outline-none data-[state=checked]:border-none data-[state=checked]:bg-accent-50",
//          {
//            "focus:outline-primary-500 data-[state=checked]:bg-primary-500":
//              color === "primary",
//            "border-accent-500 focus:outline-accent-500 data-[state=checked]:bg-accent-500":
//              color === "white",
//            "border-grayText data-[state=checked]:bg-grayText":
//              color === "disabled",
//          },
//        )}
//        checked={field.value}
//        name={field.name}
//        id={name}
//        onCheckedChange={(value) => {
//          helpers.setValue(value);
//          props.onCheckedChange?.(value);
//        }}
//        {...props}
//      >
//        <RadixUICheckbox.Indicator
//          className={cn("text-white", classNames?.checkIcon)}
//        >
//          <CheckIcon />
//        </RadixUICheckbox.Indicator>
//      </RadixUICheckbox.Root>
//      {label && (
//        <label
//          className="pl-[15px] text-[15px] leading-none text-shade-200"
//          htmlFor={name}
//        >
//          {label}
//        </label>
//      )}
//    </div>
//  );
//}
//
//export const CheckboxNoFormik = ({
//  color,
//  label,
//  name,
//  className,
//  classNames,
//  ...props
//}: Props) => {
//  return (
//    <form className={className}>
//      <div className="flex items-center">
//        <RadixUICheckbox.Root
//          className={cn(
//            "flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] border border-shade-200 shadow-blackA4 outline-none data-[state=checked]:border-none data-[state=checked]:bg-accent-50",
//            {
//              "focus:outline-primary-500 data-[state=checked]:bg-primary-500":
//                color === "primary",
//              "border-accent-500 focus:outline-accent-500 data-[state=checked]:bg-accent-500":
//                color === "white",
//              "border-grayText data-[state=checked]:bg-grayText":
//                color === "disabled",
//            },
//          )}
//          {...props}
//        >
//          <RadixUICheckbox.Indicator
//            className={cn("text-white", classNames?.checkIcon)}
//          >
//            <CheckIcon />
//          </RadixUICheckbox.Indicator>
//        </RadixUICheckbox.Root>
//        {label && (
//          <label
//            className="pl-[15px] text-[15px] leading-none text-shade-200"
//            htmlFor={name}
//          >
//            {label}
//          </label>
//        )}
//      </div>
//    </form>
//  );
//};
