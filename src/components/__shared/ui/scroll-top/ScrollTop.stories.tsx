import { Meta, StoryObj } from "@storybook/react";
import ScrollTop from ".";

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
      <div className="relative h-[1440px] w-full">
        <ScrollTop />
      </div>
    );
  },
};
