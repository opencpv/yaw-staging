import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import MessageButton from "@/components/__shared/ui/button/message-button";

// Metadata for the MessageButton component
const meta: Meta<typeof MessageButton> = {
  title: "Components/Buttons/MessageButton", // Title for Storybook sidebar
  component: MessageButton, // The component to be documented
  tags: ["autodocs"],

  // ArgTypes to control props
  argTypes: {
    id: { control: "text" }, // Allows setting the ID of the recipient
    isIcon: { control: "boolean" }, // Toggle between icon and regular button
    className: { control: "text" }, // Allows setting custom classes
    variant: {
      control: "select",
      options: ["outline", "ghost", "default"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story for the MessageButton
export const Default: Story = {
  render: (args) => {
    return (
      <MessageButton {...args} />
    );
  },
  args: {
    isIcon: false,
    id: "user123",
    children: "Send Message",
    variant: "outline",
  },
};

// Icon Button story for MessageButton
export const IconButton: Story = {
  args: {
    isIcon: true,
    variant: "ghost",
  },
};

// Modal open story for MessageButton
export const ModalOpen: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = React.useState(true); // Control state for modal

    return (
      <MessageButton {...args} />
    );
  },
  args: {
    isIcon: false,
    id: "user123",
    children: "Send Message",
    variant: "outline",
  },
};
