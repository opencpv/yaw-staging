import { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from ".";
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
    side: {
      control: "text",
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
    return (
      <div className="grid h-28 place-items-center">
        <Tooltip {...args}></Tooltip>
      </div>
    );
  },
};
