"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { LuCheck, LuChevronDown, LuChevronUp } from "react-icons/lu";

import { cn } from "@/lib/utils";

type SelectContentProps = {
  constraint?: boolean;
};

type SelectTriggerProps = {
  variant?: "ghost" | "outline";
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
>(({ className, children, variant = "outline", ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "ring-offset-background flex h-10 w-full items-center justify-between rounded-md bg-transparent px-3 py-2 text-sm placeholder:text-shade-500 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 [&>svg]:transition-transform [&[data-state=open]>svg]:rotate-180",
      {
        border: variant === "outline",
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
));
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
          >
            {value ? (
              <SelectValue aria-label={value}>
                {options[value as any]}
              </SelectValue>
            ) : (
              <SelectValue placeholder={placeholder || "Select..."} />
            )}
          </SelectTrigger>
          <SelectContent constraint={constraint} ref={ref}>
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

export {
  Select,
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

// import React from "react";
// // import { Select as NextUISelect, SelectItem, cn } from "@nextui-org/react";
// import { cn } from "@/lib/utils";
// import { FaCaretDown } from "react-icons/fa";
// import { LowerCase } from "@/lib/utils/stringManipulation";

// type Props = {
//   options: string[];
//   value: string;
//   handleSelectionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
//   radius?: "full" | "none";
//   variant?: "default" | "ghost";
//   color?: "default" | "primary";
//   selectorIcon?: React.ReactNode;
//   className?: string;
//   valueClassName?: string;
//   disabled?: boolean;
//   triggerClassName?: string;
//   selectorIconClassName?: string;
// };

// const Select = ({
//   options,
//   handleSelectionChange,
//   value,
//   radius = "full",
//   selectorIcon,
//   className,
//   valueClassName,
//   variant,
//   color,
//   disabled,
//   triggerClassName,
//   selectorIconClassName,
// }: Props) => {
//   return (
//     // <NextUISelect
//     //   size="sm"
//     //   radius={radius}
//     //   label="select"
//     //   //   selectionMode="single"
//     //   isDisabled={disabled}
//     //   labelPlacement="outside"
//     //   selectedKeys={[value]}
//     //   disallowEmptySelection
//     //   classNames={{
//     //     // mainWrapper: [variant === "ghost" && "hover:bg-transparent"],
//     //     base: cn(
//     //       "w-44 mx-auto text-xs hover:bg-neutral-100 rounded-full",
//     //       className,
//     //       {
//     //         "text-base rounded-md": variant === "ghost",
//     //         "opacity-100": disabled,
//     //       },
//     //     ),
//     //     value: cn("text-xs", valueClassName, {
//     //       "text-base": variant === "ghost",
//     //     }),
//     //     selectorIcon: cn(
//     //       `mr-5 h-3 w-3`,
//     //       {
//     //         "text-accent-50": color === "default",
//     //         "text-primary-100": color === "primary",
//     //         "h-4.5 w-4.5 mr-0": variant === "ghost",
//     //       },
//     //       selectorIconClassName,
//     //     ),
//     //     trigger: cn(
//     //       "px-10 z-30",
//     //       {
//     //         "pl-2 text-base bg-transparent data-[hover=true]:bg-transparent shadow-none":
//     //           variant === "ghost",
//     //         "bg-neutral-300": disabled,
//     //       },
//     //       triggerClassName,
//     //     ),
//     //     label: "hidden",
//     //   }}
//     //   selectorIcon={selectorIcon ? selectorIcon : <FaCaretDown />}
//     //   onChange={handleSelectionChange}
//     // >
//     //   {options.map((option) => (
//     //     <SelectItem
//     //       key={LowerCase(option)}
//     //       className={cn("text-neutral-800", {
//     //         "text-base": variant === "ghost",
//     //         "focus:outline-none data-[hover=true]:bg-primary-100 data-[focus-visible=true]:outline-primary-100 data-[selectable=true]:focus:bg-primary-100":
//     //           color === "primary",
//     //         "focus:outline-none data-[hover=true]:bg-accent-50 data-[focus-visible=true]:outline-accent-50 data-[selectable=true]:focus:bg-accent-50":
//     //           color === "default" || !color,
//     //       })}
//     //       value={LowerCase(option)}
//     //     >
//     //       {option}
//     //     </SelectItem>
//     //   ))}
//     // </NextUISelect>
//     <div></div>
//   );
// };

// export default Select;
