import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import SaveSearchModal from "./SaveSearchModal";

const meta: Meta<typeof SaveSearchModal> = {
  title: "Components/Modals/SaveSearchModal",
  component: SaveSearchModal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      description: "Optional CSS class to style the SaveSearchModal.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof SaveSearchModal>;

// Default story
export const Default: Story = {
  render: (args) => {
    return <SaveSearchModal {...args} />;
  },
};
