"use client";
import Button from "@/components/__shared/ui/button/Button";
import Modal from "@/components/__shared/modals/Modal";
import SubscribeForm from "@/components/__shared/ui/SubscribeForm";
import { useDisclosure } from "@nextui-org/react";
import React from "react";
import { AnimationStyle } from "@/components/__shared/types";
import FramerWrapper from "@/components/__shared/FramerWrapper";
import { fadeInLeft } from "@/lib/animations";

type Props = {
  className?: string;
};

const SubscribeToBlogButton = ({ className }: Props) => {
  const { onOpen, isOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <>
      <Modal
        body={<SubscribeModalBody />}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
        size="5xl"
      />
      <FramerWrapper {...fadeInLeft}>
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

export const SubscribeModalBody = () => {
  return (
    <div className="flex items-center justify-center pb-20 pt-6">
      <SubscribeForm />
    </div>
  );
};

export default SubscribeToBlogButton;
