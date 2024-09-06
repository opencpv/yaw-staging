import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import MessageButton from "@/components/__shared/ui/button/message-button/message-button";

/**
 * Button to be used when a message is to be sent.
 * When the user is not signed in, it alerts the user to signin
 */
const meta: Meta<typeof MessageButton> = {
  title: "Components/Buttons/MessageButton", 
  component: MessageButton, 
  tags: ["autodocs"],

  argTypes: {
    id: { control: "text" }, 
    isIcon: { control: "boolean" },
    className: { control: "text" }, 
    variant: {
      control: "select",
      options: ["outline", "ghost", "default"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

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

export const IconButton: Story = {
  args: {
    isIcon: true,
    variant: "ghost",
  },
};

export const ModalOpen: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = React.useState(true); 

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
