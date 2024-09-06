import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ListingCardInterface } from "../../../../../interfaces";
import { action } from "@storybook/addon-actions";
import listingCard from "./listing-card";

const meta: Meta<typeof listingCard> = {
  title: "Components/Listing/ListingCard",
  component: listingCard,
  tags: ["autodocs"],

  argTypes: {
    propertyId: {
      description: "ID of the property",
      control: "number",
    },
    isAdmin: {
      description: "Flag to indicate if the user is an admin",
      control: "boolean",
    },
    cardType: {
      description: "Type of the card",
      control: "text",
    },
    className: {
      description: "Additional class names for styling",
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof listingCard>;

// Default story
export const Default: Story = {
  args: {
    propertyId: 123,
    isAdmin: false,
    cardType: "1",
    className: "custom-card-class",
  },
};

// Admin view story
export const AdminView: Story = {
  args: {
    propertyId: 456,
    isAdmin: true,
    cardType: "2",
    className: "admin-card-class",
  },
};

// Custom styles story
export const CustomStyles: Story = {
  args: {
    propertyId: 789,
    isAdmin: false,
    cardType: "1",
    className: "rounded-xl shadow-lg",
  },
};

// Disabled state story
export const Disabled: Story = {
  args: {
    propertyId: 101,
    isAdmin: false,
    cardType: "1",
    className: "disabled-card",
  },
};
