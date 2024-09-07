import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "../date-picker";

const meta: Meta<typeof DatePicker> = {
  title: "Components/Form/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    label: "Select Date",
    placeholderDate: "2024-01-01",
  },
};

export const WithInitialValue: Story = {
  args: {
    label: "Select Start Date",
    value: "2024-01-15",
  },
};

export const Disabled: Story = {
  args: {
    label: "Select Date",
    disabled: true,
  },
};

export const CustomClassName: Story = {
  args: {
    label: "Select Date",
    className: "bg-gray-100",
  },
};
