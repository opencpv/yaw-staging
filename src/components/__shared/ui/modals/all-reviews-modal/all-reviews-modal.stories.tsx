import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ListingCardInterface } from "../../../../../../interfaces";
import AllReviewsModal from ".";

const meta: Meta<typeof AllReviewsModal> = {
  title: "Components/Modals/AllReviewsModal",
  component: AllReviewsModal,
  tags: ["autodocs"],

  argTypes: {
    value: {
      description: "The number of reviews to display.",
      control: "number",
    },
    property: {
      description: "Details of the property being reviewed.",
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof AllReviewsModal>;

export const Default: Story = {
  args: {
    value: 10,
    property: {
      id: "property-123",
      name: "Sample Property",
      location: "Sample Location",
    } as Partial<ListingCardInterface>,
  },
};

export const NoReviews: Story = {
  args: {
    value: 0,
    property: {
      id: "property-456",
      name: "Another Property",
      location: "Another Location",
    } as Partial<ListingCardInterface>,
  },
};

export const CustomProperty: Story = {
  args: {
    value: 5,
    property: {
      id: "property-789",
      name: "Custom Property",
      location: "Custom Location",
      description: "A brief description of the custom property.",
    } as Partial<ListingCardInterface>,
  },
};
