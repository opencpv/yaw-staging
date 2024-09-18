"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

/**
 *Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
 */
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    message?: React.ReactNode;
    classNames?: {
      message?: string;
    };
  }
>(({ className, value, message, classNames, ...props }, ref) => (
  <div>
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-primary-50 sm:h-4",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="relative h-full w-full flex-1 rounded-r-[inherit] bg-primary transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
    {message && (
      <div
        className={cn("relative top-3 z-50 w-full flex-1", classNames?.message)}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      >
        <div
          className="fade-in-left absolute right-0 top-0 rounded-2xl bg-primary-300 px-3 py-4 text-base text-shade-300 shadow-md"
          style={{ animationDuration: "0.5s" }}
        >
          {message}
        </div>
      </div>
    )}
  </div>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
