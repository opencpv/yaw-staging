import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  TableBody,
  TableBodyRow,
  TableBodyRowGroup,
  TableBodySm,
  TableHeader,
  TableHeaderRow,
  TableRowSm,
  TableSm,
} from "./";

const meta: Meta<typeof Table> = {
  title: "Components/Table", // Title for the Storybook sidebar
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "object",
    },
    className: {
      control: "text",
    },
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    //children: "",
    className: "grid-cols-6",
  },
  render: (args) => {
    return (
      <>
        <Table>
          <TableHeaderRow className={args.className}>
            <TableHeader className="col-span-2">Header 1</TableHeader>
            <TableHeader className="col-span-1">Header 2</TableHeader>
            <TableHeader className="col-span-1">Header 3</TableHeader>
            <TableHeader className="col-span-1">Header 4</TableHeader>
            <TableHeader className="col-span-1">Header 5</TableHeader>
          </TableHeaderRow>
          <TableBodyRowGroup>
            <TableBodyRow className={args.className}>
              <TableBody className="col-span-2">Body 1</TableBody>
              <TableBody className="col-span-1">Body 2</TableBody>
              <TableBody className="col-span-1">Body 3</TableBody>
              <TableBody className="col-span-1">Body 4</TableBody>
              <TableBody className="col-span-1">Body 5</TableBody>
            </TableBodyRow>
            <TableBodyRow className={args.className}>
              <TableBody className="col-span-2">Body 1</TableBody>
              <TableBody className="col-span-1">Body 2</TableBody>
              <TableBody className="col-span-1">Body 3</TableBody>
              <TableBody className="col-span-1">Body 4</TableBody>
              <TableBody className="col-span-1">Body 5</TableBody>
            </TableBodyRow>
          </TableBodyRowGroup>
        </Table>
        <TableSm>
          <TableRowSm>
            <TableBodySm>Mobile Body 1</TableBodySm>
            <TableBodySm>Mobile Body 2</TableBodySm>
            <TableBodySm>Mobile Body 3</TableBodySm>
          </TableRowSm>
        </TableSm>
      </>
    );
  },
};
