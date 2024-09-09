"use client";

import React from "react";
import dynamic from "next/dynamic";
const GalleryModal = dynamic(
  () => import("@/components/__shared/ui/modals/gallery-modal"),
);

let carouselDemo = [
  "/assets/images/home/promotion-1.jpg",
  "/assets/images/leaseform/listing1.jpg",
  "/assets/images/leaseform/lease-form-3.jpeg",
  "/assets/images/leaseform/lease-form-1.png",
];

type ModalProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
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
    <GalleryModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onClose={onClose}
      images={carouselDemo || []}
      shareTitle={itemData?.title}
      shareDescription={itemData?.description}
    />
  );
};

export default ItemGalleryModal;
