import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Colors/Accent", // Title for the Storybook sidebar
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-accent" />
  ),
};

export const Accent50: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-accent-50" />
  ),
};

export const Accent100: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-accent-100" />
  ),
};

export const Accent200: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-accent-200" />
  ),
};
