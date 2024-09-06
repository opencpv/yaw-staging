import { Meta, StoryObj } from "@storybook/react";
import CurrencyInput from "../currency-input";

const meta: Meta<typeof CurrencyInput> = {
  title: "Components/Form/CurrencyInput", 
  component: CurrencyInput,
  tags: ["autodocs"], 
  args: {
    label: "Monthly Income",
    placeholder: "Select currency",
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

export const WithSelect: Story = {
  args: {
    isSelectElement: true,
    options: ["Option 1", "Option 2", "Option 3"],
  },
};

export const WithInitialValues: Story = {
  args: {
    value2: "1000",
    placeholderMonthlyIncomeCurrency: "EUR",
  },
};
