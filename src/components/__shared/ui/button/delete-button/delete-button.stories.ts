import DeleteButton from "@/components/__shared/ui/button/delete-button/delete-button";
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
    className: { control: "text" },
    classNames: {
      control: "object",
      defaultValue: { icon: "" },
      description:"this classname is for the designing the icon"
    },
    handleDestruction: { action: "handleDestruction" },
    loading: { control: "boolean" },
    label: { control: "text" },
    variant: {
      control: {
        type: "select",
        options: ["default", "ghost"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Delete Item",
    loading: false,
  },
};

export const Loading: Story = {
  args: {
    label: "Deleting...",
    loading: true,
  },
};

export const Ghost: Story = {
  args: {
    label: "Delete Item",
    loading: false,
    variant: "ghost",
  },
};

export const CustomClassNames: Story = {
  args: {
    label: "Custom Icon",
    loading: false,
    classNames: { icon: "text-red-500" },
  },
};
