import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Avatar from "./Avatar";

const userImage = "/assets/images/profile-image.jpg"; // Example static image

// Meta configuration for Storybook
const meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    image: { control: "text" },
    name: { control: "text" },
    email: { control: "text" },
    size: {
      control: { type: "radio" },
      options: ["sm", "lg"],
    },
    display: { control: "boolean" },
    title: { control: "text" },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default avatar with no image
export const Default: Story = {
  args: {
    image: userImage,
    name: "John Doe",
    display: false,
    size: "sm",
    className: "",
    title: "Default Avatar",
  },
};

export const WithImage: Story = {
  args: {
    image: userImage,
    name: "John Doe",
    size: "lg",
    display: true,
    title: "John Doe Avatar",
  },
};

export const SmallSize: Story = {
  args: {
    image: userImage,
    name: "Jane Doe",
    size: "sm",
    display: true,
    title: "Jane Doe Avatar",
  },
};

export const NoImage: Story = {
  args: {
    image: "",
    name: "Anonymous",
    size: "lg",
    display: false,
    title: "No Image Avatar",
  },
};
