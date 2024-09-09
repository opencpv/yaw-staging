import { Meta, StoryObj } from "@storybook/react";
import { RangeSlider } from ".";
import React from "react";

const meta: Meta<typeof RangeSlider> = {
  title: "Components/RangeSlider", // Title for the Storybook sidebar
  component: RangeSlider,
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

type Story = StoryObj<typeof RangeSlider>;

export const Default: Story = {
  args: {
    value: [50],
    onValueChange: (val) => {},
  },
  render: (args) => {
    const [value, setValue] = React.useState([50]);

    return (
      <RangeSlider
        value={value}
        onValueChange={setValue}
        className={args.className}
      />
    );
  },
};
