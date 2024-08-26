"use client";

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
  scrollBehavior?: "inside" | "outside";
  className?: string;
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
    scrollBehavior?: "inside" | "outside";
  }
>(({ className, children, closeButton, scrollBehavior, ...props }, ref) => (
  <DialogPortal>
    {scrollBehavior === "inside" ? (
      <>
        <DialogOverlay />
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 sm:rounded-lg",
            className,
          )}
          {...props}
        >
          {children}
          <DialogPrimitive.Close className="data-[state=open]:text-muted-foreground absolute right-4 top-4 z-50 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:pointer-events-none">
            {closeButton ? closeButton : <LuX className="h-4 w-4" />}
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </>
    ) : (
      <DialogOverlay className="overflow-y-auto">
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            "relative left-[50%] top-[50%] z-50 mt-10 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 sm:rounded-lg",
            className,
          )}
          {...props}
        >
          {children}
          <DialogPrimitive.Close className="data-[state=open]:text-muted-foreground absolute right-4 top-4 z-50 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:pointer-events-none">
            {closeButton ? closeButton : <LuX className="h-4 w-4" />}
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogOverlay>
    )}
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
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
  <div
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
    className={cn("text-muted-foreground text-sm", className)}
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
  size = "3xl",
  closeButton,
  isDismissible = true,
  className,
  scrollBehavior = "inside",
}: ModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          `max-w-${size}`,
          {
            "min-h-screen sm:rounded-none": size === "full",
          },
          className,
        )}
        closeButton={closeButton}
        onEscapeKeyDown={(e) => {
          !isDismissible && e.preventDefault();
        }}
        onInteractOutside={(e) => {
          !isDismissible && e.preventDefault();
        }}
        onPointerDownOutside={(e) => {
          !isDismissible && e.preventDefault();
        }}
        scrollBehavior={scrollBehavior}
      >
        <DialogHeader>
          {header && <DialogTitle>{header}</DialogTitle>}
          <DialogDescription>{body}</DialogDescription>
        </DialogHeader>
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
