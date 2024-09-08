import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import SkeletonTextual from "../skeleton-textual";

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
