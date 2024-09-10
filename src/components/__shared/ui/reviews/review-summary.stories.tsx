// ReviewSummary.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ReviewSummary from "./review-summary";

// Metadata for Storybook
const meta: Meta<typeof ReviewSummary> = {
  title: "Reviews/ReviewSummary", // Title for the Storybook sidebar
  component: ReviewSummary,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      type: "string",
      description: "Custom CSS class for styling",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ReviewSummary>;

// Default Story
export const Default: Story = {
  args: {
    className: "",
  },
};

// Custom Styled Story
export const CustomStyled: Story = {
  args: {
    className: "bg-blue-100 border-blue-500",
  },
  render: (args) => {
    return (
      <div className="w-full max-w-[1103px]">
        <ReviewSummary {...args} />
      </div>
    );
  },
};
