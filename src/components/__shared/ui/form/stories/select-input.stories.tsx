import { Meta, StoryObj } from "@storybook/react";
import { SelectInput } from "../select";

const meta: Meta<typeof SelectInput> = {
  title: "Components/Form/SelectInput",
  component: SelectInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default meta;

type Story = StoryObj<typeof SelectInput>;

export const Default: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    placeholder: "Select an option...",
    label: "Select Input",
    value: "",
  },
};

export const WithPrefix: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    placeholder: "Select an option...",
    label: "Select Input with Prefix",
    prefix: "Prefix",
    value: "",
  },
};
