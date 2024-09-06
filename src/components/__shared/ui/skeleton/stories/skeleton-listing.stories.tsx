
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { cn } from "@/lib/utils";
import SkeletonListing from "../skeleton-listing";

/**
 * Use to show a placeholder while content is loading.

 */
const meta: Meta<typeof SkeletonListing> = {
  title: "Components/Skeletons/SkeletonListing",
  component: SkeletonListing,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SkeletonListing>;

export const Default: Story = {
  render: (args) => <SkeletonListing {...args} />,
  args: {
    count: 3,
    cardType: 2,
  },
};

export const CardType1: Story = {
  render: (args) => <SkeletonListing {...args} />,
  args: {
    count: 3,
    cardType: 1,
  },
};

export const CustomStyling: Story = {
  render: (args) => <SkeletonListing {...args} />,
  args: {
    count: 2,
    cardType: 2,
    className: "bg-gray-300 border border-gray-400",
  },
};

// Story without count (fallback to default state)
export const WithoutCount: Story = {
  render: (args) => <SkeletonListing {...args} />,
  args: {
    cardType: 2,
  },
};
