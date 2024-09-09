import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableSkeleton from "../skeleton-table";
import { Table, TableBodyRowGroup } from "../../table";

const meta: Meta<typeof TableSkeleton> = {
  title: "Components/Skeletons/TableSkeleton",
  component: TableSkeleton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TableSkeleton>;

// Default story with a specific number of rows and columns
export const Default: Story = {
  render: (args) => (
    <Table className="grid grid-cols-4">
      <TableBodyRowGroup>
        <TableSkeleton {...args} />
      </TableBodyRowGroup>
    </Table>
  ),
  args: {
    rows: 3,
    columns: 4,
  },
};
