import { Button } from "@/components/__shared/ui/button";
import { Meta, StoryObj } from "@storybook/react";
import toast from "react-hot-toast";

/**
 * A succinct message that is displayed temporarily. It is powered with react-hot-toast
 */
const meta: Meta = {
  title: "Components/Toast", // Title for the Storybook sidebar
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: (args) => (
    <div>
      <Button onClick={() => toast("This is the default toast")}>
        Default Toast
      </Button>
    </div>
  ),
};

export const Success: Story = {
  render: (args) => (
    <div>
      <Button onClick={() => alert("toast")}>Default Toast</Button>
    </div>
  ),
};
