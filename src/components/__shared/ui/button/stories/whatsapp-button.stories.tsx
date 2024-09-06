import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import WhatsAppButton from "@/components/__shared/ui/button/whatsapp-button";

const meta: Meta<typeof WhatsAppButton> = {
  title: "Components/Buttons/WhatsAppButton",
  component: WhatsAppButton,
  tags: ["autodocs"],

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

export const Default: Story = {
  render: (args) => {
    return <WhatsAppButton {...args} />;
  },
  args: {
    phone: "1234567890",
    iconPosition: "left",
    className: "",
    color: "primary",
  },
};
