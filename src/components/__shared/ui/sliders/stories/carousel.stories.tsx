import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Carousel from "../carousel";
import { CarouselProps } from "../types";

const meta: Meta<typeof Carousel> = {
  title: "Components/Sliders/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    nextjs: { appDirectory: true },
  },
  argTypes: {
    images: {
      control: { type: "text" },
      description: "Array of image URLs to display in the carousel.",
      table: {
        type: { summary: "string[]" },
      },
    },
    isCover: {
      control: { type: "boolean" },
      description: "Determines if images should be displayed in cover mode.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    setActiveIndex: { action: "activeIndexChanged" },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

// Helper function to generate images for the stories
const generateImages = (count: number): string[] =>
  Array.from(
    { length: count },
    (_, i) => `https://picsum.photos/800/800?random=${i + 1}`,
  );

// Default story for the Carousel component
export const Default: Story = {
  render: (args: CarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    return <Carousel {...args} setActiveIndex={setActiveIndex} />;
  },
  args: {
    images: generateImages(5), // Provide some default images
    isCover: true,
  },
};

// Story with different image display modes
export const WithContainMode: Story = {
  render: (args: CarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    return <Carousel {...args} setActiveIndex={setActiveIndex} />;
  },
  args: {
    images: generateImages(3),
    isCover: false,
  },
};

// Story with more images
export const WithManyImages: Story = {
  render: (args: CarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    return <Carousel {...args} setActiveIndex={setActiveIndex} />;
  },
  args: {
    images: generateImages(10),
    isCover: true,
  },
};
