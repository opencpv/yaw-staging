import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LuLoader2 } from "react-icons/lu";

const buttonVariants = cva(
  "inline-flex gap-2 w-fit items-center justify-center whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-transform hover:scale-102",
  {
    variants: {
      color: {
        primary: "border-primary text-primary",
        accent: "border-accent text-accent",
        white: "border-shade-500 text-shade-500",
        gradient: "border-primary text-primary",
      },
      variant: {
        default: "bg-primary text-white",
        accent: "bg-accent text-white",
        white: "bg-white text-shade-500",
        gradient: "bg-gradient-to-r from-primary-500 to-primary-400 text-white",
        destructive: "bg-red-500 text-white hover:bg-red-500/90",
        outline: "border bg-transparent hover:bg-transparent",
        ghost: "bg-transparent hover:bg-accent hover:bg-transparent",
        link: "hover:bg-transparent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-4 sm:px-8 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-4 py-7 w-full text-lg sm:py-10",
        fit: "p-0",
        full: "w-full h-12 px-4 sm:px-8 py-2",
        icon: "h-fit w-fit p-1",
      },
      radius: {
        default: "rounded-md",
        lg: "!rounded-xl",
        full: "!rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "default",
      color: "primary",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  color?: "primary" | "accent" | "white" | "gradient";
  isLoading?: boolean;
}

const BaseButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, color, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className, color }))}
        ref={ref}
        //color={color}
        {...props}
      />
    );
  },
);
BaseButton.displayName = "BaseButton";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
>(({ children, isLoading, ...props }, ref) => {
  return (
    <BaseButton ref={ref} disabled={isLoading} {...props}>
      <>
        {isLoading && <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </>
    </BaseButton>
  );
});
Button.displayName = "Button";

const LinkButton = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & ButtonProps
>(
  (
    { children, href, className, variant, size, color, radius, ...props },
    ref,
  ) => {
    return (
      <Link
        href={href || ""}
        className={cn(
          buttonVariants({ variant, size, className, color, radius }),
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Link>
    );
  },
);
LinkButton.displayName = "LinkButton";

export { Button, LinkButton, buttonVariants };
