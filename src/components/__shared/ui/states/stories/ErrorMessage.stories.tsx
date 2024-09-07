import { Meta, StoryObj } from "@storybook/react";
import ErrorMessage from "../error-message";

const meta: Meta<typeof ErrorMessage> = {
  title: "Components/States/ErrorMessage", // Title for the Storybook sidebar
  component: ErrorMessage,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {};
