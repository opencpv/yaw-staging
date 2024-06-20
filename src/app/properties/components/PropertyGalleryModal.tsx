"use client";

import Modal from "@/components/__shared/ui/modals/Modal";
import Carousel from "@/components/__shared/ui/sliders/Carousel";
import Share from "@/components/__shared/ui/share/Share";
import React from "react";
import { FaTimes } from "react-icons/fa";
import GalleryModal from "@/components/__shared/ui/GalleryModal";

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
    // <GalleryModal
    //   isOpen={isOpen}
    //   onOpenChange={onOpenChange}
    //   onClose={onClose}
    //   images={itemData.images || []}
    //   shareTitle={itemData.title}
    //   shareDescription={itemData.description}
    // />
    <></>
  );
};

export default PropertyGalleryModal;
