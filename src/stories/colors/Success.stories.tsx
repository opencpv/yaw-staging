import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Colors/Success", // Title for the Storybook sidebar
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-success" />
  ),
};

export const Success100: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-success-100" />
  ),
};

export const SuccessBG: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-success-bg" />
  ),
};
