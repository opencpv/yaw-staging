import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, LinkButton } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Buttons/Button", // Title for the Storybook sidebar
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
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "fit", "full", "icon"],
    },
    color: {
      control: "select",
      options: ["primary", "accent", "white", "gradient"],
    },
    radius: {
      control: "select",
      options: ["default", "lg", "full"],
    },
    isLoading: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    className: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// Base Button Story
export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    color: "primary",
    radius: "default",
    isLoading: false,
    disabled: false,
    className: "",
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
    variant: "default",
    size: "default",
    color: "primary",
    radius: "default",
    asChild: true,
  },
  //@ts-ignore

  render: (args) => <LinkButton {...args} />,
};

// // Button with Icon
export const WithIcon: Story = {
  args: {
    //     ...Default.args,
    children: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
        Button with Icon
      </>
    ),
  },
};
