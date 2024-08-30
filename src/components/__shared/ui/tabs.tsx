"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

type Option = {
  label: string;
  icon?: React.ReactNode;
};

const BaseTabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center gap-3 p-1 text-primary",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    variant?: "default" | "rounded";
    size?: "sm" | "md";
  }
>(({ className, variant, size = "sm", ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "ring-offset-background inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary-50 px-6 py-2 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm",
      {
        "sm:px-16": size === "md",
        "rounded-full bg-transparent": variant === "rounded",
      },
      className,
    )}
    type="button"
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "ring-offset-background mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> & {
    options?: (string | Option)[];
    variant?: "default" | "rounded";
    size?: "sm" | "md";
    onSelectionChange?: (key: string) => void;
    selectedKey?: string;
  }
>(
  (
    {
      className,
      children,
      options,
      onSelectionChange,
      selectedKey,
      variant = "default",
      size = "sm",
      ...props
    },
    ref,
  ) => (
    <BaseTabs
      className={className}
      ref={ref}
      onValueChange={onSelectionChange}
      value={selectedKey}
      {...props}
    >
      {options ? (
        <TabsList>
          {options.map((option) => (
            <React.Fragment
              key={typeof option === "string" ? option : option.label}
            >
              {typeof option !== "string" ? (
                <TabsTrigger
                  key={option.label}
                  value={option.label}
                  variant={variant}
                  size={size}
                >
                  {option.label} {option.icon}
                </TabsTrigger>
              ) : (
                <TabsTrigger key={option} value={option} variant={variant}>
                  {option}
                </TabsTrigger>
              )}
            </React.Fragment>
          ))}
        </TabsList>
      ) : (
        children
      )}
    </BaseTabs>
  ),
);
Tabs.displayName = "Tabs";

export { Tabs, TabsList, TabsTrigger, TabsContent };
