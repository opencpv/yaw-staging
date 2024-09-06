// src/components/SkeletonItem/SkeletonItem.stories.tsx

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import SkeletonItem from "../skeleton-product";

/**
 * Use to show a placeholder while content is loading.

 */
const meta: Meta<typeof SkeletonItem> = {
  title: "Components/Skeletons/SkeletonProduct",
  component: SkeletonItem,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SkeletonItem>;

// Default story for SkeletonItem
export const Default: Story = {
  render: (args) => (
    <SkeletonItem {...args} />
  ),
  args: {
    count: 3,
  },
};

// Story with custom count
export const CustomCount: Story = {
  render: (args) => (
    <SkeletonItem {...args} />
  ),
  args: {
    count: 5,
  },
};

// Story with custom styling
export const CustomStyling: Story = {
  render: (args) => (
    <SkeletonItem {...args} />
  ),
  args: {
    count: 3,
    className: "bg-gray-200 p-4",
  },
};


