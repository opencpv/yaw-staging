import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import SkeletonRectangle from "../skeleton-rectangle";

const meta: Meta<typeof SkeletonRectangle> = {
  title: "Components/Skeletons/SkeletonRectangle",
  component: SkeletonRectangle,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SkeletonRectangle>;

// Default story for SkeletonRectangle
export const Default: Story = {
  args: {
    count: 1,
  },
};

// Story with custom count
export const CustomCount: Story = {
  render: (args) => (
    <div className="grid gap-5">
      <SkeletonRectangle {...args} />
    </div>
  ),
  args: {
    count: 3,
  },
};
