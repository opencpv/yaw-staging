import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/__shared/ui/button/Button";
import GalleryModal from "./gallery-modal";
import { PiShareFat } from "react-icons/pi";
import { LiaTimesSolid } from "react-icons/lia";
import Carousel from "../sliders/carousel";

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
    const [isOpen, setIsOpen] = useState(true);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Open Gallery Modal</Button>
        <GalleryModal
          {...args}
          isOpen={isOpen}
          onOpenChange={(open) => setIsOpen(open)}
          onClose={() => setIsOpen(false)}
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

// Story for ModalHeader
export const ModalHeaderStory: Story = {
  render: () => {
    return (
      <div className="bg-[#010E19] p-4 text-white">
        <div className="flex w-full items-center justify-between gap-5">
          <p className="w-full">1/3</p>
          <div className="flex gap-5 text-2xl">
            <button className="circle-hover hover:text-shade-300">
              <PiShareFat className="text-white" title="Share" />
            </button>
            <button className="circle-hover hover:text-shade-300">
              <LiaTimesSolid className="shrink-0" />
            </button>
          </div>
        </div>
      </div>
    );
  },
};

// Story for ModalBody
export const ModalBodyStory: Story = {
  render: () => {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="h-fit w-full">
          <Carousel
            images={[
              "https://picsum.photos/800/800?random=4",
              "https://picsum.photos/800/800?random=2",
              "https://picsum.photos/800/800?random=10",
            ]}
            setActiveIndex={() => {}}
          />
        </div>
      </div>
    );
  },
};

// Story for ModalFooter (if implemented)
export const ModalFooterStory: Story = {
  render: () => {
    return (
      <div className="flex w-full items-center justify-center text-center text-lg text-white">
        Image label
      </div>
    );
  },
};
