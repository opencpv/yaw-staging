import { Meta, StoryObj } from "@storybook/react";
import Separator from "./separator";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator", // Title for the Storybook sidebar
  component: Separator,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "white", "transparent"],
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  args: {
    color: "primary",
    orientation: "vertical",
    className: "min-h-[360px]",
  },
};

export const Primary: Story = {
  args: {
    ...Default.args,
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    color: "secondary",
  },
};

export const White: Story = {
  args: {
    ...Default.args,
    color: "white",
  },
  render: (args) => (
    <div className="h-full w-full bg-primary">
      <Separator {...args} />
    </div>
  ),
};

export const Horizontal: Story = {
  args: {
    ...Default.args,
    orientation: "horizontal",
  },
};
