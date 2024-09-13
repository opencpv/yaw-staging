import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { CustomScroll } from "./CustomScroll"; // Adjust the path as necessary

const meta: Meta<typeof CustomScroll> = {
  title: "Components/CustomScroll", // Title for the Storybook sidebar
  component: CustomScroll,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Content inside the scrollable container",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CustomScroll>;

export const Default: Story = {
  render: (args) => (
    <CustomScroll style={{ maxHeight: "200px", width: "300px" }}>
      <div style={{ height: "400px", width: "300px" }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada.
        </p>
        {/* Add more content to enable scrolling */}
      </div>{" "}
    </CustomScroll>
  ),
};
