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
import { useEffect } from "react";
import { useLockBodyScroll } from "@uidotdev/usehooks";

type Props = {
  onOpenChange: (open: boolean) => void;
  isOpen: boolean;
  body: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  onClose?: () => void;
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
  isDismissible?: boolean;
  closeButton?: React.ReactNode;
  footerAlignment?: any;
  hideCloseButton?: boolean;
  backgroundColor?: any;
  backdrop?: any;
  backdropClassName?: string;
  bodyClassName?: string;
  className?: string;
  footerClassName?: string;
  wrapperClassName?: string;
  scrollBehavior?: "normal" | "inside";
};

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
  backdropClassName,
  className,
  footerClassName,
  wrapperClassName,
  bodyClassName,
  scrollBehavior,
}: Props) => {
  const setHideWindowScrollbar = useModalFullscreenStore(
    (state) => state.setHideWindowScrollbar,
  );

  useEffect(() => {
    isOpen ? setHideWindowScrollbar(true) : setHideWindowScrollbar(false);
  }, [isOpen, setHideWindowScrollbar]);

  return (
    <>
      <NextUIModal
        classNames={{
          backdrop: cn("z-[9999]", backdropClassName),
          wrapper: cn("z-[99999]", wrapperClassName),
          body: cn(
            "hidden-scrollbar",
            {
              "overflow-y-auto": size === "full",
            },
            bodyClassName,
          ),
          footer: footerClassName,
          base: cn(
            `relative focus:outline-none ${
              backgroundColor ? backgroundColor : "bg-[#fefefe]"
            }`,
            {
              "rounded-none max-h-screen": size === "full",
            },
            className,
          ),
        }}
        // scrollBehavior={size === "full" ? "inside" : "inside"}
        scrollBehavior={
          scrollBehavior
            ? scrollBehavior
            : size === "full"
              ? "normal"
              : "inside"
        }
        size={size ? size : "sm"}
        isDismissable={isDismissible === false ? isDismissible : true}
        isKeyboardDismissDisabled={!isDismissible ? true : false}
        placement={"center"}
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
            <div onClick={() => setHideWindowScrollbar(false)}>
              {closeButton}
            </div>
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
              {header && (
                <ModalHeader className="flex flex-col gap-1">
                  {header}
                </ModalHeader>
              )}
              <ModalBody>{body}</ModalBody>
              {footer && (
                <ModalFooter
                  style={{
                    justifyContent: footerAlignment ? footerAlignment : "start",
                  }}
                >
                  {footer}
                </ModalFooter>
              )}
            </>
          )}
        </ModalContent>
      </NextUIModal>
    </>
  );
};

export default Modal;
