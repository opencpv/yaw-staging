import { Meta, StoryObj } from "@storybook/react";
import Print from "./print";

const meta: Meta<typeof Print> = {
  title: "Components/Print", // Title for the Storybook sidebar
  component: Print,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Print>;

export const Default: Story = {
  args: {},
};
