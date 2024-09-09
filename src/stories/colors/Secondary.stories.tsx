import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Colors/Secondary", // Title for the Storybook sidebar
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: (args) => (
    <div className="bg-secondary aspect-square w-20 rounded-full" />
  ),
};

export const Secondary50: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-secondary-50" />
  ),
};

export const Secondary300: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-secondary-300" />
  ),
};

export const Secondary400: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-secondary-400" />
  ),
};
