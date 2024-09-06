import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import FetchingStates from "./fetching-states";
import Loader from "../../loader";
import FetchErrorMessage from "../fetch-error-message/fetch-error-message";

// Meta configuration
const meta: Meta<typeof FetchingStates> = {
  title: 'Components/DataFetching/FetchingStates',
  component: FetchingStates,
  tags: ["autodocs"],

  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof FetchingStates>;

// Loading state
export const Loading: Story = {
  args: {
    isLoading: true,
    isValidating: false,
    error: null,
    data: undefined,
    isLoadingComponent: <Loader position="center" className="flex w-full justify-center" />,
  },
};

// Validating state
export const Validating: Story = {
  args: {
    isLoading: false,
    isValidating: true,
    error: null,
    data: undefined,
    isLoadingComponent: <Loader position="center" className="flex w-full justify-center" />,
  },
};

// Error state
export const ErrorState: Story = {
  args: {
    isLoading: false,
    isValidating: false,
    error: new Error("Something went wrong"),
    data: undefined,
    errorComponent: <FetchErrorMessage specificData="data" className="text-red-500" />,
  },
};

// Empty data state
export const EmptyState: Story = {
  args: {
    isLoading: false,
    isValidating: false,
    error: null,
    data: [],
    emptyStateComponent: <div className="text-gray-500">No data available</div>,
  },
};

// Complete example
export const CompleteExample: Story = {
  args: {
    isLoading: false,
    isValidating: false,
    error: null,
    data: [{ id: 1, name: 'Sample Data' }],
    isLoadingComponent: <Loader position="center" className="flex w-full justify-center" />,
    emptyStateComponent: <div className="text-gray-500">No data available</div>,
  },
};
