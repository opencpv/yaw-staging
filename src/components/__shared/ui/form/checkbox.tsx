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
