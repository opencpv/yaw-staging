"use client";
import React, { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

type Props = {
  body: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  open?: boolean;
  footerClassName?: string;
  onOpenChange?: (open: boolean) => void;
};

const StepsModal = ({
  header,
  body,
  footer,
  open,
  footerClassName,
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
      document.body.classList.remove("pointer-events-none");
    };
  }, [open]);

  return (
    <Dialog.Root onOpenChange={onOpenChange} open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-[200] bg-blackA6" />
        <Dialog.Content
          className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] z-[200] box-border flex h-[100dvh] max-h-screen w-[100dvw] translate-x-[-50%] translate-y-[-50%] flex-col overflow-y-hidden !rounded-none bg-[#fefefe] shadow-small outline-none focus:outline-none"
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          {header && (
            <div className="flex flex-initial flex-col gap-1 px-6 py-4 text-large font-semibold">
              {header}
            </div>
          )}

          <div className="hidden-scrollbar flex flex-1 flex-col gap-3 overflow-y-auto px-6 py-2">
            {body}
          </div>
          {footer && (
            <div
              className={cn(
                "flex flex-row justify-end gap-2 border-t px-6 py-4",
                footerClassName,
              )}
            >
              {footer}
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default StepsModal;
