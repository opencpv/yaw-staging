"use client";
import { LiaTimesSolid } from "react-icons/lia";
import { cn } from "@nextui-org/react";

import {
  Modal as NextUIModal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { useModalFullscreenStore } from "@/store/modal/useModalStore";

const Modal = ({
  onClose,
  onOpenChange,
  isOpen,
  header,
  body,
  footer,
  size,
  isDismissible,
  closeButton,
  footerAlignment,
  hideCloseButton,
  backgroundColor,
  backdrop,
  className,
}: ModalProps) => {
  const setHideWindowScrollbar = useModalFullscreenStore(
    (state) => state.setHideWindowScrollbar
  );

  return (
    <>
      <NextUIModal
        classNames={{
          base: cn(
            `relative z-50 ${backgroundColor ? backgroundColor : null} ${
              size === "full" && "rounded-none"
            }`,
            className
          ),
        }}
        scrollBehavior={size === "full" ? "normal" : "inside"}
        size={size ? size : "sm"}
        isDismissable={isDismissible === false ? isDismissible : true}
        placement={size === "full" ? undefined : "center"}
        isOpen={isOpen}
        hideCloseButton={hideCloseButton ? true : false}
        backdrop={backdrop ? backdrop : undefined}
        onClose={() => {
          onClose && onClose();
          setHideWindowScrollbar(false);
        }}
        onOpenChange={onOpenChange}
        closeButton={
          closeButton ? (
            <div onClick={() => setHideWindowScrollbar(false)}>{closeButton}</div>
          ) : (
            <div onClick={() => setHideWindowScrollbar(false)}>
              <LiaTimesSolid />
            </div>
          )
        }
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {header}
              </ModalHeader>
              <ModalBody>{body}</ModalBody>
              <ModalFooter
                style={{
                  justifyContent: footerAlignment ? footerAlignment : "start",
                }}
              >
                {footer}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </NextUIModal>
    </>
  );
};

export default Modal;
