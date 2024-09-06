// src/components/Rating/Rating.stories.tsx

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Rating from ".";

const meta: Meta<typeof Rating> = {
  title: "Components/Rating",
  component: Rating,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Rating>;



const mockRatingsModalStore = {
  openRatingsForm: false,
  setOpenRatingsForm: (open: boolean) => {},
  openAllRatings: false,
  setOpenAllRatings: (open: boolean) => {},
  currentProperty: null,
  setCurrentProperty: (property: any) => {},
};

const mockSignInModalStore = {
  openSignInModal: false,
  setOpenSignInModal: (open: boolean) => {},
};

export const Default: Story = {
  render: (args) => (
    <Rating {...args} />
  ),
  args: {
    value: 4,
    className: "text-blue-500",
    property: {
      // id: 1,
      // name: "Sample Property",
      // location: "Sample Location",
    },
  },
};

export const WithoutValue: Story = {
  render: (args) => (
    <Rating {...args} />
  ),
  args: {
    value: 0,
    className: "text-blue-500",
    property: {
      // id: 2,
      // name: "Another Property",
      // location: "Another Location",
    },
  },
};

export const WithCustomClass: Story = {
  render: (args) => (
    <Rating {...args} />
  ),
  args: {
    value: 3,
    className: "text-red-500",
    property: {
      // id: 3,
      // name: "Custom Property",
      // location: "Custom Location",
    },
  },
};

// To simulate store behavior in Storybook, you would typically use Storybook's
// decorators to provide mock implementations. For simplicity, the story does not
// include decorators, but in a full setup, you would use them to mock the store.
