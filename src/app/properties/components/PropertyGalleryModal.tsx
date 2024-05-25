"use client";

import Modal from "@/components/__shared/ui/modals/Modal";
import Carousel from "@/components/__shared/ui/sliders/Carousel";
import Share from "@/components/__shared/ui/share/Share";
import { carouselStore } from "@/store/properties/usePropertiesStore";
import React from "react";
import { FaTimes } from "react-icons/fa";

let carouselDemo = [
  {
    src: "/assets/images/niceHome.png",
    label: "Kitchen",
  },
  {
    src: "/assets/images/niceHome.png",
    label: "Bathroom",
  },
  {
    src: "/assets/images/niceHome.png",
    label: "Hall",
  },
];

type ModalProps = {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose?: () => void;
};

const PropertyGalleryModal = ({
  isOpen,
  onOpenChange,
  onClose,
}: ModalProps) => {
  return (
    <Modal
      isDismissible={false}
      header={<ModalHeader onClose={onClose} />}
      body={<ModalBody />}
      footer={<ModalFooter />}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      hideCloseButton={true}
      size="full"
      backgroundColor="bg-[#333333]"
    />
  );
};

const ModalHeader = ({ onClose }: { onClose?: () => void }) => {
  return (
    <div className="flex justify-between gap-5 text-5xl text-neutral-100">
      <FaTimes
        className="shrink-0 cursor-pointer rounded-full bg-neutral-900 p-1.5"
        onClick={() => {
          onClose && onClose();
        }}
      />
      <Share />
    </div>
  );
};

const ModalBody = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="h-fit w-full">
        <Carousel
          images={carouselDemo.map((image) => ({
            src: image.src,
            label: image.label,
          }))}
        />
      </div>
    </div>
  );
};

const ModalFooter = () => {
  const { activeIndex } = carouselStore();
  return (
    <div className="flex w-full items-center justify-center text-center text-lg text-white">
      {carouselDemo[activeIndex].label}
    </div>
  );
};

export default PropertyGalleryModal;
