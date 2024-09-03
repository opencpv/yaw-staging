import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import WhatsAppButton from "@/components/__shared/ui/button/whatsapp-button/whatsapp-button";

// Meta configuration for the WhatsAppButton component
const meta: Meta<typeof WhatsAppButton> = {
  title: "Components/Buttons/WhatsAppButton", // Title for Storybook sidebar
  component: WhatsAppButton, // The component to be documented
  tags: ["autodocs"],

  // ArgTypes to control props
  argTypes: {
    phone: {
      control: "text",
      description: "Phone number for WhatsApp message",
    },
    iconPosition: {
      control: "select",
      options: ["left", "right"],
      description: "Position of the WhatsApp icon",
    },
    className: { control: "text", description: "Additional class names" },
    color: {
      control: "select",
      options: ["primary", "accent", "white", "gradient"],
      description: "Color of the button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story for the WhatsAppButton
export const Default: Story = {
  render: (args) => {
    return <WhatsAppButton {...args} />;
  },
  args: {
    phone: "1234567890", // Default phone number
    iconPosition: "left", // Default icon position
    className: "", // Default class
    color: "primary", // Default button color
  },
};
