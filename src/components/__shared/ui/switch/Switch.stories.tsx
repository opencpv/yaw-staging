import { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch", // Title for the Storybook sidebar
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: "text",
    },
    checked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    onCheckedChange: {
      type: "function",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    checked: true,
    onCheckedChange: () => {},
  },
};

export const Unchecked: Story = {
  args: {
    checked: false,
    onCheckedChange: () => {},
  },
};

export const WithLabel: Story = {
  args: {
    label: "Label",
    checked: true,
    onCheckedChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
    onCheckedChange: () => {},
  },
};
