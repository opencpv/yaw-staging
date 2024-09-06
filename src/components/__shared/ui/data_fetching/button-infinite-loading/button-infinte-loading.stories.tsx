import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ButtonInfiniteLoading from "./button-infinite-loading";

// Meta configuration
const meta: Meta<typeof ButtonInfiniteLoading> = {
  title: "Components/DataFetching/ButtonInfiniteLoading",
  tags: ["autodocs"],

  component: ButtonInfiniteLoading,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ButtonInfiniteLoading>;

// Default story
export const Default: Story = {
  args: {
    isLoading: false,
    loadMore: () => console.log("Load more clicked"),
    isValidating: false,
    data: [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
    ],
  },
};

// Loading state
export const Loading: Story = {
  args: {
    isLoading: true,
    loadMore: null,
    isValidating: false,
    data: [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
    ],
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    isLoading: false,
    loadMore: null,
    isValidating: false,
    data: [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
    ],
  },
};

// Validating state
export const Validating: Story = {
  args: {
    isLoading: false,
    loadMore: () => console.log("Load more clicked"),
    isValidating: true,
    data: [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
    ],
  },
};

// No data to load
export const NoData: Story = {
  args: {
    isLoading: false,
    loadMore: () => console.log("Load more clicked"),
    isValidating: false,
    data: [],
  },
};
