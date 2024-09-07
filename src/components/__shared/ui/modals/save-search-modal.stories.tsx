import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import SaveSearchModal from "./SaveSearchModal";
import { HiSaveAs } from "react-icons/hi";

import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";

const meta: Meta<typeof SaveSearchModal> = {
  title: "Components/Modals/SaveSearchModal",
  component: SaveSearchModal,
  tags: ["autodocs"],

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
    const { onOpenChange } = useDisclosure();

    return (
      <div>
        <HiSaveAs
          className="cursor-pointer text-[#21A19F]"
          title="saved search"
          size={20}
          onClick={() => onOpenChange(true)}
        />
        <SaveSearchModal {...args} />
      </div>
    );
  },
  args: {
    className: "",
  },
};
