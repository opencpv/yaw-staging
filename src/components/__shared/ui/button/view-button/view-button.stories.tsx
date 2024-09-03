import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ViewButton from "@/components/__shared/ui/button/view-button/view-button";

// Metadata for the ViewButton component
const meta: Meta<typeof ViewButton> = {
  title: "Components/Buttons/ViewButton", // Title for Storybook sidebar
  component: ViewButton, // The component to be documented
  tags: ["autodocs"],

  // ArgTypes to control props
  argTypes: {
    onOpen: { action: "opened" }, // Log action when button is clicked
    className: { control: "text" }, // Allows setting custom classes
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story for the ViewButton
export const Default: Story = {
  render: (args) => {
    return (
      <ViewButton {...args} />
    );
  },
  args: {
    onOpen: () => alert("View button clicked"), // Simulate a click action
    className: "", // Default class
  },
};
