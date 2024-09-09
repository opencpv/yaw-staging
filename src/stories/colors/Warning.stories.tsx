import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Colors/Warning", // Title for the Storybook sidebar
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-warning" />
  ),
};

export const Warning400: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-warning-400" />
  ),
};

export const WarningBG: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-warning-bg" />
  ),
};
