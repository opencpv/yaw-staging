"use client";
import Image from "next/image";
import { LiaTimesSolid } from "react-icons/lia";
// import { Modal } from "rsuite";

import {
  Modal as NextUIModal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

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
}: ModalProps) => {
  return (
    <>
      <NextUIModal
        classNames={{
          base: "relative z-50",
        }}
        scrollBehavior="inside"
        size={size ? size : "sm"}
        isDismissable={isDismissible === false ? isDismissible : true}
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        closeButton={
          closeButton ? (
            <div>{closeButton}</div>
          ) : (
            <div>
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
              <ModalFooter>{footer}</ModalFooter>
            </>
          )}
        </ModalContent>
      </NextUIModal>
    </>
  );
};

export default Modal;
