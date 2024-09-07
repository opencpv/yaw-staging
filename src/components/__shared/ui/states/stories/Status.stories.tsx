import { Meta, StoryObj } from "@storybook/react";
import Status from "../status";

const meta: Meta<typeof Status> = {
  title: "Components/States/Status", // Title for the Storybook sidebar
  component: Status,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Status>;

export const Default: Story = {
  args: {
    variant: "neutral",
    text: "Not Started",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    text: "Completed",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    text: "In Progress",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    text: "Suspended",
  },
};

export const NeutralLight: Story = {
  args: {
    variant: "neutral-light",
    text: "Continue",
  },
};

export const Tooltip: Story = {
  args: {
    variant: "danger",
    text: "Suspended",
    tooltipContent: "Please contact admin",
  },
};

export const WithHref: Story = {
  args: {
    variant: "success",
    text: "Match",
    href: "/match/123",
  },
};
