import { Meta, StoryObj } from "@storybook/react";
import SearchInput from "../search-input";

const meta: Meta<typeof SearchInput> = {
  title: "Components/Form/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {};

export const WithCustomPlaceholder: Story = {
  args: {
    placeholder: "Search for blogs",
  },
};
