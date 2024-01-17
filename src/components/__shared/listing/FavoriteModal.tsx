"use client";
import React, { useState } from "react";
import Modal from "../modals/Modal";
import { MdOutlineChat } from "react-icons/md";
import Checkbox from "../form/Checkbox";
import Button from "../ui/button/Button";
import { useListingStore } from "@/store/listing/useListingStore";

type ModalProps = {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose?: () => void;
};

type ModalHeaderProps = {
  onClose?: () => void;
};

const FavoriteModal = ({ isOpen, onOpenChange, onClose }: ModalProps) => {
  return (
    <Modal
      isDismissible={false}
      header={<ModalHeader onClose={onClose} />}
      body={<ModalBody />}
      footer={<ModalFooter />}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      hideCloseButton={true}
      size="md"
    />
  );
};

const ModalHeader = ({ onClose }: ModalHeaderProps) => {
  return (
    <span className="flex flex-wrap items-center justify-between gap-5">
      <MdOutlineChat className="shrink-0 text-xl text-primary-200 md:text-4xl" />
      <Button
        color="black"
        variant="outline"
        className="h-6 w-fit rounded-3xl px-4 text-sm hover:bg-[#E7F8F2]"
        onClick={onClose}
      >
        Save
      </Button>
    </span>
  );
};

const ModalBody = () => {
  return (
    <p className="font-[600] text-primary-200">
      Do you want property owners to contact you when you favorite a home?
    </p>
  );
};

const ModalFooter = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const { contactUponFavorite, setContactUponFavorite } = useListingStore();

  const handleYes = () => {
    setContactUponFavorite(true);
  };

  const handleNo = () => {
    setContactUponFavorite(false);
  };

  return (
    <div className="flex w-full flex-col justify-between gap-5 xs:flex-row xs:items-center">
      <div className="order-2 flex xs:order-1">
        <Checkbox
          label="Don't show this again"
          value="favorite-show-again"
          isSelected={isSelected}
          onValueChange={() => setIsSelected((prev) => !prev)}
        />
      </div>
      <div className="order-1 flex items-center gap-2 xs:order-2">
        <Button
          variant={contactUponFavorite === false ? "default" : "outline"}
          color="gradient"
          className="py-6"
          onClick={handleNo}
        >
          No
        </Button>
        <Button
          variant={contactUponFavorite ? "default" : "outline"}
          color="gradient"
          className="py-6"
          onClick={handleYes}
        >
          Yes
        </Button>
      </div>
    </div>
  );
};

export default FavoriteModal;
