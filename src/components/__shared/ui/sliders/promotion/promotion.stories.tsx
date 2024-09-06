
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Meta, StoryObj } from "@storybook/react";
import { cn } from "@/lib/utils";
import PromotionModal from "./PromotionModal";


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
      className="rounded-md bg-primary px-4 py-2 text-white"
    >
      {isOpen ? "Close Modal" : "Open Modal"}
    </button>
  );
};

const meta: Meta<typeof PromotionModal> = {
  title: "Components/sliders/PromotionModal",
  component: PromotionModal,
  tags: ["autodocs"],
};

export default meta;

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
            src: "https://picsum.photos/800/800?random=6",
            alt: "Sample Promotion Image",
          }}
        />
      </div>
    );
  },
};
