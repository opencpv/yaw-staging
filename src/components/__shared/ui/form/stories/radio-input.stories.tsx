import { Meta, StoryObj } from "@storybook/react";
import { RadioInput } from "../radio-input";

const meta: Meta<typeof RadioInput> = {
  title: "Components/Form/RadioInput",
  component: RadioInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onValueChange: { type: "function" },
    disabled: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadioInput>;

export const Default: Story = {
  args: {
    label: "Choose an option",
    value: "Option 1",
    options: ["Option 1", "Option 2", "Option 3"],
  },
};

export const Primary: Story = {
  args: {
    label: "Choose an option",
    value: "Option 1",
    options: ["Option 1", "Option 2", "Option 3"],
    color: "primary",
  },
};

export const DisabledOptions: Story = {
  args: {
    label: "Choose an option",
    options: ["Option 1", "Option 2", "Option 3"],
    color: "primary",
    //@ts-ignore
    disabled: { "Option 2": true },
  },
};
