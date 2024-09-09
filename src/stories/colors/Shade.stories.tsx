import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Colors/Shade", // Title for the Storybook sidebar
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-shade" />
  ),
};

export const Shade50: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-shade-50" />
  ),
};

/**
 * Preferred for lighter shade of text for contrast
 */
export const Shade200: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-shade-200" />
  ),
};

/**
 * Preferred for light shade of text for contrast
 */
export const Shade300: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-shade-300" />
  ),
};

/**
 * Use this instead of bg-black or text-black
 */
export const Shade500: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-shade-500" />
  ),
};

export const Shade900: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-shade-900" />
  ),
};
