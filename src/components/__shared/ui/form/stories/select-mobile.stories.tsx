import { Meta, StoryObj } from "@storybook/react";
import SelectMobile from "../select-mobile";

const meta: Meta<typeof SelectMobile> = {
  title: "Components/Form/SelectMobile",
  component: SelectMobile,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof SelectMobile>;

export const Default: Story = {
  args: {
    name: "example-select",
    options: ["Option 1", "Option 2", "Option 3"],
    placeholder: "Select an option...",
  },
};
