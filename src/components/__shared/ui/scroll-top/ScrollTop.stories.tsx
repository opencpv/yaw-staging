import { Meta, StoryObj } from "@storybook/react";
import ScrollTop from "./scroll-top";

const meta: Meta<typeof ScrollTop> = {
  title: "Components/ScrollTop/ScrollTop", // Title for the Storybook sidebar
  component: ScrollTop,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ScrollTop>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className="relative h-60 w-full">
        <ScrollTop />
      </div>
    );
  },
};
