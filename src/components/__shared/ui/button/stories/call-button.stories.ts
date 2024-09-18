import CallButton from "@/components/__shared/ui/button/call-button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CallButton> = {
  title: "Components/Buttons/CallButton",
  component: CallButton,
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
    phone: "+1234567890",
  },
};

export const IconPositionRight: Story = {
  args: {
    phone: "+1234567890",
    iconPosition: "right",
  },
};
