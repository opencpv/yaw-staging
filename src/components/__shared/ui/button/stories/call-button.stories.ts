import ButtonCall from "@/components/__shared/ui/button/call-button";
import type { Meta, StoryObj } from "@storybook/react";
import { MdOutlinePhone } from "react-icons/md";

const meta: Meta<typeof ButtonCall> = {
  title: "Components/Buttons/CallButton", 
  component: ButtonCall,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["primary", "accent", "white", "gradient"],
      },
    },
    iconPosition: {
      control: {
        type: "select",
        options: ["left", "right"],
      },
    },
    phoneNumber: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    phoneNumber: "+1234567890",
    iconPosition: "left",
  },
};

export const IconPositionRight: Story = {
  args: {
    phoneNumber: "+1234567890",
    iconPosition: "right",
  },
};

export const CustomColor: Story = {
  args: {
    phoneNumber: "+0987654321",
    color: "primary",
    iconPosition: "left",
  },
};

