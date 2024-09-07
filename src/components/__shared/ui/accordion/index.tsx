"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { useAssets } from "@/lib/custom-hooks/useAssets";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { icons } = useAssets();
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-6 text-base font-semibold text-[#2A4E55] transition-all hover:underline md:text-2xl [&[data-state=open]>img]:rotate-90",
          className,
        )}
        {...props}
      >
        {children}
        <Image
          src={icons.FaqArrowIcon}
          alt="toggle"
          width={34}
          height={34}
          layout="fixed"
          className="ml-auto size-8 transition-transform duration-200 md:size-10"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="w-11/12 overflow-hidden py-1 text-base transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down sm:text-lg"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
