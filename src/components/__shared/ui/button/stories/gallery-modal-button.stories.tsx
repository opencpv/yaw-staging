import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import GalleryModalBtn from "@/components/__shared/ui/button/gallery-modal-button";
import ItemGalleryModal from "@/app/moving-sale/components/ItemGalleryModal";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";

const meta: Meta<typeof GalleryModalBtn> = {
  title: "Components/Buttons/GalleryModalButton",
  component: GalleryModalBtn,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: {
      action: "clicked",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: action("button-clicked"),
  },
  render: (args) => {
    const { isOpen, onOpenChange, onClose } = useDisclosure();

    return (
      <div className="mx-auto pt-10">
        <GalleryModalBtn {...args} onClick={() => onOpenChange(true)} />
        <ItemGalleryModal
          onOpenChange={onOpenChange}
          onClose={onClose}
          isOpen={isOpen}
          itemData={{} as any}
        />
      </div>
    );
  },
};
