import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/__shared/ui/button/Button";
import GalleryModal from "./gallery-modal";
import { PiShareFat } from "react-icons/pi";
import { LiaTimesSolid } from "react-icons/lia";
import Carousel from "../sliders/carousel";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";

const meta: Meta = {
  title: "Components/Modals/GalleryModal",
  component: GalleryModal,
  tags: ["autodocs"],

  argTypes: {
    isOpen: {
      description: "Whether the modal is open or closed.",
      control: "boolean",
    },
    onOpenChange: {
      description: "Callback when modal open state changes.",
      action: "onOpenChange",
    },
    onClose: {
      description: "Callback for modal close.",
      action: "onClose",
    },
    images: {
      description: "Array of image URLs for the gallery.",
      control: "text",
    },
    shareTitle: {
      description: "Title for the share functionality.",
      control: "text",
    },
    shareDescription: {
      description: "Description for the share functionality.",
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof GalleryModal>;

// Default story
export const Default: Story = {
  render: (args) => {
    const { onOpen, isOpen, onOpenChange } = useDisclosure();

    return (
      <div>
        <Button onClick={() => onOpenChange(true)}>Open Gallery Modal</Button>
        <GalleryModal
          {...args}
          isOpen={isOpen}
          onOpenChange={(open) => onOpenChange(open)}
          onClose={() => onOpenChange(false)}
        />
      </div>
    );
  },
  args: {
    images: [
      "https://picsum.photos/800/800?random=4",
      "https://picsum.photos/800/800?random=1",
      "https://picsum.photos/800/800?random=5",
    ],
    shareTitle: "Gallery Share Title",
    shareDescription: "Gallery Share Description",
  },
};



// Story for ModalBody

