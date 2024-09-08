import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import SkeletonItem from "../skeleton-product";

const meta: Meta<typeof SkeletonItem> = {
  title: "Components/Skeletons/SkeletonItem",
  component: SkeletonItem,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SkeletonItem>;

// Default story for SkeletonItem
export const Default: Story = {
  render: (args) => (
    <div className="grid grid-cols-3 gap-5">
      <SkeletonItem {...args} />
    </div>
  ),
  args: {
    count: 3,
  },
};

// Story with custom count
export const CustomCount: Story = {
  render: (args) => (
    <div className="grid grid-cols-3 gap-5">
      <SkeletonItem {...args} />
    </div>
  ),
  args: {
    count: 5,
  },
};
