import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import FetchErrorMessage from "./fetch-error-message";

// Meta configuration
const meta: Meta<typeof FetchErrorMessage> = {
  title: 'Components/DataFetching/FetchErrorMessage',
  tags: ["autodocs"],
  component: FetchErrorMessage,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof FetchErrorMessage>;

// No specific data and online
export const Default: Story = {
  args: {
    specificData: undefined,
    // className: "bg-white",
  },
};

// Specific data and online
export const WithSpecificData: Story = {
  args: {
    specificData: "user abcd",
    // className: "bg-gray-100",
  },
};

// Offline
export const Offline: Story = {
  render: (args) => {
    Object.defineProperty(navigator, 'onLine', { value: false, configurable: true });

    return <FetchErrorMessage {...args} />;
  },
  args: {
    specificData: "user details",
  },
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};
