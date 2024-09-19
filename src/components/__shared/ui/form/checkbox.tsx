"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { LuCheck } from "react-icons/lu";

import { cn } from "@/lib/utils";
import {
  FieldHelperProps,
  FieldInputProps,
  FieldMetaProps,
  useFormikContext,
} from "formik";

type CheckboxProps = {
  color?: "accent" | "primary" | "white";
  radius?: "default" | "md";
};

const BaseCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & CheckboxProps
>(
  (
    { className, color = "primary", radius = "default", disabled, ...props },
    ref,
  ) => (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "ring-offset-background form-field-border peer h-5 w-5 shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-none data-[state=checked]:text-white data-[state=checked]:transition-colors",
        {
          "data-[state=checked]:bg-primary": color === "primary",
          "data-[state=checked]:bg-accent": color === "accent",
          "hover:border-white data-[state=checked]:bg-white": color === "white",
          "rounded-md": radius === "md",
          "data-[state=checked]:bg-neutral-400": disabled,
        },
        className,
      )}
      disabled={disabled}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current", {
          "text-primary": color === "white",
        })}
      >
        <LuCheck className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  ),
);
BaseCheckbox.displayName = "BaseCheckbox";

/**
 * A control that allows the user to toggle between checked and not checked. <br />
 * Name is required if used in a Formik context.
 */
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
      checked,
      color,
      radius,
      name,
      onCheckedChange,
      ...props
    },
    ref,
  ) => {
    const formikContext = useFormikContext();
    let field: FieldInputProps<any> | undefined;
    let meta: FieldMetaProps<any> | undefined;
    let helpers: FieldHelperProps<any> | undefined;

    if (formikContext) {
      field = formikContext.getFieldProps(name as string);
      meta = formikContext.getFieldMeta(name as string);
      helpers = formikContext.getFieldHelpers(name as string);
    }

    return (
      <label className="flex w-fit items-center space-x-2" ref={ref}>
        <BaseCheckbox
          checked={field?.value || checked}
          name={field?.name || name}
          onCheckedChange={(value) => {
            helpers?.setValue(value);
            onCheckedChange?.(value);
          }}
          aria-readonly={disabled}
          color={color}
          radius={radius}
          disabled={disabled}
          {...props}
        />

        {label && (
          <p
            className={cn(
              "text-base text-shade-200",
              {
                "cursor-not-allowed": disabled,
              },
              classNames?.label,
            )}
          >
            {label}
          </p>
        )}
      </label>
    );
  },
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
