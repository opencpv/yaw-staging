import { Meta, StoryObj } from "@storybook/react";
import ArchivedButton from ".";

const meta: Meta<typeof ArchivedButton> = {
  title: "Components/Buttons/ArchivedButton", // Title for the Storybook sidebar
  component: ArchivedButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    showingArchived: {
      control: "boolean",
    },
    onClick: {
      type: "function",
    },
    className: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ArchivedButton>;

export const Default: Story = {};

export const ShowingArchived: Story = {
  args: {
    showingArchived: true,
  },
};
