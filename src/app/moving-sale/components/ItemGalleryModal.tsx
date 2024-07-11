"use client";

import React from "react";
import GalleryModal from "@/components/__shared/ui/GalleryModal";

let carouselDemo = [
  "/assets/images/home/promotion-1.jpg",
  "/assets/images/leaseform/listing1.jpg",
  "/assets/images/leaseform/lease-form-3.jpeg",
  "/assets/images/leaseform/lease-form-1.png",
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
      body={<ModalBody itemData={itemData} />}
      // footer={<ModalFooter />}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onClose={onClose}
      images={carouselDemo || []}
      shareTitle={itemData?.title}
      shareDescription={itemData?.description}
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

const ModalBody = ({
  onClose,
  itemData,
}: {
  onClose?: () => void;
  itemData: Item;
}) => {
  const { activeIndex } = carouselStore();
  return (
    <div className="mt-20 flex h-full flex-col items-center gap-10">
      <div className="h-fit w-full">
        <Carousel
          isCover={false}
          images={
            itemData?.images
              ? itemData?.images.map((image) => ({
                  src: image,
                  label: "",
                }))
              : []
          }
        />
      </div>
      {/* <div className="flex w-full items-center justify-center text-center text-lg text-white">
        {carouselDemo[activeIndex].label}
      </div> */}
    </div>
  );
};

// const ModalFooter = () => {
//   return (
//   );
// };

export default ItemGalleryModal;
