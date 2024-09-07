import ButtonCall from "@/components/__shared/ui/button/call-button";
import type { Meta, StoryObj } from "@storybook/react";

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
      },
    },
    iconPosition: {
      control: {
        type: "select",
      },
    },
    className: {
      control: "text",
      type: "string",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    phoneNumber: "+1234567890",
  },
};

export const IconPositionRight: Story = {
  args: {
    phoneNumber: "+1234567890",
    iconPosition: "right",
  },
};
