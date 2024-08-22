import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import Link from "next/link";

const buttonVariants = cva(
  "inline-flex gap-2 w-fit items-center justify-center whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-transform hover:scale-102",
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
        accent: "bg-accent text-white",
        destructive: "bg-red-500 text-white hover:bg-red-500/90",
        outline: "border border-input hover:bg-transparent",
        ghost: "text-primary hover:bg-accent hover:bg-transparent",
        link: "text-primary hover:bg-transparent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-4 sm:px-8 py-2",
        sm: "h-9 px-3",
        lg: "px-4 sm:px-14",
        fit: "p-0",
        full: "w-full",
        icon: "h-fit w-fit p-1",
      },
      radius: {
        default: "rounded-md",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

const LinkButton = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & ButtonProps
>(({ children, href, ...props }, ref) => {
  return (
    <Button asChild {...props}>
      <Link href={href || ""} ref={ref}>
        {children}
      </Link>
    </Button>
  );
});
LinkButton.displayName = "LinkButton";

export { Button, LinkButton, buttonVariants };
