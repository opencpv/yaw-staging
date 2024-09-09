import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import SliderMultiItems from "../slider-multi-items";

// Example items to display in the slider
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

const meta: Meta<typeof SliderMultiItems> = {
  title: "Components/Sliders/SliderMultiItems",
  component: SliderMultiItems,
  tags: ["autodocs"],
  argTypes: {
    items: {
      description: "Array of items to display in the slider",
    },
    slidesPerView: {
      description: "Number of slides to view",
    },
    hasNavAndPagination: {
      description: "Show/hide navigation and pagination",
    },
    swiperSlideClassName: {
      description: "Custom class name for SwiperSlide",
    },
    centeredSlides: {
      description: "Center slides",
    },
    spaceBetween: {
      description: "Space between slides",
    },
  },
};

export default meta;

type Story = StoryObj<typeof SliderMultiItems>;

// Default Story
export const Default: Story = {
  args: {
    items,
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
