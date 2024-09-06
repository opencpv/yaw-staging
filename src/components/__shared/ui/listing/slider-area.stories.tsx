import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import SliderArea from "./SliderArea";
import { ListingCardInterface } from "../../../../../interfaces";
import { getListingProps } from "@/lib/enum";
import { cn } from "@/lib/utils";

// Mock data
const mockImages = [
  "https://picsum.photos/800/800?random=4",
  "https://picsum.photos/800/800?random=5",
  "https://picsum.photos/800/800?random=1",
];

const meta: Meta<typeof SliderArea> = {
  title: "Components/Listing/SliderArea",
  component: SliderArea,
  tags: ["autodocs"],

  argTypes: {
    showOnlyImage: {
      description: "Flag to show only images without pagination or controls",
      control: "boolean",
    },
    isMyFavoritePage: {
      description: "Flag to indicate if this is the 'My Favorites' page",
      control: "boolean",
    },
    isRecommendationsPage: {
      description: "Flag to indicate if this is the 'Recommendations' page",
      control: "boolean",
    },
    showNotViewed: {
      description: "Flag to show 'Not Viewed' button",
      control: "boolean",
    },
    isViewed: {
      description: "Flag to indicate if the listing has been viewed",
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof SliderArea>;

// Default story
export const Default: Story = {
  args: {
    images: mockImages,
    cardType: "2",
    showOnlyImage: false,
    isMyFavoritePage: false,
    isRecommendationsPage: false,
    showNotViewed: false,
    isViewed: false,
  },
};

// Story for showing only images
export const OnlyImages: Story = {
  args: {
    images: mockImages,
    cardType: "1",
    showOnlyImage: true,
    isMyFavoritePage: false,
    isRecommendationsPage: false,
    showNotViewed: false,
    isViewed: false,
  },
};

// Story for "My Favorites" page
export const MyFavorites: Story = {
  args: {
    images: mockImages,
    cardType: "2",
    showOnlyImage: false,
    isMyFavoritePage: true,
    isRecommendationsPage: false,
    showNotViewed: false,
    isViewed: true,
  },
};

// Story for "Recommendations" page
export const Recommendations: Story = {
  args: {
    images: mockImages,
    cardType: "2",
    showOnlyImage: false,
    isMyFavoritePage: false,
    isRecommendationsPage: true,
    showNotViewed: false,
    isViewed: true,
  },
};

// Story for "Not Viewed" state
export const NotViewed: Story = {
  args: {
    images: mockImages,
    cardType: "2",
    showOnlyImage: false,
    isMyFavoritePage: false,
    isRecommendationsPage: false,
    showNotViewed: true,
    isViewed: false,
  },
};
