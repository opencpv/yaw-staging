import { Meta, StoryObj } from "@storybook/react";
import PageNotFound from ".";

const meta: Meta<typeof PageNotFound> = {
  title: "Pages/PageNotFound", // Title for the Storybook sidebar
  component: PageNotFound,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PageNotFound>;

export const Default: Story = {};
