// src/components/Share/Share.stories.tsx

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Share from ".";
import { cn } from "@/lib/utils";

const meta: Meta<typeof Share> = {
  title: "Components/Share",
  component: Share,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Share>;

export const Default: Story = {
  render: (args) => (
    <Share {...args} />
  ),
  args: {
    title: "Sample Title",
    url: "https://example.com",
    label: "Share",
    classNames: {
      base: "p-2",
      icon: "text-blue-500",
    },
    hideLabel: false,
  },
};

export const WithCustomLabel: Story = {
  render: (args) => (
    <Share {...args} />
  ),
  args: {
    title: "Custom Title",
    url: "https://example.com",
    label: "Custom Share",
    classNames: {
      base: "p-2",
      icon: "text-green-500",
    },
    hideLabel: false,
  },
};

export const HiddenLabel: Story = {
  render: (args) => (
    <Share {...args} />
  ),
  args: {
    title: "Another Title",
    url: "https://example.com",
    label: "Share",
    classNames: {
      base: "p-2",
      icon: "text-red-500",
    },
    hideLabel: true,
  },
};

export const CustomStyling: Story = {
  render: (args) => (
    <Share {...args} />
  ),
  args: {
    title: "Styled Title",
    url: "https://example.com",
    label: "Share",
    classNames: {
      base: "p-4 bg-gray-200 border border-gray-300 rounded",
      icon: "text-purple-500",
    },
    hideLabel: false,
  },
};
