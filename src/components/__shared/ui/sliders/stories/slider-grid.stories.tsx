// SliderGrid.stories.tsx

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import SliderGrid from "../slider-grid";

// Example items to display in the grid
const items = [
  <div key="1" className="p-4 bg-blue-100 rounded">Item 1</div>,
  <div key="2" className="p-4 bg-green-100 rounded">Item 2</div>,
  <div key="3" className="p-4 bg-red-100 rounded">Item 3</div>,
  <div key="4" className="p-4 bg-yellow-100 rounded">Item 4</div>,
  <div key="5" className="p-4 bg-purple-100 rounded">Item 5</div>,
  <div key="6" className="p-4 bg-pink-100 rounded">Item 6</div>,
];

const meta: Meta<typeof SliderGrid> = {
  title: "Components/Sliders/SliderGrid",
  component: SliderGrid,
  tags: ['autodocs'],

  argTypes: {
    items: {
      description: "Array of items to display in the slider grid",
    //   control: { type: "array" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SliderGrid>;

// Default Story
export const Default: Story = {
  args: {
    items,
  },
};

// Responsive View Story
export const Responsive: Story = {
  args: {
    items,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile2", // Set the viewport to a mobile size for responsive testing
    },
  },
};

// Story with Fewer Items
export const FewItems: Story = {
  args: {
    items: items.slice(0, 2), // Pass only two items
  },
};

// Story with Many Items
export const ManyItems: Story = {
  args: {
    items: [
      ...items,
      ...items, // Duplicate items to create a larger grid
    ],
  },
};
