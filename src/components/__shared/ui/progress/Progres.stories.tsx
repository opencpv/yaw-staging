import { Meta, StoryObj } from "@storybook/react";
import { Progress } from ".";
import React from "react";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress", // Title for the Storybook sidebar
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "number",
      description: "The value of the progress maxed at 100",
    },
    message: {
      control: "object",
      description: "The message to display at the bottom of the progress bar",
    },
    className: {
      control: "text",
      type: "string",
    },
    classNames: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const WithMessage: Story = {
  args: {
    ...Default.args,
    message: <div>Message</div>,
  },
  render: (args) => {
    return (
      <div className="h-28">
        <Progress {...args}></Progress>
      </div>
    );
  },
};

export const MessageClassName: Story = {
  args: {
    ...Default.args,
    message: <div>Message</div>,
    classNames: {
      message: "top-8 right-20",
    },
  },
  render: (args) => {
    return (
      <div className="h-28">
        <Progress {...args}></Progress>
      </div>
    );
  },
};
