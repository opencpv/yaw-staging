"use client";
import React, { useState } from "react";
import Modal from "../modals/Modal";
import { MdOutlineChat } from "react-icons/md";
import Checkbox from "../form/Checkbox";
import Button from "../Button";

type ModalProps = {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
};

type ModalFooterProps = {
  onClose: () => void;
}

const FavoriteModal = ({ isOpen, onOpenChange, onClose }: ModalProps) => {
  return (
    <Modal
      isDismissible={false}
      header={<ModalHeader />}
      body={<ModalBody />}
      footer={<ModalFooter onClose={onClose} />}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="md"
    />
  );
};

const ModalHeader = () => {
  return (
    <span className="border p-0.5 w-fit">
      <MdOutlineChat className="text-primary-200 text-xl shrink-0 md:text-4xl" />
    </span>
  );
};

const ModalBody = () => {
  return (
    <p className="font-[600] text-primary-200">
      Do you want property owners to contact you when you favorite?
    </p>
  );
};

const ModalFooter = ({onClose}: ModalFooterProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  return (
    <div className="flex flex-col justify-between gap-5 w-full xs:flex-row xs:items-center">
      <div className="flex order-2 xs:order-1">
        <Checkbox
          label="Don't show this again"
          name="favorite-show-again"
          isSelected={isSelected}
          onValueChange={() => setIsSelected((prev) => !prev)}
        />
      </div>
      <div className="flex items-center gap-2 order-1 xs:order-2">
        <Button variant="outline" color="gradient" className="py-6" onClick={onClose}>
          No
        </Button>
        <Button color="gradient" className="py-6">
          Yes
        </Button>
      </div>
    </div>
  );
};

export default FavoriteModal;
