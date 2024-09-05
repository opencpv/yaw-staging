import { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./separator";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator", // Title for the Storybook sidebar
  component: Separator,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "white"],
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    decorative: {
      control: "boolean",
      description:
        "When true, signifies that it is purely visual, carries no semantic meaning, and ensures it is not present in the accessibility tree.",
    },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  args: {
    className: "my-4",
  },
  render: (args) => {
    return (
      <div className="mx-auto max-w-3xl">
        <p className="text-sm">An open-source UI component library.</p>
        <div className="h-20">
          <Separator {...args} />
        </div>
      </div>
    );
  },
};

export const Horizontal: Story = {};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    className: "h-60",
  },
  render: (args) => <Separator {...args} />,
};

export const White: Story = {
  args: {
    ...Vertical.args,
    color: "white",
  },
  render: (args) => (
    <div className="h-40 w-full bg-primary">
      <Separator {...args} />
    </div>
  ),
};
