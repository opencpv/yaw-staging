"use client";
import { useDisclosure } from "@nextui-org/react";
import React, { KeyboardEvent } from "react";
import Modal from "../__shared/modals/Modal";
import { FaTimesCircle } from "react-icons/fa";
import { useToastDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import SurveyBody from "./SurveyBody ";
import SurveyHeader from "./SurveyHeader";

type Props = {
  // handleClick: () => void;
  className?: string;
  children?: React.ReactNode;
};

const Survey = ({ children }: Props) => {
  const { onOpen, isOpen, onOpenChange, onClose } = useDisclosure();
  const { onOpen: toastOnOpen } = useToastDisclosure();

  const handleSubmitSurvey = () => {
    onClose();
    toastOnOpen(
      "👍 Thank you! Your feedback is invaluable and will contribute to improving our services.",
    );
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      onOpen();
    }
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
        body={<SurveyBody handleSubmitSurvey={handleSubmitSurvey} />}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="lg"
      />
      <div
        className="cursor-pointer"
        onClick={onOpen}
        tabIndex={0}
        role="button"
        onKeyDown={handleKeyDown}
      >
        {children}
      </div>
    </>
  );
};

export default Survey;
