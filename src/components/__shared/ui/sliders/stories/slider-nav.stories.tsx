
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import SliderNav from "../slider-nav";

const meta: Meta<typeof SliderNav> = {
  title: "Components/Sliders/SliderNav",
  component: SliderNav,
  tags: ['autodocs'],

  argTypes: {
    position: {
      description: "Position of the navigation button (left or right)",
      control: { type: "select", options: ["left", "right"] },
    },
    size: {
      description: "Size of the button (sm, md, lg)",
      control: { type: "select", options: ["sm", "md", "lg"] },
    },
    color: {
      description: "Color of the button (accent or white)",
      control: { type: "select", options: ["accent", "white"] },
    },
    hidden: {
      description: "Toggle visibility of the button",
      control: { type: "boolean" },
    },
    isAbsolute: {
      description: "If true, button is positioned absolutely",
      control: { type: "boolean" },
    },
    onClick: {
      action: "clicked",
      description: "Callback function when button is clicked",
    },
  },
};

export default meta;

type Story = StoryObj<typeof SliderNav>;

// Default Story
export const Default: Story = {
  args: {
    position: "left",
    size: "md",
    color: "white",
    hidden: false,
    isAbsolute: true,
    onClick: () => console.log("Button clicked"),
  },
};

export const LargeAccentRight: Story = {
  args: {
    ...Default.args,
    position: "right",
    size: "lg",
    color: "accent",
  },
};

export const Hidden: Story = {
  args: {
    ...Default.args,
    hidden: true,
  },
};

export const SmallWhiteButton: Story = {
  args: {
    ...Default.args,
    size: "sm",
    color: "white",
  },
};
