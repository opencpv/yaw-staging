import { Meta, StoryObj } from "@storybook/react";
import CurrencyInput from "../currency-input";

const meta: Meta<typeof CurrencyInput> = {
  title: "Components/Form/CurrencyInput",
  component: CurrencyInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Monthly Income",
    placeholderMonthlyIncomeCurrency: "USD",
    name: "currency",
    name2: "income",
    isSelectElement: false,
  },
  argTypes: {
    onChange: { action: "onChange" },
    onChange2: { action: "onChange2" },
  },
};

export default meta;
type Story = StoryObj<typeof CurrencyInput>;

// Default story
export const Default: Story = {};

/**
 * Makes the second element a <strong>select</strong> input instead of a <strong>text</strong> input
 */
export const WithSelect: Story = {
  args: {
    isSelectElement: true,
    value2: "2000 - 3000",
    options: [
      "1000 - 2000",
      "2000 - 3000",
      "3000 - 4000",
      "4000 - 5000",
      "5000 - 6000",
    ],
  },
};
