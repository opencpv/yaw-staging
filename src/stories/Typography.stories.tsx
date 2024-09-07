import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Typography/h1", // Title for the Storybook sidebar
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const H1: Story = {
  render: (args) => <h1>The lazy fox</h1>,
};

export const H2: Story = {
  render: (args) => <h2>The lazy fox</h2>,
};

export const H3: Story = {
  render: (args) => <h3>The lazy fox</h3>,
};

export const H4: Story = {
  render: (args) => <h4>The lazy fox</h4>,
};

export const H5: Story = {
  render: (args) => <h5>The lazy fox</h5>,
};

export const H6: Story = {
  render: (args) => <h6>The lazy fox</h6>,
};

export const P: Story = {
  render: (args) => <p>The lazy fox</p>,
};

export const Small: Story = {
  render: (args) => <small>The lazy fox</small>,
};
