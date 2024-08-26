import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

const Modal = dynamic(() =>
  import("@/components/__shared/ui/modals/dialog").then((mod) => mod.Modal),
);

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
  image: Image;
};

type Image = {
  src: string;
  alt: string;
};

const PromotionModal = ({ isOpen, onOpenChange, image }: Props) => {
  return (
    <Modal
      body={<ModalBody image={image} />}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="full"
    />
  );
};

export default PromotionModal;

const ModalBody = ({ image }: { image: Image }) => {
  return (
    <div className="grid h-full place-items-center">
      <div className="relative aspect-video w-[45rem] rounded-lg">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-[inherit]"
        />
      </div>
    </div>
  );
};
