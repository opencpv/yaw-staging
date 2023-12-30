"use client";
import { useDisclosure } from "@nextui-org/react";
import React from "react";
import Modal from "../__shared/modals/Modal";
import { FaTimesCircle } from "react-icons/fa";
import { useToastDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import FeedbackHeader from "./FeedbackHeader";
import FeedbackBody from "./FeedbackBody";

type Props = {
  // handleClick: () => void;
  className?: string;
};

const Feedback = ({ className }: Props) => {
  const { onOpen, isOpen, onOpenChange, onClose } = useDisclosure();
  const { onOpen: toastOnOpen } = useToastDisclosure();

  const handleSubmitFeedback = () => {
    onClose();
    toastOnOpen(
      "👍 Thank you! Your feedback is invaluable and will contribute to improving our services."
    );
  };

  return (
    <>
      <Modal
        closeButton={
          <FaTimesCircle
            className="cursor-pointer text-4xl text-red-500 xs:text-5xl"
            onClick={onClose}
          />
        }
        isDismissible={false}
        header={<FeedbackHeader handleClose={onClose} />}
        body={<FeedbackBody handleSubmitFeedback={handleSubmitFeedback} />}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="lg"
      />
      <h2 className="font-[400] cursor-pointer" onClick={onOpen}>
        Feedback
      </h2>
    </>
  );
};

export default Feedback;