import { Meta, StoryObj } from "@storybook/react";
import EmptyState from "../empty-state";

const meta: Meta<typeof EmptyState> = {
  title: "Components/States/EmptyState", // Title for the Storybook sidebar
  component: EmptyState,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  argTypes: {
    paddingBlock: {
      control: "select",
    },
  },
};

export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {};

export const CustomTagLine: Story = {
  args: {
    tagLine: "No data found",
  },
};

export const Description: Story = {
  args: {
    description: "Add some data to see it here",
  },
};

export const ButtonLabel: Story = {
  args: {
    buttonLabel: "Add Item",
    onClick: () => alert("Add Item"),
  },
};

export const WithHref: Story = {
  args: {
    href: "/add-item",
    buttonLabel: "Add Item",
  },
};
