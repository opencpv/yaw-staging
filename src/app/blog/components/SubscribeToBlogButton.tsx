"use client";
import { Button } from "@/components/__shared/ui/button";
import SubscribeForm from "@/components/__shared/ui/form/SubscribeForm";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import React from "react";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";
const Modal = dynamic(() =>
  import("@/components/__shared/ui/modals/dialog").then((mod) => mod.Modal),
);
const FramerWrapper = dynamic(
  () => import("@/components/__shared/hoc/framer-wrapper"),
);

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
      />
      <FramerWrapper>
        <Button
          variant="accent"
          size="lg"
          className={`no-print min-h-fit bg-gradient-to-b from-[#E5BF79] to-[#B58E48EB]/90 uppercase ${className}`}
          onClick={onOpen}
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
