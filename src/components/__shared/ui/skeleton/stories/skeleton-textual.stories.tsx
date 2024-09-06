// src/components/SkeletonTextual/SkeletonTextual.stories.tsx

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import SkeletonTextual from "../skeleton-textual";

/**
 * Use to show a placeholder while content is loading.

 */

const meta: Meta<typeof SkeletonTextual> = {
  title: "Components/Skeletons/SkeletonTextual",
  component: SkeletonTextual,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SkeletonTextual>;

// Default story
export const Default: Story = {
  render: (args) => <SkeletonTextual {...args} />,
};

// Story with custom className
export const WithCustomClassName: Story = {
  render: (args) => <SkeletonTextual {...args} />,
  args: {
    className: "bg-gray-200 p-4", // Example custom class
  },
};

// Story with additional styling
export const WithAdditionalStyling: Story = {
  render: (args) => <SkeletonTextual {...args} />,
  args: {
    className: "border border-gray-300 rounded-md p-3",
  },
};
