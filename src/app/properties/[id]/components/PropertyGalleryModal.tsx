"use client";

import Modal from "@/components/__shared/modals/Modal";
import Carousel from "@/components/__shared/sliders/Carousel";
import Share from "@/components/__shared/ui/share/Share";
import { useModalFullscreenStore } from "@/store/modal/useModalStore";
import { usePropertyCarouselStore } from "@/store/properties/usePropertiesStore";
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
  const setHideWindowScrollbar = useModalFullscreenStore(
    (state) => state.setHideWindowScrollbar
  );

  return (
    <div className="flex justify-between gap-5 text-5xl text-neutral-100">
      <FaTimes
        className="bg-neutral-900 rounded-full cursor-pointer p-1.5 shrink-0"
        onClick={() => {
          onClose && onClose();
          setHideWindowScrollbar(false);
        }}
      />
      <Share url="" />
    </div>
  );
};

const ModalBody = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-full h-fit">
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
  const { activeIndex } = usePropertyCarouselStore();
  return (
    <div className="flex items-center justify-center w-full text-lg text-center text-white">
      {carouselDemo[activeIndex].label}
    </div>
  );
};

export default PropertyGalleryModal;
