import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from ".";

/**
 *A vertically stacked set of interactive headings that each reveal an associated section of content.

 */
const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion", // Title for the Storybook sidebar
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: "text",
    },
    type: {
      control: "select",
      options: ["single", "multiple"],
    },
    collapsible: {
      control: "boolean",
    },
    className: {
      control: "text",
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    defaultValue: "item-1",
    type: "single",
    collapsible: true,
    className: "max-w-xl mx-auto",
  },
  render: (args) => {
    return (
      //@ts-ignore
      <Accordion
        defaultValue={args.defaultValue}
        //@ts-ignore
        collapsible={args.collapsible}
        className={args.className}
        type={args.type}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Item 1 content</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Item 2</AccordionTrigger>
          <AccordionContent>Item 2 content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
};
