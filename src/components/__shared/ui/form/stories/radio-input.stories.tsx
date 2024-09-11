import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { RadioInput } from "../radio-input";

const meta: Meta<typeof RadioInput> = {
  title: "Components/Form/RadioInput",
  component: RadioInput,
  tags: ["autodocs"],
  argTypes: {
    onValueChange: { action: "valueChanged" },
  },
};

export default meta;

type Story = StoryObj<typeof RadioInput>;

export const Default: Story = {
  args: {
    label: "Choose an option",
    options: ["Option 1", "Option 2", "Option 3"],
    color: "accent",
  },
};

export const DisabledOptions: Story = {
  args: {
    label: "Choose an option",
    options: ["Option 1", "Option 2", "Option 3"],
    color: "primary",
    // disabled: { "Option 2": true },
  },
};
