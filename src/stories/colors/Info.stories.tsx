import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Colors/Info", // Title for the Storybook sidebar
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: (args) => <div className="aspect-square w-20 rounded-full bg-info" />,
};

export const Info100: Story = {
  render: (args) => (
    <div className="bg-info-100 aspect-square w-20 rounded-full" />
  ),
};

export const InfoBG: Story = {
  render: (args) => (
    <div className="aspect-square w-20 rounded-full bg-info-bg" />
  ),
};
