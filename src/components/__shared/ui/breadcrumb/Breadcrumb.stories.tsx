import { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from ".";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb", // Title for the Storybook sidebar
  component: Breadcrumb,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    link: {
      description: "Link to the previous page",
    },
    page: {
      description: "The current page title",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    link: "#",
    page: "Gold Watch",
  },
};
