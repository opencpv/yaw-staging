import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button/Button";
import { Popover, PopoverContent, PopoverTrigger } from ".";

/**
 * Displays rich content in a portal, triggered by a button.

 */
const meta: Meta<typeof Popover> = {
  title: "Components/Popover/Popover",
  component: Popover,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent >
        <p>This is the popover content!</p>
      </PopoverContent>
    </Popover>
  ),
};

export const WithCustomAlignment: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent align="start">
        <p>This popover content is aligned to the start!</p>
      </PopoverContent>
    </Popover>
  ),
};

export const WithSideOffset: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent sideOffset={10}>
        <p>This popover has a side offset of 10 units!</p>
      </PopoverContent>
    </Popover>
  ),
};
