"use client";

import React from "react";
import GalleryModal from "@/components/__shared/ui/GalleryModal";

let carouselDemo = [
  "/assets/images/niceHome.png",
  "/assets/images/niceHome.png",
  "/assets/images/niceHome.png",
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
    <GalleryModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onClose={onClose}
      images={carouselDemo || []}
      shareTitle={itemData.title}
      shareDescription={itemData.description}
    />
  );
};

export default ItemGalleryModal;
