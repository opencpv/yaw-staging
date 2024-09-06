import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button/Button";
import SaveSearchModal from "./SaveSearchModal";
import { HiSaveAs } from "react-icons/hi";
import { PiShareFat } from "react-icons/pi";
import { LiaTimesSolid } from "react-icons/lia";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { ActionPopover, ActionItem, ActionItemTrigger, ActionContent } from "@/components/__shared/ui/popover/action-popover";
import { PopupModal } from "../alert-dialog";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";

const meta: Meta<typeof SaveSearchModal> = {
  title: "Components/Modals/SaveSearchModal",
  component: SaveSearchModal,
  tags: ['autodocs'],

  argTypes: {
    className: {
      description: "Optional CSS class to style the SaveSearchModal.",
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof SaveSearchModal>;

// Default story
export const Default: Story = {
  render: (args) => {
    const { onOpen, isOpen, onOpenChange } = useDisclosure();

    return (
      <div>
        <HiSaveAs
          className="cursor-pointer text-[#21A19F]"
          title="saved search"
          size={20}
          onClick={() => onOpenChange(true)}
        />
        <SaveSearchModal
          {...args}
          isOpen={isOpen}
          onOpenChange={(open : any) => onOpenChange(open)}
          onClose={() => onOpenChange(false)}
        />
      </div>
    );
  },
  args: {
    className: "",
  },
};

