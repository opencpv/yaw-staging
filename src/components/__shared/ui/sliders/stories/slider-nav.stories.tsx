import { Meta, StoryObj } from "@storybook/react";
import SliderNav from "../slider-nav";

const meta: Meta<typeof SliderNav> = {
  title: "Components/Sliders/SliderNav",
  component: SliderNav,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
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
    },
    isAbsolute: {
      description:
        "If true, button is positioned absolutely. Use when working on a slider",
    },
    onClick: {
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
    color: "accent",
  },
};

export const Left: Story = {
  args: {
    ...Default.args,
    color: "accent",
  },
};

export const Right: Story = {
  args: {
    ...Default.args,
    position: "right",
    color: "accent",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "sm",
    color: "accent",
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "lg",
    color: "accent",
  },
};

export const Accent: Story = {
  args: {
    ...Default.args,
  },
};

/**
 * Button is statically position, like a normal element.
 */
export const StaticPosition: Story = {
  args: {
    ...Default.args,
    isAbsolute: false,
    color: "accent",
  },
};
