import DeleteButton from "@/components/__shared/ui/button/delete-button/delete-button";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

// Define metadata for the DeleteButton component
const meta: Meta<typeof DeleteButton> = {
  title: "Components/Buttons/DeleteButton", // Title for the Storybook sidebar
  component: DeleteButton,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: { control: "text" },
    classNames: {
      control: "object",
      defaultValue: { icon: "" },
    },
    handleDestruction: { action: "handleDestruction" },
    loading: { control: "boolean" },
    label: { control: "text" },
    variant: {
      control: {
        type: "select",
        options: ["default", "ghost"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default delete button
export const Default: Story = {
  args: {
    label: "Delete Item",
    loading: false,
    variant: "default",
  },
};

// Loading state
export const Loading: Story = {
  args: {
    label: "Deleting...",
    loading: true,
    variant: "default",
  },
};

// Ghost variant
export const Ghost: Story = {
  args: {
    label: "Delete Item",
    loading: false,
    variant: "ghost",
  },
};

// Custom class names
export const CustomClassNames: Story = {
  args: {
    label: "Custom Icon",
    loading: false,
    variant: "default",
    classNames: { icon: "text-red-500" },
  },
};
