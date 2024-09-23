import { Meta, StoryObj } from "@storybook/react";
import CountryInput from "../country-input";

// Storybook metadata
const meta: Meta<typeof CountryInput> = {
  title: "Components/Form/CountryInput",
  component: CountryInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placeholder: {
      description: "Placeholder text for the input",
      control: "text",
    },
    label: {
      description: "Label for the input field",
      control: "text",
    },
    initialValue: {
      description: "Initial value of the input field",
      control: "text",
    },
    name: {
      description: "Name attribute for the input",
      control: "text",
    },
    value: {
      description: "Controlled value of the input",
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CountryInput>;

export const Default: Story = {
  args: {
    placeholder: "Select your country",
  },
};

export const WithInitialValue: Story = {
  args: {
    placeholder: "Select your country",
    initialValue: "United States",
    value: "United States",
  },
};
