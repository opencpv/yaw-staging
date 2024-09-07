import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import FetchErrorMessage from "../fetch-error-message";

const meta: Meta<typeof FetchErrorMessage> = {
  title: "Components/DataFetching/FetchErrorMessage",
  tags: ["autodocs"],
  component: FetchErrorMessage,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof FetchErrorMessage>;

export const Default: Story = {};

export const WithSpecificData: Story = {
  args: {
    specificData: "user abcd",
  },
};

export const Offline: Story = {
  render: (args) => {
    Object.defineProperty(navigator, "onLine", {
      value: false,
      configurable: true,
    });

    return <FetchErrorMessage {...args} />;
  },
  args: {
    specificData: "user details",
  },
  parameters: {
    viewport: {
      defaultViewport: "responsive",
    },
  },
};
