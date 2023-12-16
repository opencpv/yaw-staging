import Button from "@/components/__shared/ui/button/Button";
import Modal from "@/components/__shared/modals/Modal";
import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

type ModalProps = {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
  label?: string;
  handleDestruction?: () => void;
};

type ModalFooterProps = {
  onClose: () => void;
  handleDestruction?: () => void;
};

type ModalBodyProps = {
  label?: string;
};

const DestructiveModal = ({
  isOpen,
  onOpenChange,
  onClose,
  label,
}: ModalProps) => {
  return (
    <Modal
      header={<ModalHeader />}
      body={<ModalBody label={label} />}
      footer={<ModalFooter onClose={onClose} />}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="md"
    />
  );
};

const ModalHeader = () => {
  return (
    <div className="bg-[#FEF3F2] rounded-full w-16 h-16 flex items-center justify-center">
      <div className="flex items-center justify-center rounded-full w-11 h-11 bg-neutral-200">
        <HiOutlineExclamationCircle className="text-neutral-800 text-xl rotate-180" />
      </div>
    </div>
  );
};

const ModalBody = ({ label }: ModalBodyProps) => {
  return (
    <>
      <h2 className="text-neutral-900 font-[700]">Notice</h2>
      <p className="text-sm text-neutral-500">
        {label ? label : "Are you sure you want to delete this item?"}
      </p>
    </>
  );
};

const ModalFooter = ({ onClose, handleDestruction }: ModalFooterProps) => {
  return (
    <div className="w-full flex gap-2 justify-end">
      <Button
        className="bg-red-500 text-white font-[500] py-1 max-w-[8rem] w-32 rounded-lg"
        onClick={handleDestruction}
      >
        Yes
      </Button>
      <Button
        className="bg-neutral-200 text-neutral-500 font-[500] py-1 max-w-[8rem] w-32 rounded-lg"
        onClick={onClose}
      >
        No
      </Button>
    </div>
  );
};

export default DestructiveModal;
