import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import SliderGrid from "../slider-grid";

const items = [
  <div key="1" className="rounded bg-blue-100 p-4">
    Item 1
  </div>,
  <div key="2" className="rounded bg-green-100 p-4">
    Item 2
  </div>,
  <div key="3" className="rounded bg-red-100 p-4">
    Item 3
  </div>,
  <div key="4" className="rounded bg-yellow-100 p-4">
    Item 4
  </div>,
  <div key="5" className="rounded bg-purple-100 p-4">
    Item 5
  </div>,
  <div key="6" className="rounded bg-pink-100 p-4">
    Item 6
  </div>,
];

const meta: Meta<typeof SliderGrid> = {
  title: "Components/Sliders/SliderGrid",
  component: SliderGrid,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    items: {
      description: "Array of items to display in the slider grid",
    },
  },
};

export default meta;

type Story = StoryObj<typeof SliderGrid>;

export const Default: Story = {
  args: {
    items,
  },
};
