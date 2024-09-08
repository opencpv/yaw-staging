import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableSkeletonSm from "../skeleton-table-mobile";

/**
 * Use to show a placeholder while table content is loading on mobile.
 */
const meta: Meta<typeof TableSkeletonSm> = {
  title: "Components/Skeletons/TableSkeletonSm",
  component: TableSkeletonSm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof TableSkeletonSm>;

// Default story with a specific number of rows
export const Default: Story = {
  args: {
    rows: 3, // Default number of rows
  },
};
