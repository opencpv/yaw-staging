import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, LinkButton } from ".";
import { FaArrowRight } from "react-icons/fa6";

/**
 * Displays a button or a component that looks like a button.
 */
const meta: Meta<typeof Button> = {
  title: "Components/Buttons/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "accent",
        "white",
        "gradient",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
      description: "`union`",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "fit", "full", "icon"],
      description: "size of the button",
      type: "string",
    },
    color: {
      control: "select",
      options: ["primary", "accent", "white", "gradient"],
      description: "color of the button",
      type: "string",
    },
    radius: {
      control: "select",
      options: ["default", "lg", "full"],
    },
    isLoading: {
      control: "boolean",
      description: "shows whether a process is loading or not",
      type: "boolean",
    },
    disabled: {
      control: "boolean",
      type: "boolean",
    },
    className: {
      control: "text",
      type: "string",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

// Different Variants
export const Accent: Story = {
  args: {
    ...Default.args,
    variant: "accent",
    children: "Accent Button",
  },
};

export const Outline: Story = {
  args: {
    ...Default.args,
    variant: "outline",
    children: "Outline Button",
  },
};

export const Ghost: Story = {
  args: {
    ...Default.args,
    variant: "ghost",
    children: "Ghost Button",
  },
};

// Different Sizes
export const Small: Story = {
  args: {
    ...Default.args,
    size: "sm",
    children: "Small Button",
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "lg",
    children: "Large Button",
  },
};

// Loading State
export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
    children: "Loading...",
  },
};

// Disabled State
export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    children: "Disabled Button",
  },
};

export const Link: Story = {
  args: {
    children: "Link Button",
    //@ts-ignore
    href: "#",
  },
  //@ts-ignore
  render: (args) => <LinkButton {...args} />,
};

// // Button with Icon
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <FaArrowRight />
        Button with Icon
      </>
    ),
  },
};
