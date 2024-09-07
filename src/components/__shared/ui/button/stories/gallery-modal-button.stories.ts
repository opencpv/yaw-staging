import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import GalleryModalBtn from "@/components/__shared/ui/button/gallery-modal-button";

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
};
