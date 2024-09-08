import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  ActionContent,
  ActionItem,
  ActionItemTrigger,
  ActionPopover,
} from "./action-popover";
import { PopoverPlacement } from ".";

const meta: Meta<typeof ActionPopover> = {
  title: "Components/Popover/ActionPopover",
  component: ActionPopover,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placement: {
      control: "select",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ActionPopover>;

export const Default: Story = {
  render: (args) => (
    <ActionPopover {...args}>
      <ActionItemTrigger>Open Popover</ActionItemTrigger>
      <ActionContent placement={args.placement}>
        <ActionItem onClick={() => alert("Item 1 clicked")}>Item 1</ActionItem>
        <ActionItem onClick={() => alert("Item 2 clicked")}>Item 2</ActionItem>
        <ActionItem href="https://example.com" target="_blank">
          Item 3 - Link
        </ActionItem>
      </ActionContent>
    </ActionPopover>
  ),
};

export const CustomPlacement: Story = {
  render: (args) => (
    <ActionPopover {...args}>
      <ActionItemTrigger>Open Popover</ActionItemTrigger>
      <ActionContent placement={args.placement}>
        <ActionItem onClick={() => alert("Item 1 clicked")}>Item 1</ActionItem>
        <ActionItem onClick={() => alert("Item 2 clicked")}>Item 2</ActionItem>
        <ActionItem href="https://example.com" target="_blank">
          Item 3 - Link
        </ActionItem>
      </ActionContent>
    </ActionPopover>
  ),
  args: {
    placement: "bottom" as PopoverPlacement, // Default placement
  },
};

export const Controlled: Story = {
  render: (args) => (
    <ActionPopover {...args}>
      <ActionItemTrigger>Open Popover</ActionItemTrigger>
      <ActionContent placement={args.placement}>
        <ActionItem onClick={() => alert("Item 1 clicked")}>Item 1</ActionItem>
        <ActionItem onClick={() => alert("Item 2 clicked")}>Item 2</ActionItem>
        <ActionItem href="https://example.com" target="_blank">
          Item 3 - Link
        </ActionItem>
      </ActionContent>
    </ActionPopover>
  ),
  args: {
    isOpen: true,
    onOpenChange: () => {},
    placement: "bottom" as PopoverPlacement, // Default placement
  },
};
