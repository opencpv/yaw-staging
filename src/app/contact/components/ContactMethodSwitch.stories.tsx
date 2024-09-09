import { Meta, StoryObj } from "@storybook/react";
import Loader from "./forms/ContactMethodSwitch";

const meta: Meta<typeof Loader> = {
  title: "Components/Form/ContactMethodSwitch",
  component: Loader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {};
