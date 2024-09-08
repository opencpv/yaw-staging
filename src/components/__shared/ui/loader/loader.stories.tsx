import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { cn } from "@/lib/utils";
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
