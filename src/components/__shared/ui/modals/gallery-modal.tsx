"use client";

import Modal from "@/components/__shared/ui/modals/Modal";
import Carousel from "@/components/__shared/ui/sliders/carousel";
import Share from "@/components/__shared/ui/share";
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
        backgroundColor="bg-[#010E19]"
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
    <div className="ml-auto flex w-full items-center justify-between gap-5 pr-5 pt-5 text-white max-xs:pl-5 xs:w-6/12 sm:pr-20">
      <p className="w-full">
        {activeIndex + 1}/{images.length}
      </p>
      <div className="flex gap-5 text-2xl">
        <Share
          title={shareTitle}
          content={shareDescription}
          classNames={{
            base: "group circle-hover",
          }}
        >
          <PiShareFat
            title="Share"
            className="text-white group-hover:text-shade-300"
          />
        </Share>
        <button
          className="circle-hover hover:text-shade-300"
          onClick={() => {
            onClose?.();
          }}
        >
          <LiaTimesSolid className="shrink-0" />
        </button>
      </div>
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
