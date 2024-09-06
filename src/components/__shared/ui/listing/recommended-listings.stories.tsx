import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { getListingProps, Listing } from "@/lib/enum";
import RecommendedListings from "./recommended-listings";

// Mock data and functions

const meta: Meta<typeof RecommendedListings> = {
  title: "Components/Listing/RecommendedListings",
  component: RecommendedListings,
  tags: ['autodocs'],

  argTypes: {
    className: {
      description: "Additional class names for styling",
      control: "text",
    },
    hideShowAll: {
      description: "Flag to hide the 'Show all' button",
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof RecommendedListings>;

// Default story
export const Default: Story = {
  args: {
    className: "custom-class",
    hideShowAll: false,
  },
  // You might want to mock `useFetchRecommendedListings` here to return `mockListings`

};


