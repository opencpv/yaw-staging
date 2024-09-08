import { Meta, StoryObj } from "@storybook/react";
import FixedSocials from ".";

const meta: Meta<typeof FixedSocials> = {
  title: "Components/FixedSocials", // Title for the Storybook sidebar
  component: FixedSocials,
  tags: ["autodocs"],
  argTypes: {
    thresholdMin: {
      description:
        "The minimum scroll threshold until the socials appear in pixels",
    },
  },
};

export default meta;

type Story = StoryObj<typeof FixedSocials>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className="relative h-[400px] w-full">
        <FixedSocials {...args} />
      </div>
    );
  },
};

export const MinimumThreshold: Story = {
  args: {
    thresholdMin: 1200,
  },
  render: (args) => {
    return (
      <div className="relative h-[400px] w-full">
        <FixedSocials {...args} />
      </div>
    );
  },
};
