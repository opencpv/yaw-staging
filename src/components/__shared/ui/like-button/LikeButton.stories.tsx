import { Meta, StoryObj } from "@storybook/react";
import LikeButton from ".";

const meta: Meta<typeof LikeButton> = {
  title: "Components/LikeButton", // Title for the Storybook sidebar
  component: LikeButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof LikeButton>;

export const LikedState: Story = {
  args: {
    liked: true,
    userId: "1",
    propertyId: 1,
  },
};

export const UnlikedState: Story = {
  args: {
    ...LikedState.args,
    liked: false,
  },
};

export const WithCustomColor: Story = {
  args: {
    ...LikedState.args,
    className: "text-red-500",
  },
};
