import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/__shared/ui/button";
import GalleryModal from "./gallery-modal";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";

const meta: Meta = {
  title: "Components/Modals/GalleryModal",
  component: GalleryModal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isOpen: {
      description: "Whether the modal is open or closed.",
    },
    onOpenChange: {
      description: "Callback when modal open state changes.",
    },
    onClose: {
      description: "Callback for modal close.",
    },
    images: {
      description: "Array of image URLs for the gallery.",
    },
    shareTitle: {
      description: "Title for the share functionality.",
    },
    shareDescription: {
      description: "Description for the share functionality.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof GalleryModal>;

// Default story
export const Default: Story = {
  render: (args) => {
    const { isOpen, onOpenChange } = useDisclosure();

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
