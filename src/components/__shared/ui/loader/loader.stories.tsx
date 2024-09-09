import { Meta, StoryObj } from "@storybook/react";
import Loader from ".";

const meta: Meta<typeof Loader> = {
  title: "Components/Loader",
  component: Loader,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {};

export const NotCentered: Story = {
  args: {
    position: "default",
  },
};
