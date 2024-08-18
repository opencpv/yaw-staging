// import Modal from "@/components/__shared/ui/modals/Modal";
// import { useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

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
    // <Modal
    //   body={<ModalBody image={image} />}
    //   isOpen={isOpen}
    //   onOpenChange={onOpenChange}
    //   size="full"
    // />
    <></>
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
