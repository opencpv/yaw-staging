"use client";
import Button from "@/components/__shared/ui/button/Button";
import Modal from "@/components/__shared/ui/modals/Modal";
import SubscribeForm from "@/components/__shared/ui/SubscribeForm";
import { useDisclosure } from "@nextui-org/react";
import React from "react";
import FramerWrapper from "@/components/__shared/hoc/FramerWrapper";
import { fadeIn } from "@/lib/animations";
import { useToastDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import ModalCloseIcon from "@/components/__shared/ui/modals/ModalCloseIcon";

type Props = {
  className?: string;
};

const SubscribeToBlogButton = ({ className }: Props) => {
  const { onOpen, isOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <>
      <Modal
        header={<div className="h-20"></div>}
        body={<SubscribeModalBody onClose={onClose} />}
        footer={<div className="h-20"></div>}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="normal"
        onClose={onClose}
        size="5xl"
      />
      <FramerWrapper {...fadeIn}>
        <Button
          color="accent"
          className={`min-h-fit w-full py-8 text-lg uppercase ${className}`}
          onClick={onOpen}
        >
          Subscribe to our blog
        </Button>
      </FramerWrapper>
    </>
  );
};

export const SubscribeModalBody = ({ onClose }: { onClose: () => void }) => {
  const { onOpen } = useToastDisclosure();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: handle logic
    onClose();
    onOpen("Congratulations, you are in the loop!", "success");
  };

  return (
    <div className="flex h-full items-center justify-center max-md:pb-20">
      <SubscribeForm onSubmit={handleSubmit} />
    </div>
  );
};

export default SubscribeToBlogButton;
