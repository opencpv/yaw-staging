import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  TooltipPlacement,
} from "@nextui-org/react";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  placement?: TooltipPlacement;
  children: React.ReactNode[];
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export const ActionPopover = (props: Props) => {
  return (
    <>
      <Popover
        style={{ zIndex: "99999" }}
        placement={props.placement || "left"}
        isOpen={props.isOpen}
        onOpenChange={props.onOpenChange}
      >
        {props.children}
      </Popover>
    </>
  );
};

type TriggerProps = {
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
};

export const ActionItemTrigger = (props: TriggerProps) => {
  return (
    <PopoverTrigger className="h-fit w-fit" onClick={props.onClick}>
      <button className={cn(props.className)}>{props.children}</button>
    </PopoverTrigger>
  );
};

export const ActionContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <PopoverContent className="rounded-md bg-[#fefefe] px-0 py-0">
      <div className="flex flex-col divide-y rounded-md">{children}</div>
    </PopoverContent>
  );
};

type ItemProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
};

export const ActionItem = (props: ItemProps) => {
  if (props.href)
  return (
    <Link href={props.href}
      className={cn(
        "deep-green-hover flex w-full items-center gap-2 px-4 py-2",
        {
          "pointer-events-none cursor-not-allowed text-shade-200":
            props.disabled,
        },
        props.className,
      )}
      onClick={props.onClick}
    >
      {props.children}
    </Link>
  );
  else
  return (
    <button
      className={cn(
        "deep-green-hover flex w-full items-center gap-2 px-4 py-2",
        {
          "pointer-events-none cursor-not-allowed text-shade-200":
            props.disabled,
        },
        props.className,
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
