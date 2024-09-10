import { Meta, StoryObj } from "@storybook/react";
import { E164Number } from "libphonenumber-js/core";
import PhoneNumberInput from "../phone-number-input";

const meta: Meta<typeof PhoneNumberInput> = {
  title: "Components/Form/PhoneNumberInput",
  component: PhoneNumberInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof PhoneNumberInput>;

export const Default: Story = {
  args: {
    name: "phone",
  },
};

export const WithValue: Story = {
  args: {
    name: "phone",
    value: "+233123456789" as E164Number,
  },
};

export const Required: Story = {
  args: {
    name: "phone",
    required: true,
  },
};
