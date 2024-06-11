"use client";

import Modal from "@/components/__shared/ui/modals/Modal";
import Carousel from "@/components/__shared/ui/sliders/Carousel";
import Share from "@/components/__shared/ui/share/Share";
import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { PiShareFat } from "react-icons/pi";

type Image = {
  src: string;
  label?: string;
};

type ModalProps = {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose?: () => void;
  images: string[];
  shareTitle: string;
  shareDescription: string;
};

const Context = React.createContext<{
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  images: string[];
  shareTitle: string;
  shareDescription: string;
  onClose?: () => void;
} | null>(null);

const GalleryModal = ({
  isOpen,
  onOpenChange,
  onClose,
  images,
  shareTitle,
  shareDescription,
}: ModalProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <Context.Provider
      value={{
        activeIndex,
        setActiveIndex,
        images,
        shareTitle,
        shareDescription,
        onClose,
      }}
    >
      <Modal
        isDismissible={false}
        header={<ModalHeader />}
        body={<ModalBody />}
        // footer={<ModalFooter />}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        hideCloseButton={true}
        size="full"
        backgroundColor="bg-[#111]"
      />
    </Context.Provider>
  );
};

const ModalHeader = () => {
  const onClose = React.useContext(Context)?.onClose;
  const shareTitle = React.useContext(Context)?.shareTitle;
  const shareDescription = React.useContext(Context)?.shareDescription;
  const activeIndex = React.useContext(Context)?.activeIndex || 0;
  const images = React.useContext(Context)?.images || [];

  return (
    <div className="flex items-center justify-between gap-5 pl-10 pt-10 text-white max-xs:pr-10 xs:w-6/12 sm:pl-20">
      <div className="flex w-full gap-5 text-2xl">
        <button>
          <LiaTimesSolid
            className="shrink-0 transition-transform hover:scale-125"
            onClick={() => {
              onClose?.();
            }}
          />
        </button>
        <Share
          title={shareTitle}
          content={shareDescription}
          className="transition-transform hover:scale-125"
        >
          <PiShareFat className="text-white" />
        </Share>
      </div>
      <p>
        {activeIndex + 1}/{images.length}
      </p>
    </div>
  );
};

const ModalBody = () => {
  const setActiveIndex = React.useContext(Context)!.setActiveIndex;
  const images = React.useContext(Context)?.images || [];

  return (
    <div className="flex h-full items-center justify-center">
      <div className="h-fit w-full">
        <Carousel
          images={images?.map((image) => image)}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </div>
  );
};

// const ModalFooter = ({ images }: { images: string[] }) => {
//   // const { activeIndex } = carouselStore();
//   return (
//     // <div className="flex w-full items-center justify-center text-center text-lg text-white">
//     //   {images[activeIndex].label}
//     // </div>
//     <></>
//   );
// };

export default GalleryModal;
