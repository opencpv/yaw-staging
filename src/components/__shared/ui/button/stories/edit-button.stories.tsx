import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import EditButton from "@/components/__shared/ui/button/edit-button";

const meta: Meta<typeof EditButton> = {
  title: "Components/Buttons/EditButton", 
  component: EditButton, 
  tags: ["autodocs"],

  argTypes: {
    onClick: { action: "clicked" }, 
    variant: {
      control: { type: "select" },
      options: ["default", "ghost"], 
    },
    className: { control: "text" }, 
  },
};

export default meta;


type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default", 
    className: "",
    onClick: () => console.log("Edit button clicked"), 
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost", 
    className: "p-2", 
    onClick: () => console.log("Ghost edit button clicked"), 
  },
};
