// SliderMultiItems.stories.tsx

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import SliderMultiItems from "../slider-multi-items";

// Example items to display in the slider
const items = [
  <div key="1" className="p-4 bg-blue-100 rounded">Item 1</div>,
  <div key="2" className="p-4 bg-green-100 rounded">Item 2</div>,
  <div key="3" className="p-4 bg-red-100 rounded">Item 3</div>,
  <div key="4" className="p-4 bg-yellow-100 rounded">Item 4</div>,
  <div key="5" className="p-4 bg-purple-100 rounded">Item 5</div>,
  <div key="6" className="p-4 bg-pink-100 rounded">Item 6</div>,
];

const meta: Meta<typeof SliderMultiItems> = {
  title: "Components/Sliders/SliderMultiItems",
  component: SliderMultiItems,
  tags: ['autodocs'],

  argTypes: {
    items: {
      description: "Array of items to display in the slider",
      control: { type: "text" },
    },
    slidesPerView: {
      description: "Number of slides to view",
      control: { type: "number" },
    },
    hasNavAndPagination: {
      description: "Show/hide navigation and pagination",
      control: { type: "boolean" },
    },
    autoplay: {
      description: "Enable/disable autoplay",
      control: { type: "boolean" },
    },
    swiperSlideClassName: {
      description: "Custom class name for SwiperSlide",
      control: { type: "text" },
    },
    centeredSlides: {
      description: "Center slides",
      control: { type: "boolean" },
    },
    spaceBetween: {
      description: "Space between slides",
      control: { type: "number" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SliderMultiItems>;

// Default Story
export const Default: Story = {
  args: {
    items,
    slidesPerView: 1.5,
    hasNavAndPagination: true,
    autoplay: false,
    swiperSlideClassName: "p-4",
    centeredSlides: true,
    spaceBetween: 15,
  },
};

// Without Autoplay
export const Autoplay: Story = {
  args: {
    ...Default.args,
    autoplay: true,
  },
};

// Fewer Items
export const FewItems: Story = {
  args: {
    ...Default.args,
    items: items.slice(0, 2),
  },
};

// Custom Breakpoints
export const CustomBreakpoints: Story = {
  args: {
    ...Default.args,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  },
};
