"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Tooltip } from "../tooltip";
import { BsInfoCircle } from "react-icons/bs";

const labelVariants = cva(
  "text-base font-normal items-center flex gap-x-1.5 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

const Label = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> &
    VariantProps<typeof labelVariants> & {
      required?: boolean;
      tooltip?: string;
    }
>(({ className, children, required, tooltip, ...props }, ref) => (
  <p ref={ref} className={cn(labelVariants(), className)} {...props}>
    {children}
    {required && <span className="relative text-sm text-shade-300">*</span>}
    {tooltip && (
      <Tooltip content={tooltip}>
        <BsInfoCircle className="ml-1" size={15} />
      </Tooltip>
    )}
  </p>
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
