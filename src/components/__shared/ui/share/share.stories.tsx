import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Share from ".";

const meta: Meta<typeof Share> = {
  title: "Components/Share",
  component: Share,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      type: "string",
    },
    url: {
      type: "string",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Share>;

export const Default: Story = {
  args: {
    title: "Sample Title",
  },
};

export const WithCustomLabel: Story = {
  args: {
    ...Default.args,
    label: "Custom Share",
    url: "https://example.com",
    classNames: {
      icon: "text-green-500",
    },
  },
};

export const HiddenLabel: Story = {
  render: (args) => <Share {...args} />,
  args: {
    ...Default.args,
    hideLabel: true,
  },
};

export const CustomStyling: Story = {
  render: (args) => <Share {...args} />,
  args: {
    title: "Styled Title",
    url: "https://example.com",
    label: "Share",
    classNames: {
      base: "p-4 bg-gray-200 border border-gray-300 rounded",
      icon: "text-purple-500",
    },
  },
};
