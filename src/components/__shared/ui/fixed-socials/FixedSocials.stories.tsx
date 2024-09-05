import { Meta, StoryObj } from "@storybook/react";
import FixedSocials from "./fixed-socials";

const meta: Meta<typeof FixedSocials> = {
  title: "Components/FixedSocials", // Title for the Storybook sidebar
  component: FixedSocials,
  tags: ["autodocs"],
  argTypes: {
    thresholdMin: {
      control: "number",
      description: "The minimum scroll threshold in pixels",
    },
  },
};

export default meta;

type Story = StoryObj<typeof FixedSocials>;

export const Default: Story = {};
