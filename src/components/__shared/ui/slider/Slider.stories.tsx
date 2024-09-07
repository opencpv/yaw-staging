import { Meta, StoryObj } from "@storybook/react";
import { Slider } from ".";
import React from "react";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider", // Title for the Storybook sidebar
  component: Slider,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "number",
    },
    className: {
      control: "text",
    },
    onValueChange: {
      type: "function",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    value: [50],
    onValueChange: (val) => {},
  },
  render: (args) => {
    const [value, setValue] = React.useState([50]);

    return (
      <Slider
        value={value}
        onValueChange={setValue}
        className={args.className}
      />
    );
  },
};
