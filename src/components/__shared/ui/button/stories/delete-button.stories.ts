import DeleteButton from "@/components/__shared/ui/button/delete-button";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof DeleteButton> = {
  title: "Components/Buttons/DeleteButton",
  component: DeleteButton,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Delete Item",
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};

export const Ghost: Story = {
  args: {
    ...Default.args,
    variant: "ghost",
  },
};

export const CustomClassNames: Story = {
  args: {
    label: "Custom Icon",
    classNames: { icon: "text-yellow-500" },
  },
};
