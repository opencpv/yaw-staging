"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { LuCheck, LuChevronDown, LuChevronUp } from "react-icons/lu";

import { cn } from "@/lib/utils";
import {
  FieldHelperProps,
  FieldInputProps,
  FieldMetaProps,
  useFormikContext,
} from "formik";
import ErrorMessage from "../states/error-message";

type SelectContentProps = {
  position?: "popper" | "item-aligned";
  constraint?: boolean;
};

type SelectTriggerProps = {
  variant?: "default" | "ghost" | "outline";
  radius?: "default" | "full";
};

type SelectItemProps = {
  color?: "primary" | "accent";
};

const BaseSelect = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> &
    SelectTriggerProps
>(
  (
    { className, children, variant = "default", radius = "default", ...props },
    ref,
  ) => (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        "ring-offset-background flex h-10 w-full items-center justify-between rounded-md bg-transparent px-3 py-2 text-sm placeholder:text-shade-500 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 [&>svg]:transition-transform [&[data-state=open]>svg]:rotate-180",
        {
          "bg-neutral-100": variant === "default",
          border: variant === "outline",
          "rounded-full": radius === "full",
        },
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <LuChevronDown className="h-5 w-5 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  ),
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className,
    )}
    {...props}
  >
    <LuChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className,
    )}
    {...props}
  >
    <LuChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> &
    SelectContentProps
>(({ className, children, position = "popper", constraint, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-white text-shade-500 shadow-md data-[state=closed]:animate-zoom-out data-[state=open]:animate-zoom-in",
        {
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1":
            position === "popper",
          "max-h-[var(--radix-select-content-available-height)] w-[var(--radix-select-trigger-width)]":
            constraint,
        },
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & SelectItemProps
>(({ className, children, color, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "focus:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-neutral-200 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      {
        "focus:bg-primary-100 focus:text-white": color === "primary",
        "focus:bg-accent focus:text-white": color === "accent",
      },
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <LuCheck className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-neutral-300", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

/**
 * Displays a list of options for the user to pick from—triggered by a button.
 */
const Select = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> &
    React.ComponentPropsWithRef<typeof SelectPrimitive.Root> &
    SelectTriggerProps &
    SelectContentProps &
    SelectItemProps & {
      options?: string[];
      placeholder?: string;
      classNames?: {
        trigger?: string;
      };
    }
>(
  (
    {
      options,
      onValueChange,
      value,
      children,
      placeholder,
      variant,
      constraint,
      classNames,
      color,
      radius,
      position,
      ...props
    },
    ref,
  ) => (
    <BaseSelect onValueChange={onValueChange} value={value} {...props}>
      {options ? (
        <>
          <SelectTrigger
            className={cn("w-[180px]", classNames?.trigger)}
            variant={variant}
            radius={radius}
          >
            {value ? (
              <SelectValue aria-label={value}>
                {options[value as any]}
              </SelectValue>
            ) : (
              <SelectValue placeholder={placeholder || "Select..."} />
            )}
          </SelectTrigger>
          <SelectContent position={position} constraint={constraint} ref={ref}>
            {options?.map((option) => (
              <SelectItem key={option} value={option} color={color}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </>
      ) : (
        children
      )}
    </BaseSelect>
  ),
);
Select.displayName = "Select";

type Props = {
  placeholder?: string;
  options: string[];
  onChange?: (value: any) => void;
  label?: string;
  className?: string;
  classNames?: {
    option?: string;
    placeholder?: string;
  };
  value?: string;
  name?: string;
  /** A string that shows before the value. Eg: GHS 1000 */
  prefix?: string;
};

/**
 * Displays a list of options for the user to pick from—triggered by a button. Preferrably used in a Formik context. <br />
 * Name is required if used in a Formik context.
 */
const SelectInput = ({
  label,
  options,
  onChange,
  placeholder,
  value,
  className,
  classNames,
  prefix,
  name,
}: Props) => {
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
    <div className={cn("flex w-full flex-col gap-4 text-shade-300", className)}>
      {label && <label>{label}</label>}
      <Select
        onValueChange={(value) => {
          helpers?.setValue(value);
          onChange?.(value);
        }}
        value={field?.value || value}
        name={field?.name || name}
      >
        <SelectTrigger
          className={`form-field-border h-[52px] w-full bg-white px-3 py-2`}
        >
          <div
            className={cn("flex items-center gap-5", classNames?.placeholder)}
          >
            {prefix && <span>{prefix}</span>}
            <SelectValue placeholder={placeholder} />
          </div>
        </SelectTrigger>
        <SelectContent>
          {options.map((option, index) => (
            <SelectItem
              key={index}
              value={option}
              className={cn("capitalize", classNames?.option)}
              color="accent"
            >
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {formikContext ? <ErrorMessage name={field?.name as string} /> : null}
    </div>
  );
};
SelectInput.displayName = "SelectInput";

export {
  Select,
  SelectInput,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
