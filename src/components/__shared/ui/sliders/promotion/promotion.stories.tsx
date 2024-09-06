// src/components/PromotionModal/PromotionModal.stories.tsx

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Meta, StoryObj } from "@storybook/react";
import { cn } from "@/lib/utils";

// Dynamic import of Modal component
const Modal = dynamic(() =>
  import("@/components/__shared/ui/modals/dialog").then((mod) => mod.Modal),
);

// PromotionModal Component
const PromotionModal = ({
  isOpen,
  onOpenChange,
  image,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  image: Image;
}) => {
  return (
    <Modal
      body={<ModalBody image={image} />}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="full"
    />
  );
};

// ModalBody Component
interface ImageType {
  src: string;
  alt: string;
}
const ModalBody = ({ image }: { image: ImageType }) => {
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

// ToggleButton Component
const ToggleButton = ({
  onClick,
  isOpen,
}: {
  onClick: () => void;
  isOpen: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className="rounded-md bg-blue-500 px-4 py-2 text-white"
    >
      {isOpen ? "Close Modal" : "Open Modal"}
    </button>
  );
};

// Storybook Meta
const meta: Meta<typeof PromotionModal> = {
  title: "Components/sliders/PromotionModal",
  component: PromotionModal,
  tags: ["autodocs"],
};

export default meta;

// Storybook Story
export const Default: StoryObj<typeof PromotionModal> = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => setIsOpen(!isOpen);

    return (
      <div>
        <ToggleButton onClick={handleToggle} isOpen={isOpen} />
        <PromotionModal
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          image={{
            src: "https://via.placeholder.com/800x600",
            alt: "Sample Promotion Image",
          }}
        />
      </div>
    );
  },
};
