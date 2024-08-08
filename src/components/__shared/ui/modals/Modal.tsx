"use client";
import { LiaTimesSolid } from "react-icons/lia";
import { SlotsToClasses, cn } from "@nextui-org/react";

import {
  Modal as NextUIModal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalProps,
} from "@nextui-org/react";
import { useModalFullscreenStore } from "@/store/modal/useModalStore";
import { useEffect } from "react";

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
  className?: string;
  scrollBehavior?: "normal" | "inside";
  classNames?: ModalProps["classNames"];
  showScroll?: boolean;
};

const Modal = ({
  onClose,
  onOpenChange,
  isOpen,
  header,
  body,
  footer,
  size,
  isDismissible = true,
  closeButton,
  footerAlignment,
  hideCloseButton,
  backgroundColor,
  backdrop,
  className,
  scrollBehavior,
  classNames,
  showScroll = false,
}: Props) => {
  const setHideWindowScrollbar = useModalFullscreenStore(
    (state) => state.setHideWindowScrollbar,
  );

  useEffect(() => {
    isOpen && size === "full"
      ? setHideWindowScrollbar(true)
      : setHideWindowScrollbar(false);
  }, [isOpen, setHideWindowScrollbar, size]);

  return (
    <>
      <NextUIModal
        classNames={{
          backdrop: cn("z-[9999]", classNames?.backdrop),
          wrapper: cn("z-[99999]", classNames?.wrapper),
          body: cn(
            {
              "overflow-y-auto": size === "full",
              "hidden-scrolbar": !showScroll,
            },
            classNames?.body,
          ),
          footer: classNames?.footer,
          header: classNames?.header,
          base: cn(
            `relative focus:outline-none ${
              backgroundColor ? backgroundColor : "bg-[#fefefe]"
            }`,
            {
              "rounded-none max-h-screen": size === "full",
              "pointer-events-auto": isOpen,
            },
            className,
            classNames?.base,
          ),
          closeButton: "mr-3 mt-1",
        }}
        scrollBehavior={
          scrollBehavior
            ? scrollBehavior
            : size === "full"
              ? "normal"
              : "inside"
        }
        size={size ? size : "sm"}
        isDismissable={isDismissible ? true : false}
        isKeyboardDismissDisabled={isDismissible ? false : true}
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
            <button onClick={() => setHideWindowScrollbar(false)}>
              <LiaTimesSolid />
            </button>
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
