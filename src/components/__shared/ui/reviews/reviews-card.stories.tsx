import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ReviewCard from "./reviews-card";

// Mock data for storybook
const mockData = {
  image: "https://picsum.photos/800/800?random=4",
  name: "Jane Doe",
  date: "September 5, 2024",
  ratings: 4,
  withBanner: false,
  review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae...",
  replies: [
    {
      image: "https://picsum.photos/800/800?random=1",
      reply: "Thank you for your feedback!",
    },
  ],
};

// Metadata for Storybook
const meta: Meta<typeof ReviewCard> = {
  title: "Reviews/ReviewCard", // Title for the Storybook sidebar
  component: ReviewCard,
  tags: ["autodocs"],
  argTypes: {
    data: {
      control: "object",
      description: "Data for the review card, including image, name, date, ratings, and review.",
    },
    index: {
      control: "number",
      description: "Index of the review card.",
    },
    withBanner: {
      control: "boolean"
    }
  },
};

export default meta;

type Story = StoryObj<typeof ReviewCard>;

// Default Story
export const Default: Story = {
  args: {
    data: mockData,
    index: 0,
  },
};


export const WithBanner: Story = {
  args: {
    data: {
      ...mockData,
    },
    withBanner: true,

    index: 1,
  },
};

// Story with No Replies
export const NoReplies: Story = {
  args: {
    data: {
      ...mockData,
      replies: [], // No replies for this story
    },
    index: 1,
  },
};

// Story with Multiple Replies
export const MultipleReplies: Story = {
  args: {
    data: {
      ...mockData,
      replies: [
        ...mockData.replies,
        { image: "https://picsum.photos/800/800?random=3", reply: "We appreciate your review!" },
      ],
    },
    index: 2,
  },
};
