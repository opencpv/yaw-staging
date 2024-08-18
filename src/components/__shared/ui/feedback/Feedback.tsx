"use client";
// import { useDisclosure } from "@nextui-org/react";
import React, { KeyboardEvent } from "react";
// import Modal from "../modals/Modal";
import FeedbackHeader from "./FeedbackHeader";
import FeedbackBody from "./FeedbackBody";
import CloseModalIcon from "../icons/CloseModalIcon";
import toast from "react-hot-toast";

type Props = {
  className?: string;
  children: React.ReactNode;
  data: any;
};

const Feedback = ({ children, data }: Props) => {
  // const { onOpen, isOpen, onOpenChange, onClose } = useDisclosure();

  // const handleCloseAfterSubmission = () => {
  //   onClose();
  //   toast.success(
  //     "Thank you! Your feedback is invaluable and will contribute to improving our services.",
  //   );
  // };

  // const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
  //   if (e.key === "Enter") {
  //     onOpen();
  //   }
  // };

  return (
    <>
      {/* <Modal
        closeButton={<CloseModalIcon onClick={onClose} />}
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
      /> */}
      {/* <div
        className="cursor-pointer focus:outline-none"
        onClick={onOpen}
        onKeyDown={handleKeyDown}
      >
        {children}
      </div> */}
    </>
  );
};

export default Feedback;
