import type { Meta, StoryObj } from "@storybook/react";
import EditButton from "@/components/__shared/ui/button/edit-button";

const meta: Meta<typeof EditButton> = {
  title: "Components/Buttons/EditButton",
  component: EditButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => alert("Edit button clicked"),
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    onClick: () => alert("Ghost edit button clicked"),
  },
};
