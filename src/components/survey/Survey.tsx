"use client";
import { useDisclosure } from "@nextui-org/react";
import React from "react";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import Modal from "../__shared/modals/Modal";
import { FaTimesCircle } from "react-icons/fa";
import SurveyBody from "./SurveyBody";
import SurveyHeader from "./SurveyHeader";
import { useToastDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";

type Props = {
  // handleClick: () => void;
  className?: string;
};

const Survey = ({ className }: Props) => {
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
        header={<SurveyHeader handleClose={onClose} />}
        body={<SurveyBody handleSubmitFeedback={handleSubmitFeedback} />}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="lg"
      />
      <div
        className="ml-5 inline-flex cursor-pointer items-center"
        onClick={onOpen}
      >
        <div
          className={`relative z-20 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-t from-primary-500 to-primary-400 shadow-lg ${className}`}
        >
          <HiOutlineChatBubbleOvalLeftEllipsis className="text-3xl text-white" />
        </div>
        <div className="relative left-[-12%] flex h-14 w-52 items-center justify-center rounded-r-[3rem] bg-gradient-to-b from-primary-500 to-primary-400 text-white">
          Survey
        </div>
      </div>
    </>
  );
};

export default Survey;
