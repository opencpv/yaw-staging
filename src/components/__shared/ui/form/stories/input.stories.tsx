import { Meta, StoryObj } from "@storybook/react";
import { Input } from "../input";

const meta: Meta<typeof Input> = {
  title: "Components/Form/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: {
      description: "Value of the input",
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
    label: {
      description: "Label for the input field",
      control: "text",
    },
    classNames: {
      description:
        "Styles for the other part of the input i.e base, label, etc.",
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Input with Label",
    placeholder: "Enter text",
  },
};

export const WithPrefix: Story = {
  args: {
    label: "Input with Prefix",
    prefix: "$",
    placeholder: "Enter amount",
  },
};

export const Required: Story = {
  args: {
    label: "Required Input",
    required: true,
    placeholder: "Required field",
  },
};

export const WithTooltip: Story = {
  args: {
    label: "Input with Tooltip",
    tooltip: "This is a tooltip",
    placeholder: "Hover for info",
  },
};
