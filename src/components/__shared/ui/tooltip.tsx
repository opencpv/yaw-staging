"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";
import { PopoverContent, PopoverTrigger } from "./popover";
import dynamic from "next/dynamic";
const Popover = dynamic(() =>
  import("@/components/__shared/ui/popover").then((mod) => mod.Popover),
);

const TooltipProvider = TooltipPrimitive.Provider;

const BaseTooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "text-popover-foreground z-50 overflow-hidden rounded-md border bg-white p-5 text-sm shadow-md data-[state=closed]:animate-fade-out data-[state=opened]:animate-zoom-in",
      className,
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const Tooltip = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, content, side = "top", children, ...props }, ref) => (
  <>
    <span className="max-md:hidden">
      <TooltipProvider>
        <BaseTooltip>
          <TooltipTrigger type="button">{children}</TooltipTrigger>
          <TooltipContent
            className={cn(className, { hidden: !content })}
            ref={ref}
            {...props}
          >
            {content}
          </TooltipContent>
        </BaseTooltip>
      </TooltipProvider>
    </span>

    {/* Popover used as Tooltip on mobile since tooltip works only on hover */}
    <span className="md:hidden">
      <Popover>
        <PopoverTrigger className="h-fit w-fit">
          <button className="h-fit w-fit">{children}</button>
        </PopoverTrigger>
        <PopoverContent
          side={side}
          className={cn(
            "bg-white p-5 xs:w-[400px]",
            {
              hidden: !content,
            },
            className,
          )}
        >
          {content}
        </PopoverContent>
      </Popover>
    </span>
  </>
));
Tooltip.displayName = "Tooltip";

export { Tooltip };
