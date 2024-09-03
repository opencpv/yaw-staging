"use client";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import React from "react";
import FeedbackHeader from "./FeedbackHeader";
import FeedbackBody from "./FeedbackBody";
import CloseModalIcon from "../icons/CloseModalIcon";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";

const Modal = dynamic(() =>
  import("@/components/__shared/ui/modals/dialog").then((mod) => mod.Modal),
);

type Props = {
  className?: string;
  children: React.ReactNode;
  data: any;
};

const Feedback = ({ children, data }: Props) => {
  const { onOpen, isOpen, onOpenChange, onClose } = useDisclosure();

  const handleCloseAfterSubmission = () => {
    onClose();
    toast.success(
      "Thank you! Your feedback is invaluable and will contribute to improving our services.",
    );
  };

  return (
    <>
      <Modal
        closeButton={<CloseModalIcon />}
        isDismissible={false}
        header={<FeedbackHeader handleClose={onClose} />}
        body={
          <FeedbackBody
            data={data}
            handleCloseAfterSubmission={handleCloseAfterSubmission}
          />
        }
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="lg"
      />
      <div className="cursor-pointer focus:outline-none" onClick={onOpen}>
        {children}
      </div>
    </>
  );
};

export default Feedback;
