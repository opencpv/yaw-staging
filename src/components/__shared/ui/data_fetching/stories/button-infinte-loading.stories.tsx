import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ButtonInfiniteLoading from "../button-infinite-loading";

const meta: Meta<typeof ButtonInfiniteLoading> = {
  title: "Components/DataFetching/ButtonInfiniteLoading",
  tags: ["autodocs"],

  component: ButtonInfiniteLoading,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    loadMore: {
      type: "function",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonInfiniteLoading>;

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

export const NoData: Story = {
  args: {
    isLoading: false,
    loadMore: () => console.log("Load more clicked"),
    isValidating: false,
    data: [],
  },
};
