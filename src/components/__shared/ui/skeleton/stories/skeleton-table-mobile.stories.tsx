// src/components/TableSkeletonSm/TableSkeletonSm.stories.tsx

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableSkeletonSm from "../skeleton-table-mobile";

/**
 * Use to show a placeholder while content is loading.

 */

const meta: Meta<typeof TableSkeletonSm> = {
  title: "Components/Skeletons/TableSkeletonSm",
  component: TableSkeletonSm,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TableSkeletonSm>;

// Default story with a specific number of rows
export const Default: Story = {
  render: (args) => <TableSkeletonSm {...args} />,
  args: {
    rows: 5,  // Default number of rows
  },
};

// Story with a custom number of rows
export const CustomRows: Story = {
  render: (args) => <TableSkeletonSm {...args} />,
  args: {
    rows: 10,  // Custom number of rows
  },
};

// Story with minimal number of rows
export const MinimalRows: Story = {
  render: (args) => <TableSkeletonSm {...args} />,
  args: {
    rows: 1,  // Minimal number of rows
  },
};
