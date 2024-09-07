// src/components/__shared/ui/popover/Popover.stories.tsx

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ActionContent, ActionItem, ActionItemTrigger, ActionPopover } from "./action-popover";
import { PopoverPlacement } from ".";

const meta: Meta<typeof ActionPopover> = {
  title: "Components/Popover/ActionPopover",
  component: ActionPopover,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ActionPopover>;

export const Default: Story = {
  render: () => (
    <ActionPopover>
      <ActionItemTrigger>Open Popover</ActionItemTrigger>
      <ActionContent>
        <ActionItem onClick={() => alert("Item 1 clicked")}>Item 1</ActionItem>
        <ActionItem onClick={() => alert("Item 2 clicked")}>Item 2</ActionItem>
        <ActionItem href="https://example.com" target="_blank">Item 3 - Link</ActionItem>
      </ActionContent>
    </ActionPopover>
  ),
};

export const WithCustomPlacement: Story = {
  render: (args) => (
    <ActionPopover {...args}>
      <ActionItemTrigger>Open Popover</ActionItemTrigger>
      <ActionContent placement="top">
        <ActionItem onClick={() => alert("Item 1 clicked")}>Item 1</ActionItem>
        <ActionItem onClick={() => alert("Item 2 clicked")}>Item 2</ActionItem>
        <ActionItem href="https://example.com" target="_blank">Item 3 - Link</ActionItem>
      </ActionContent>
    </ActionPopover>
  ),
  args: {
    placement: 'bottom' as PopoverPlacement, // Default placement
  },
};

export const WithSideOffset: Story = {
  render: (args) => (
    <ActionPopover {...args}>
      <ActionItemTrigger>Open Popover</ActionItemTrigger>
      <ActionContent placement="right">
        <ActionItem onClick={() => alert("Item 1 clicked")}>Item 1</ActionItem>
        <ActionItem onClick={() => alert("Item 2 clicked")}>Item 2</ActionItem>
        <ActionItem href="https://example.com" target="_blank">Item 3 - Link</ActionItem>
      </ActionContent>
    </ActionPopover>
  ),
  args: {
    placement: 'bottom' as PopoverPlacement,
  },
};

