
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import SkeletonRectangle from "../skeleton-rectangle";

/**
 * Use to show a placeholder while content is loading.

 */
const meta: Meta<typeof SkeletonRectangle> = {
  title: "Components/Skeletons/SkeletonRectangle",
  component: SkeletonRectangle,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SkeletonRectangle>;

// Default story for SkeletonRectangle
export const Default: Story = {
  render: (args) => (
    <SkeletonRectangle {...args} />
  ),
  args: {
    count: 3,
  },
};

// Story with custom count
export const CustomCount: Story = {
  render: (args) => (
    <SkeletonRectangle {...args} />
  ),
  args: {
    count: 5,
  },
};

// Story with custom styling
export const CustomStyling: Story = {
  render: (args) => (
    <SkeletonRectangle {...args} />
  ),
  args: {
    count: 3,
    className: "bg-gray-200 p-4",
  },
};

