import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ViewButton from "@/components/__shared/ui/button/view-button";

const meta: Meta<typeof ViewButton> = {
  title: "Components/Buttons/ViewButton",
  component: ViewButton, 
  tags: ["autodocs"],

  argTypes: {
    onOpen: { action: "opened" }, 
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <ViewButton {...args} />
    );
  },
  args: {
    onOpen: () => alert("View button clicked"), 
    className: "",
  },
};
