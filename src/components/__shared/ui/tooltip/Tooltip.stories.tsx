import { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./tooltip";
import React from "react";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip", // Title for the Storybook sidebar
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    content: {
      control: "text",
    },
    children: {
      control: "object",
    },
    className: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: "Please upload your photo",
    children: <div>Hover me</div>,
  },
  render: (args) => {
    return <Tooltip {...args}></Tooltip>;
  },
};
