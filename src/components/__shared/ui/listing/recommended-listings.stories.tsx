import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { getListingProps, Listing } from "@/lib/enum";
import RecommendedListings from "./recommended-listings";

// Mock data and functions
const mockListings: Listing[] = [
  { id: 1, title: "Listing 1", imageUrl: "/path/to/image1.jpg" },
  { id: 2, title: "Listing 2", imageUrl: "/path/to/image2.jpg" },
  { id: 3, title: "Listing 3", imageUrl: "/path/to/image3.jpg" },
  // Add more mock listings as needed
];

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

// Story for loading state
export const Loading: Story = {
  args: {
    className: "custom-class",
    hideShowAll: false,
  },

};

// Story for error state
export const ErrorState: Story = {
  args: {
    className: "custom-class",
    hideShowAll: false,
  },

};
