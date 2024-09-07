import { Meta, StoryObj } from "@storybook/react";
import RecommendedListings from "./recommended-listings";

const meta: Meta<typeof RecommendedListings> = {
  title: "Pages/RecommendedListings",
  component: RecommendedListings,
  tags: ["autodocs"],

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
};
