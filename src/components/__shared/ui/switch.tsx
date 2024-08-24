"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const BaseSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "focus-visible:ring-ring focus-visible:ring-offset-background peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:border data-[state=unchecked]:border-neutral-300 data-[state=checked]:bg-primary data-[state=unchecked]:bg-transparent",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-1 data-[state=unchecked]:bg-neutral-200",
      )}
    />
  </SwitchPrimitives.Root>
));
BaseSwitch.displayName = "BaseSwitch";

const Switch = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement> & {
    label?: string;
    disabled?: boolean;
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
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
      onCheckedChange,
      ...props
    },
    ref,
  ) => (
    <label className="flex w-fit items-center space-x-2" {...props} ref={ref}>
      {disabled ? (
        <BaseSwitch
          checked={checked}
          onCheckedChange={onCheckedChange}
          disabled
          aria-readonly
        />
      ) : (
        <BaseSwitch checked={checked} onCheckedChange={onCheckedChange} />
      )}
      {label && (
        <span
          className={cn(
            "text-shade-200",
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
  ),
);
Switch.displayName = "Switch";

export { Switch };
