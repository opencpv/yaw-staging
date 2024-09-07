import { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from ".";
import React from "react";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs", // Title for the Storybook sidebar
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    options: {
      control: "object",
    },
    variant: {
      control: "select",
      options: ["default", "rounded"],
    },
    size: {
      control: "select",
      options: ["sm", "md"],
    },
    selectedKey: {
      control: "text",
    },
    children: {
      control: "object",
      description: "Use when options are <strong>NOT</strong> provided",
    },
    onSelectionChange: {
      type: "function",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    options: ["All", "Paid", "Pending"],
    selectedKey: "All",
    onSelectionChange: () => {},
  },
};

export const Rounded: Story = {
  args: {
    ...Default.args,
    variant: "rounded",
  },
};

export const MediumSize: Story = {
  args: {
    ...Default.args,
    size: "md",
  },
};

/**
 * It is better suited for displaying pages.
 * OR when you need to customize the tabs.
 */
export const Anatomy: Story = {
  render: (args) => {
    return (
      <Tabs defaultValue="properties">
        <TabsList>
          <TabsTrigger size="md" variant="rounded" value="properties">
            Properties
          </TabsTrigger>
          <TabsTrigger size="md" variant="rounded" value="property owners">
            Property Owners
          </TabsTrigger>
          <TabsTrigger size="md" variant="rounded" value="service pros">
            Service Pros
          </TabsTrigger>
        </TabsList>
        <TabsContent value="properties">Properties page</TabsContent>
        <TabsContent value="property owners">Property owners</TabsContent>
        <TabsContent value="service pros">Service pros</TabsContent>
      </Tabs>
    );
  },
};
