// src/components/Skeleton/Skeleton.stories.tsx

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { cn } from "@/lib/utils";
import { Skeleton } from "..";

/**
 * Use to show a placeholder while content is loading.

 */

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeletons/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

// Default story for the Skeleton component
export const Default: Story = {
  render: (args) => (
    <Skeleton {...args}>
      <div className="p-4">
        <p>This content is hidden by the Skeleton loader.</p>
      </div>
    </Skeleton>
  ),
  args: {
    className: "w-48 h-24",
  },
};

// Story with custom width and height
export const CustomSize: Story = {
  render: (args) => (
    <Skeleton {...args}>
      <div className="p-4">
        <p>This content is hidden by the Skeleton loader.</p>
      </div>
    </Skeleton>
  ),
  args: {
    className: "w-64 h-32",
  },
};

// Story with additional styling
export const CustomStyling: Story = {
  render: (args) => (
    <Skeleton {...args}>
      <div className="p-4">
        <p>This content is hidden by the Skeleton loader.</p>
      </div>
    </Skeleton>
  ),
  args: {
    className: "w-48 h-24 bg-gray-300 border border-gray-400",
  },
};
