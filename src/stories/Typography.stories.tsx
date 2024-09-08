import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Typography/Font size", // Title for the Storybook sidebar
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

/**
 * Normal body text with a default size of text-lg (18px). <br/>
 * It recommended to use text-base (16px) for card text.
 */
export const P: Story = {
  render: (args) => <p>The lazy fox</p>,
};

export const P_Card_: Story = {
  render: (args) => (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet odio
        cupiditate praesentium. Unde autem est quod voluptatum aliquam aliquid
        illum maiores, cum iusto blanditiis distinctio aspernatur provident
        quisquam sit fugit.
      </p>
      <div className="mt-5 flex max-w-sm flex-col gap-5 rounded-md p-10 shadow-card">
        <div className="size-20 rounded-full bg-neutral-200" />
        <p className="text-base">
          The quick brown fox jumped over the lazy dog
        </p>
      </div>
    </>
  ),
};

export const Small: Story = {
  render: (args) => <small>The lazy fox</small>,
};
