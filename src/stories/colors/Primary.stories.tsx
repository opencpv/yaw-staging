import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Colors/Primary", // Title for the Storybook sidebar
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-primary" />
  ),
};

export const Primary50: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-primary-50" />
  ),
};

export const Primary100: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-primary-100" />
  ),
};

export const Primary200: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-primary-200" />
  ),
};

export const Primary300: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-primary-300" />
  ),
};
export const Primary400: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-primary-400" />
  ),
};
export const Primary500: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-primary-500" />
  ),
};
export const Primary600: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-primary-600" />
  ),
};
export const Primary800: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-primary-800" />
  ),
};
export const Primary900: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-primary-900" />
  ),
};
