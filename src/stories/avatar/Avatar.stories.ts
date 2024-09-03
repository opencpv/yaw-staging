import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Avatar from "../../components/__shared/ui/avatar/Avatar";

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
  //   args: { onClick: fn() }, // Spy for any onClick handler (if applicable)
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

// Avatar with an image
export const WithImage: Story = {
  args: {
    image: userImage,
    name: "John Doe",
    size: "lg",
    display: true,
    title: "John Doe Avatar",
  },
};

// Small size avatar
export const SmallSize: Story = {
  args: {
    image: userImage,
    name: "Jane Doe",
    size: "sm",
    display: true,
    title: "Jane Doe Avatar",
  },
};

// Avatar with only initials displayed
export const NoImage: Story = {
  args: {
    image: "",
    name: "Anonymous",
    size: "lg",
    display: false,
    title: "No Image Avatar",
  },
};
