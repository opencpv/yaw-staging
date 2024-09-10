"use client";

import style from "../../Shared.module.css";
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/lib/utils";
import { LuX } from "react-icons/lu";

type ModalProps = {
  onOpenChange: (open: boolean) => void;
  isOpen: boolean;
  body: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  size?:
    | "full"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl";
  closeButton?: React.ReactNode;
  isDismissible?: boolean;
  hideCloseButton?: boolean;
  className?: string;
  /**
   * Event handler called when auto-focusing on open. Can be prevented.
   */
  onOpenAutoFocus?: (event: Event) => void;
};

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    closeButton?: React.ReactNode;
    hideCloseButton?: boolean;
  }
>(({ className, children, closeButton, hideCloseButton, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "hidden-scrollbar fixed left-[50%] top-[50%] z-50 grid max-h-[calc(100%_-_7.5rem)] w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 overflow-y-auto border bg-white p-6 text-black shadow-lg duration-200 sm:rounded-lg",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close
        className={cn(style.dialogClose, {
          hidden: hideCloseButton,
        })}
      >
        {closeButton ? closeButton : <LuX className="h-4 w-4" />}
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <header
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className,
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <footer
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-muted-foreground mx-auto w-full text-sm", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

const Modal = ({
  onOpenChange,
  isOpen,
  header,
  body,
  footer,
  size = "2xl",
  closeButton,
  isDismissible = true,
  className,
  hideCloseButton,
  onOpenAutoFocus,
}: ModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          {
            "min-h-screen min-w-full sm:rounded-none": size === "full",
            "max-w-xs": size === "xs",
            "max-w-sm": size === "sm",
            "max-w-md": size === "md",
            "max-w-lg": size === "lg",
            "max-w-xl": size === "xl",
            "max-w-2xl": size === "2xl",
            "max-w-3xl": size === "3xl",
            "max-w-4xl": size === "4xl",
            "max-w-5xl": size === "5xl",
          },
          className,
        )}
        closeButton={closeButton}
        hideCloseButton={hideCloseButton}
        onOpenAutoFocus={onOpenAutoFocus}
        onEscapeKeyDown={(e) => {
          !isDismissible && e.preventDefault();
        }}
        onInteractOutside={(e) => {
          !isDismissible && e.preventDefault();
        }}
        onPointerDownOutside={(e) => {
          !isDismissible && e.preventDefault();
        }}
      >
        <DialogHeader>
          {header && <DialogTitle>{header}</DialogTitle>}
        </DialogHeader>
        <div className="mx-auto w-full">{body}</div>
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
};

export {
  Modal,
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
