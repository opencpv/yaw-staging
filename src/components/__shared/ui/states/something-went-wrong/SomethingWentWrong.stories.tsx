import { Meta, StoryObj } from "@storybook/react";
import SomethingWentWrong from ".";

const meta: Meta<typeof SomethingWentWrong> = {
  title: "Pages/SomethingWentWrong", // Title for the Storybook sidebar
  component: SomethingWentWrong,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SomethingWentWrong>;

export const Default: Story = {};
