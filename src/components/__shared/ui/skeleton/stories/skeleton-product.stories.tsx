// src/components/SkeletonItem/SkeletonItem.stories.tsx

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
    <SkeletonItem {...args} />
  ),
  args: {
    count: 3,
    className: "",
  },
};

// Story with custom count
export const CustomCount: Story = {
  render: (args) => (
    <SkeletonItem {...args} />
  ),
  args: {
    count: 5,
    className: "",
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

// Story without count (fallback to default state)
export const WithoutCount: Story = {
  render: (args) => (
    <SkeletonItem {...args} />
  ),
  args: {
    className: "",
  },
};
