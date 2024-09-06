import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import FavoriteModal from "./FavoriteModal";
import { Button } from "../button/Button";
import { useSessionStorage } from "@uidotdev/usehooks";
import { MdOutlineChat } from "react-icons/md";
import toast from "react-hot-toast";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";



const meta: Meta<typeof FavoriteModal> = {
  title: "Components/Listing/FavoriteModal",
  tags: ['autodocs'],

  component: FavoriteModal,
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
  },
};

export default meta;

type Story = StoryObj<typeof FavoriteModal>;

// Default story
export const Default: Story = {
  render: (args) => {
    const { onOpen, isOpen, onOpenChange } = useDisclosure();

    return (
      <div>
        <Button onClick={() => onOpenChange(true)}>Open Favorite Modal</Button>
        <FavoriteModal
          {...args}
          isOpen={isOpen}
          onOpenChange={(open) => onOpenChange(open)}
          onClose={() => onOpenChange(false)}
        />
      </div>
    );
  },
  args: {
    isOpen: true,
  },
};


