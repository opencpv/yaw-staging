import { Meta, StoryObj } from "@storybook/react";
import ScrollTopAndSocial from "./scroll-top-and-social";

const meta: Meta<typeof ScrollTopAndSocial> = {
  title: "Components/ScrollTop/ScrollTopAndSocials", // Title for the Storybook sidebar
  component: ScrollTopAndSocial,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    hideSocial: {
      control: "boolean",
    },
    thresholdMin: {
      control: "number",
    },
    hideScrollTop: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ScrollTopAndSocial>;

export const Default: Story = {
  args: {},
};
