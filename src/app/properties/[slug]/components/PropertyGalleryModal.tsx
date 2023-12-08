import Modal from "@/components/__shared/modals/Modal";
import Carousel from "@/components/__shared/sliders/Carousel";
import ShareBtn from "@/components/__shared/ui/share/ShareBtn";
import { usePropertyCarouselStore } from "@/store/properties/usePropertiesStore";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";

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
      backdrop="blur"
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
        className="bg-neutral-900 rounded-full cursor-pointer p-1.5 shrink-0"
        onClick={onClose}
      />
      <ShareBtn shareData={{url: ""}} />
    </div>
  );
};

const ModalBody = () => {
  return (
    <div className="h-fit">
      <Carousel
        images={carouselDemo.map((image) => ({
          src: image.src,
          label: image.label,
        }))}
      />
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
