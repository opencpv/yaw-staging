import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import InputWithSavedSearch from "../InputWithSavedSearch";

const meta: Meta<typeof InputWithSavedSearch> = {
  title: "Components/Form/InputWithSavedSearch",
  component: InputWithSavedSearch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onSubmit: { action: "submitted" },
    onInput: { action: "inputChanged" },
    onKeyDown: { action: "keyDown" },
  },
};

export default meta;

type Story = StoryObj<typeof InputWithSavedSearch>;

export const Default: Story = {
  args: {
    placeholder: "Search...",
  },
};

export const WithCustomStyles: Story = {
  args: {
    className: "custom-container-class",
    inputClassName: "custom-input-class",
    searchIconColor: "#FF6347",
    separatorClassName: "custom-separator-class",
    placeholder: "Search here...",
  },
};

export const WithHref: Story = {
  args: {
    placeholder: "Search...",
    href: "#",
  },
};

export const WithValue: Story = {
  args: {
    placeholder: "Search...",
    value: "Current search",
    name: "search",
  },
};

export const WithHandlers: Story = {
  args: {
    placeholder: "Search...",
    onSubmit: (e) => console.log("Form submitted", e),
    onInput: (e) => console.log("Input changed", e),
    onKeyDown: (e) => console.log("Key down", e),
  },
};
