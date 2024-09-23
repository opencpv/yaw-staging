import { Meta, StoryObj } from "@storybook/react";
import FileInput from "../file-input";

const meta: Meta<typeof FileInput> = {
  title: "Components/Form/FileInput",
  component: FileInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    handleFile: { action: "fileSelected" },
  },
};

export default meta;

type Story = StoryObj<typeof FileInput>;

export const Default: Story = {};

export const Primary: Story = {};

export const Accent: Story = {
  args: {
    variant: "accent",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Upload Image",
  },
};

export const Required: Story = {
  args: {
    label: "Upload File",
    required: true,
  },
};

export const WithFile: Story = {
  // FIX: Add file
  args: {
    label: "Uploaded File",
    placeholder: "Choose a file",
    handleFile: (file: File | null) => {
      console.log("File selected:", file);
    },
  },
};
