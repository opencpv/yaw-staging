"use client";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/__shared/ui/modals/dialog";

type Props = {
  body: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  open?: boolean;
  classNames?: {
    footer?: string;
  };
  onOpenChange?: (open: boolean) => void;
};

const StepsModal = ({
  header,
  body,
  footer,
  open,
  classNames,
  onOpenChange,
}: Props) => {
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        document.body.classList.add("pointer-events-none");
      }, 300);
    } else {
      setTimeout(() => {
        document.body.classList.remove("pointer-events-none");
      }, 300);
    }

    return () => {
      setTimeout(() => {
        document.body.classList.remove("pointer-events-none");
      }, 300);
    };
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="my-0 h-screen max-h-screen min-w-full rounded-none p-0"
        hideCloseButton
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogTitle className="sr-only" />
        <DialogHeader className="text-large flex flex-initial flex-col gap-1 px-6 py-4 font-semibold">
          {header}
        </DialogHeader>
        <div className="hidden-scrollbar flex h-full flex-1 flex-col justify-center gap-3 overflow-y-auto px-6 py-2">
          {body}
        </div>
        <DialogFooter
          className={cn(
            "mt-auto flex w-full flex-row justify-end space-x-2 border-t px-6 py-4",
            classNames?.footer,
          )}
        >
          {footer}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default StepsModal;
