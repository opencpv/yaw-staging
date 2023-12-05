"use client";
import AOSWrapper from "@/components/__shared/AOSWrapper";
import Button from "@/components/__shared/Button";
import Modal from "@/components/__shared/modals/Modal";
import SubscribeForm from "@/components/__shared/ui/SubscribeForm";
import { useDisclosure } from "@nextui-org/react";
import React from "react";

type Props = {};

const SubscribeToBlogButton = (props: Props) => {
  const { onOpen, isOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <>
      <Modal
        body={<SubscribeModalBody />}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
        size="full"
      />
      <AOSWrapper animation="fade-up" duration="1000">
        <Button
          color="accent"
          className="w-full py-8 mb-20 text-lg uppercase min-h-fit"
          onClick={onOpen}
        >
          Subscribe to our blog
        </Button>
      </AOSWrapper>
    </>
  );
};

export const SubscribeModalBody = () => {
  return (
    <div className="flex items-center justify-center">
      <SubscribeForm />
    </div>
  );
};

export default SubscribeToBlogButton;
