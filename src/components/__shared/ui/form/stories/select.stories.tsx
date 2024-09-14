import { Meta, StoryObj } from "@storybook/react";
import { Select } from "../select";

const meta: Meta<typeof Select> = {
  title: "Components/Form/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onValueChange: { action: "changed" },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
  },
};

export const Primary: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    color: "primary",
  },
};

export const Accent: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    color: "accent",
  },
};

export const Outline: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    variant: "ghost",
  },
};
