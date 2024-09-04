import { Meta, StoryObj } from "@storybook/react";
import Logo from "./logo";

const meta: Meta<typeof Logo> = {
  title: "Components/Logo", // Title for the Storybook sidebar
  component: Logo,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
    },
    url: {
      control: "text",
    },
    onClick: {
      type: "function",
    },
    className: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {},
};

export const ExtraSmall: Story = {
  args: {
    size: "xs",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};
