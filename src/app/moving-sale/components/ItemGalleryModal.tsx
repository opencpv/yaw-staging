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
  itemData: Item;
};

const ItemGalleryModal = ({
  isOpen,
  onOpenChange,
  onClose,
  itemData,
}: ModalProps) => {
  return (
    <Modal
      isDismissible={false}
      header={<ModalHeader onClose={onClose} itemData={itemData} />}
      body={<ModalBody />}
      // footer={<ModalFooter />}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      hideCloseButton={true}
      size="full"
      backgroundColor="bg-[#333333]"
    />
  );
};

const ModalHeader = ({
  onClose,
  itemData,
}: {
  onClose?: () => void;
  itemData: Item;
}) => {
  return (
    <div className="flex w-full justify-between gap-5 px-10 pt-10 text-5xl text-neutral-100 sm:px-20">
      <FaTimes
        className="shrink-0 cursor-pointer rounded-full bg-neutral-900 p-1.5"
        onClick={() => {
          onClose && onClose();
        }}
      />
      <Share
        title={itemData.title}
        content={itemData.description}
        classNames={{ icon: "text-white" }}
        hideLabel
      />
    </div>
  );
};

const ModalBody = () => {
  const { activeIndex } = carouselStore();
  return (
    <div className="mt-20 flex h-full flex-col items-center gap-10">
      <div className="h-fit w-full">
        <Carousel
          images={carouselDemo.map((image) => ({
            src: image.src,
            label: image.label,
          }))}
        />
      </div>
      <div className="flex w-full items-center justify-center text-center text-lg text-white">
        {carouselDemo[activeIndex].label}
      </div>
    </div>
  );
};

// const ModalFooter = () => {
//   return (
//   );
// };

export default ItemGalleryModal;
