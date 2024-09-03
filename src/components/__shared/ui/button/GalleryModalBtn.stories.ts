import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import GalleryModalBtn from "@/components/__shared/ui/button/GalleryModalBtn";

// Define metadata for the GalleryModalBtn component
const meta: Meta<typeof GalleryModalBtn> = {
  title: "Components/Buttons/GalleryModalButton", // Title for the Storybook sidebar
  component: GalleryModalBtn,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: {
      action: "clicked", // This allows you to see the action in Storybook's Actions panel
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    onClick: action("button-clicked"),
  },
};
