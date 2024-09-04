import { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "./scroll-area";

const meta: Meta<typeof ScrollArea> = {
  title: "Components/ScrollArea", // Title for the Storybook sidebar
  component: ScrollArea,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The orientation of the scroll area",
    },
    children: {},
    className: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: (args) => {
    const items = Array.from({ length: 20 }, (_, i) => i + 1);

    return (
      <ScrollArea {...args}>
        {items?.map((item) => (
          <div
            key={item}
            className="grid place-items-center rounded-md border p-10"
          >
            <span className="text-3xl font-bold">{item}</span>
          </div>
        ))}
      </ScrollArea>
    );
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => {
    const items = Array.from({ length: 20 }, (_, i) => i + 1);

    return (
      <ScrollArea {...args} className="h-96">
        {items?.map((item) => (
          <div
            key={item}
            className="grid place-items-center rounded-md border p-10"
          >
            <span className="text-3xl font-bold">{item}</span>
          </div>
        ))}
      </ScrollArea>
    );
  },
};
