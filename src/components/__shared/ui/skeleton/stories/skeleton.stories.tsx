import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "..";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeletons/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: (args) => (
    <Skeleton {...args}>
      <div>
        <p>This content is hidden by the Skeleton loader.</p>
        <p>This content is hidden by the Skeleton loader.</p>
        <p>This content is hidden by the Skeleton loader.</p>
        <p>This content is hidden by the Skeleton loader.</p>
        <p>This content is hidden by the Skeleton loader.</p>
        <p>This content is hidden by the Skeleton loader.</p>
        <p>This content is hidden by the Skeleton loader.</p>
        <p>This content is hidden by the Skeleton loader.</p>
      </div>
    </Skeleton>
  ),
};

/**
 * The skeleton takes the shape of its content by default.
 */
export const ShapeOfContent: Story = {
  render: (args) => (
    // Example 1
    <div className="flex gap-5">
      <Skeleton {...args} className="aspect-square h-fit rounded-full">
        <p>Lorem, ip</p>
        <p>Lorem, ip</p>
      </Skeleton>
      <div className="flex flex-col gap-3">
        <Skeleton {...args}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </Skeleton>
        <Skeleton {...args}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </Skeleton>
        <Skeleton {...args}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </Skeleton>
      </div>
    </div>
  ),
};

// Story with custom width and height
export const FixedDimension: Story = {
  render: (args) => (
    <div className="flex gap-5">
      <Skeleton {...args} className="size-12 rounded-full" />
      <div className="flex flex-col gap-3">
        <Skeleton {...args} className="h-6 w-80" />
        <Skeleton {...args} className="h-6 w-80" />
        <Skeleton {...args} className="h-6 w-80" />
      </div>
    </div>
  ),
};
