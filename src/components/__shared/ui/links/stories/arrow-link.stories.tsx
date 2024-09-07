import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ArrowLink from "../arrow-link";

const meta: Meta<typeof ArrowLink> = {
  title: "Components/Links/ArrowLink",
  component: ArrowLink,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ArrowLink>;

export const Default: Story = {
  args: {
    text: "Click Me",
    href: "#",
    color: "#222",
  },
};

export const LeftArrow: Story = {
  args: {
    text: "Go Back",
    href: "#",
    arrowPosition: "left",
    color: "#0056b3",
  },
};
