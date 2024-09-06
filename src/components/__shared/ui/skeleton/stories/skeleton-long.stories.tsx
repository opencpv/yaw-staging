// src/components/SkeletonLong/SkeletonLong.stories.tsx

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import SkeletonLong from "../skeleton-long";

/**
 * Use to show a placeholder while content is loading.

 */
const meta: Meta<typeof SkeletonLong> = {
  title: "Components/Skeletons/SkeletonLong",
  component: SkeletonLong,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SkeletonLong>;

// Default story for SkeletonLong
export const Default: Story = {
  render: (args) => <SkeletonLong {...args} />,
  args: {
    count: 3,
  },
};

// Story with custom count
export const CustomCount: Story = {
  render: (args) => <SkeletonLong {...args} />,
  args: {
    count: 5,
  },
};

// Story with custom styling
export const CustomStyling: Story = {
  render: (args) => <SkeletonLong {...args} />,
  args: {
    count: 3,
    className: "bg-gray-300 border border-gray-400",
  },
};

// Story without count (fallback to default state)
