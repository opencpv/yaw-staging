import Button from "@/components/__shared/ui/button/Button";
import Modal from "@/components/__shared/ui/modals/Modal";
import React from "react";

type ModalProps = {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
  label?: string;
  classNames?: {
    backdrop?: string;
  };
  handleAction: () => void;
  loading?: boolean;
};

type ModalFooterProps = {
  onClose: () => void;
  handleAction: () => void;
  loading: boolean;
};

type ModalBodyProps = {
  label?: string;
};

const PopupModal = ({
  isOpen,
  onOpenChange,
  onClose,
  label,
  handleAction,
  loading,
  classNames,
}: ModalProps) => {
  return (
    <Modal
      body={<ModalBody label={label} />}
      footer={
        <ModalFooter
          onClose={onClose}
          handleAction={handleAction}
          loading={loading || false}
        />
      }
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="md"
      classNames={{
        backdrop: classNames?.backdrop,
      }}
      className="pb-5 pt-10"
    />
  );
};

const ModalBody = ({ label }: ModalBodyProps) => {
  return (
    <>
      <h2 className="font-[700] text-neutral-900">Notice</h2>
      <p className="text-base text-neutral-500">
        {label ? label : "Are you sure you want to delete this item?"}
      </p>
    </>
  );
};

const ModalFooter = ({ onClose, handleAction, loading }: ModalFooterProps) => {
  return (
    <div className="flex w-full justify-end gap-2">
      <Button
        className="w-32 max-w-[8rem] rounded-lg bg-red-500 py-1 font-[500] text-white"
        onClick={handleAction}
        isLoading={loading}
      >
        Yes
      </Button>
      <Button
        className="w-32 max-w-[8rem] rounded-lg bg-neutral-200 py-1 font-[500] text-neutral-500"
        onClick={onClose}
      >
        No
      </Button>
    </div>
  );
};

export default PopupModal;
