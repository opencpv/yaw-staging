import { Meta, StoryObj } from "@storybook/react";
import EmptyState from "../empty-state";

const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState", // Title for the Storybook sidebar
  component: EmptyState,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    paddingBlock: {
      control: "select",
    },
    href: {
      description: "must be used with buttonLabel",
    },
    // tagLine: {
    //     control: "text",
    // },
    // buttonLabel: {
    //   control: "text",
    // },
    onClick: {
      type: "function",
      description: "must be used with buttonLabel",
    },
    className: {
      control: "text",
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
  },
};

export const WithHref: Story = {
  args: {
    href: "/add-item",
  },
};
