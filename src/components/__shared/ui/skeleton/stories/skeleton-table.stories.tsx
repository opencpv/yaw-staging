
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableSkeleton from "../skeleton-table";

/**
 * Use to show a placeholder while content is loading.

 */
const meta: Meta<typeof TableSkeleton> = {
  title: "Components/Skeletons/TableSkeleton",
  component: TableSkeleton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TableSkeleton>;

// Default story with a specific number of rows and columns
export const Default: Story = {
  render: (args) => <TableSkeleton {...args} />,
  args: {
    rows: 5,       // Default number of rows
    columns: 3,    // Default number of columns
  },
};

// Story with a custom number of rows and columns
export const CustomTable: Story = {
  render: (args) => <TableSkeleton {...args} />,
  args: {
    rows: 10,      // Custom number of rows
    columns: 5,    // Custom number of columns
  },
};

// Story with minimal rows and columns
export const MinimalTable: Story = {
  render: (args) => <TableSkeleton {...args} />,
  args: {
    rows: 2,       // Minimal number of rows
    columns: 2,    // Minimal number of columns
  },
};

