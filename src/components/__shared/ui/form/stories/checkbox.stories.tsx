import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../checkbox";

// Storybook metadata
const meta: Meta<typeof Checkbox> = {
  title: "Components/Form/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    name: {
      description: "Name of the checkbox",
      control: "text",
      type: "string",
    },
    color: {
      description: "Color variant of the checkbox",
      control: {
        type: "select",
        control: "select",
        options: ["accent", "primary", "white"],
      },
    },
    radius: {
      description: "Border radius of the checkbox",
      control: {
        type: "select",
        options: ["default", "md"],
      },
    },
    disabled: {
      description: "Disables the checkbox if set to true",
      control: "boolean",
    },
    label: {
      description: "Text label for the checkbox",
      control: "text",
    },
    classNames: {
      description: "Custom class names for styling",
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

// Default Checkbox Story
export const Default: Story = {
  args: {
    label: "Default Checkbox",
  },
};

// Accent Checkbox Story
export const Accent: Story = {
  args: {
    label: "Accent",
    color: "accent",
  },
};

// White Color Checkbox Story
export const White: Story = {
  args: {
    label: "White",
    color: "white",
  },
};

// Disabled Checkbox Story
export const Disabled: Story = {
  args: {
    label: "Disabled Checkbox",
    disabled: true,
  },
};

// Checkbox with Rounded Corners
export const MediumCheckbox: Story = {
  args: {
    label: "Rounded Checkbox",
    color: "primary",
    radius: "md",
  },
};
