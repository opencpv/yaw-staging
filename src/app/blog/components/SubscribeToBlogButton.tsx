"use client";
import Button from "@/components/__shared/ui/button/Button";
// import Modal from "@/components/__shared/ui/modals/Modal";
import SubscribeForm from "@/components/__shared/ui/form/SubscribeForm";
// import { useDisclosure } from "@nextui-org/react";
import React from "react";
import FramerWrapper from "@/components/__shared/hoc/FramerWrapper";
import toast from "react-hot-toast";

type Props = {
  className?: string;
};

const SubscribeToBlogButton = ({ className }: Props) => {
  // const { onOpen, isOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <>
      {/* <Modal
        header={<div className="h-20"></div>}
        body={<SubscribeModalBody onClose={onClose} />}
        footer={<div className="h-20"></div>}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="normal"
        onClose={onClose}
        size="5xl"
      /> */}
      <FramerWrapper>
        <Button
          color="accent"
          className={`no-print min-h-fit w-full bg-gradient-to-b from-[#E5BF79] to-[#B58E48EB]/90 py-7 text-lg uppercase sm:py-10 ${className}`}
          // onClick={onOpen}
        >
          Subscribe to our blog
        </Button>
      </FramerWrapper>
    </>
  );
};

export const SubscribeModalBody = ({ onClose }: { onClose: () => void }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: handle logic
    onClose();
    toast.success("Congratulations, you are in the loop!");
  };

  return (
    <div className="flex h-full items-center justify-center max-md:pb-20">
      <SubscribeForm onSubmit={handleSubmit} />
    </div>
  );
};

export default SubscribeToBlogButton;
