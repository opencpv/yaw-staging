// ReviewBanner.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { useRatingsModalStore } from "@/store/modal/useRatingsModalStore";
import ReviewBanner from "./review-banner";

// Mock data for Storybook
const mockData = {
  variant_: "property",
  name: "Beautiful Apartment in NYC",
  image: "https://picsum.photos/800/800?random=5",
  rating: 4.5,
};

// Set default state for the modal store using Zustand
const useMockStore = () => {
  const { setOpenRatingsForm, setOpenAllRatings, setCurrentProperty } =
    useRatingsModalStore();

  // Set initial state for the store
  setCurrentProperty({ rating: 4.5 });
  setOpenAllRatings(false);
  setOpenRatingsForm(false);
};

// Metadata for Storybook
const meta: Meta<typeof ReviewBanner> = {
  title: "Reviews/ReviewBanner", // Title for Storybook sidebar
  component: ReviewBanner,
  tags: ["autodocs"],

  argTypes: {
    variant_: {
      control: "radio",
      options: ["person", "property"],
      description: "Type of review banner, either for a person or a property.",
    },
    name: {
      control: "text",
      description: "Title of the review banner.",
    },
    image: {
      control: "text",
      description: "Image URL for the banner.",
    },
    rating: {
      control: "number",
      description: "Rating to display on the banner.",
    },
    lister : {
        control: "boolean"
    }
  },
};

export default meta;

type Story = StoryObj<typeof ReviewBanner>;

// Default Story
export const Default: Story = {
  args: {
    ...mockData,
    variant_: "property",
  },
};

// Person Variant_ Story
export const PersonVariant: Story = {
  args: {
    ...mockData,
    variant_: "person",
    name: "John Doe",
    image: "https://picsum.photos/800/800?random=2",
    rating: 5,
  },
};
export const PersonVariantLister: Story = {
    args: {
      ...mockData,
      variant_: "person",
      name: "John Doe",
      image: "https://picsum.photos/800/800?random=2",
      rating: 5,
      lister: true
    },
  };

// Property Variant_ with High Rating
export const PropertyHighRating: Story = {
  args: {
    ...mockData,
    variant_: "property",
    name: "Luxury Villa in LA",
    image: "https://picsum.photos/800/800?random=4",
    rating: 4.9,
  },
};
