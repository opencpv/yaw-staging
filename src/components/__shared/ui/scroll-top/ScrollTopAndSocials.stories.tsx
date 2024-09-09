import { Meta, StoryObj } from "@storybook/react";
import ScrollTopAndSocial from "./scroll-top-and-social";

const meta: Meta<typeof ScrollTopAndSocial> = {
  title: "Components/ScrollTop/ScrollTopAndSocials", // Title for the Storybook sidebar
  component: ScrollTopAndSocial,
  tags: ["autodocs"],
  argTypes: {
    hideSocial: {
      control: "boolean",
      description: "Hides Fixed Socials",
    },
    thresholdMin: {
      control: "number",
      description: "Threshold minimum for Fixed Socials",
    },
    hideScrollTop: {
      control: "boolean",
      description: "Hides Scroll Top",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ScrollTopAndSocial>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className="relative h-[1440px] w-full">
        <ScrollTopAndSocial {...args} />
      </div>
    );
  },
};

export const HiddenSocials: Story = {
  args: {
    hideSocial: true,
  },
  render: (args) => {
    return (
      <div className="relative h-[1440px] w-full">
        <ScrollTopAndSocial {...args} />
      </div>
    );
  },
};

export const HiddenScrollTop: Story = {
  args: {
    hideScrollTop: true,
  },
  render: (args) => {
    return (
      <div className="relative h-[1440px] w-full">
        <ScrollTopAndSocial {...args} />
      </div>
    );
  },
};
