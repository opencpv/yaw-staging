import {
  Popover,
  PopoverContent,
  PopoverPlacement,
  PopoverTrigger,
} from "@/components/__shared/ui/popover";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  placement?: any;
  children: React.ReactNode[];
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export const ActionPopover = (props: Props) => {
  return (
    <>
      <Popover open={props.isOpen} onOpenChange={props.onOpenChange}>
        {props.children}
      </Popover>
    </>
  );
};

type TriggerProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  onMouseOver?: () => void;
};

export const ActionItemTrigger = (props: TriggerProps) => {
  return (
    <PopoverTrigger
      className={cn("h-fit w-fit", props.className)}
      onClick={props.onClick}
      onMouseOver={props.onMouseOver}
      asChild
    >
      <button>{props.children}</button>
    </PopoverTrigger>
  );
};

export const ActionContent = ({
  children,
  className,
  placement = "left",
}: {
  children: React.ReactNode;
  className?: string;
  placement?: PopoverPlacement;
}) => {
  return (
    <PopoverContent
      className={cn(
        "pointer-events-auto relative z-50 w-fit rounded-lg bg-[#fefefe] px-0 py-0",
        className,
      )}
      side={placement}
    >
      <div className="flex flex-col divide-y divide-neutral-100 rounded-lg">
        {children}
      </div>
    </PopoverContent>
  );
};

type ItemProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
} & React.HTMLAttributes<HTMLElement>;

export const ActionItem = (props: ItemProps) => {
  if (props.href)
    return (
      <Link
        target={props.target}
        href={props.href}
        rel="noopener noreferrer"
        className={cn(
          "deep-green-hover flex w-full items-center gap-2 px-4 py-2 first:rounded-t-lg last:rounded-b-lg",
          {
            "pointer-events-none cursor-not-allowed text-shade-200":
              props.disabled,
          },
          props.className,
        )}
        onClick={props.onClick}
        {...props}
      >
        {props.children}
      </Link>
    );
  else
    return (
      <button
        className={cn(
          "deep-green-hover flex w-full items-center gap-2 px-4 py-2 first:rounded-t-lg last:rounded-b-lg",
          {
            "pointer-events-none cursor-not-allowed text-shade-200":
              props.disabled,
          },
          props.className,
        )}
        onClick={props.onClick}
        {...props}
      >
        {props.children}
      </button>
    );
};
