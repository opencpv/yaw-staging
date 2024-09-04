import { Meta, StoryObj } from "@storybook/react";
import ScrollTop from "./scroll-top";

const meta: Meta<typeof ScrollTop> = {
  title: "Components/ScrollTop/ScrollTop", // Title for the Storybook sidebar
  component: ScrollTop,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ScrollTop>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className="relative z-50 h-96">
        <ScrollTop />
      </div>
    );
  },
};
