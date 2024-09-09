import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import SkeletonListing from "../skeleton-listing";

const meta: Meta<typeof SkeletonListing> = {
  title: "Components/Skeletons/SkeletonListing",
  component: SkeletonListing,
  tags: ["autodocs"],
  argTypes: {
    cardType: {
      type: "number",
    },
  },
};

export default meta;

type Story = StoryObj<typeof SkeletonListing>;

export const Default: Story = {
  render: (args) => (
    <div className="grid grid-cols-3 gap-5">
      <SkeletonListing {...args} />
    </div>
  ),
  args: {
    count: 3,
    cardType: 2,
  },
};

export const CardType1: Story = {
  render: (args) => (
    <div className="grid grid-cols-3 gap-5">
      <SkeletonListing {...args} />
    </div>
  ),
  args: {
    ...Default.args,
    cardType: 1,
  },
};
