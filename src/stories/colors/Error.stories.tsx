import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Colors/Error", // Title for the Storybook sidebar
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-error" />
  ),
};

export const Error50: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-error-50" />
  ),
};

export const Error100: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-error-100" />
  ),
};

export const ErrorBG: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-error-bg" />
  ),
};
