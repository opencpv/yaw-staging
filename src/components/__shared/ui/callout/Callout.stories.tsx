import { Meta, StoryObj } from "@storybook/react";
import Callout from ".";
import { LinkButton } from "../button";

const meta: Meta<typeof Callout> = {
  title: "Components/Callout", // Title for the Storybook sidebar
  component: Callout,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: "text",
      description: "The heading of the callout",
    },
    content: {
      control: "text",
      description: "The description of the callout",
    },
    children: {
      control: "object",
      description:
        "The children of the callout when content is <strong>NOT</strong> provided. <br/> Note: font size should be `small` i.e: small tag, text-sm",
    },
    className: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Callout>;

export const Default: Story = {
  args: {
    content: "You may select more than one response",
  },
};

export const WithTitle: Story = {
  args: {
    title: "Callout Title",
    content: "You may select more than one response",
  },
};

/**
 *Font size should be `small` i.e: small tag, text-sm
 */
export const WithChildren: Story = {
  render: (args) => (
    <Callout>
      Upgrade now to unlock this exclusive feature and supercharge your renting
      experience
      <br />
      <LinkButton
        size={"fit"}
        href="#"
        variant={"link"}
        className="text-sm text-info"
      >
        Learn more
      </LinkButton>
    </Callout>
  ),
};
