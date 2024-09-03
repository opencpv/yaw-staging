import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import EditButton from "@/components/__shared/ui/button/edit-button/edit-button";

// Metadata for the EditButton component
const meta: Meta<typeof EditButton> = {
  title: "Components/Buttons/EditButton", // Title for the Storybook sidebar
  component: EditButton, // The component to be documented
  tags: ["autodocs"],

  // ArgTypes to control the props
  argTypes: {
    onClick: { action: "clicked" }, // This will log an action to Storybook when clicked
    variant: {
      control: { type: "select" }, // Adds a dropdown in the controls panel
      options: ["default", "ghost"], // The options for the variant prop
    },
    className: { control: "text" }, // Allows setting custom classes
  },
};

export default meta;


type Story = StoryObj<typeof meta>;

// Default Story for the EditButton
export const Default: Story = {
  args: {
    variant: "default", // Default variant
    className: "", // No additional classes
    onClick: () => console.log("Edit button clicked"), // Logs to console when clicked
  },
};

// Ghost variant story
export const Ghost: Story = {
  args: {
    variant: "ghost", // Ghost variant
    className: "p-2", // Example of additional styling
    onClick: () => console.log("Ghost edit button clicked"), // Logs to console when clicked
  },
};
