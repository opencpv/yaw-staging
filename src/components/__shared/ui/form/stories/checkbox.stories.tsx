// Checkbox.stories.tsx

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../checkbox";

// Storybook metadata
const meta: Meta<typeof Checkbox> = {
  title: "Components/Form/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    color: {
      description: "Color variant of the checkbox",
      control: {
        type: "select",
        options: ["accent", "primary", "white"],
      },
    },
    radius: {
      description: "Border radius of the checkbox",
      control: {
        type: "select",
        options: ["default", "md"],
      },
    },
    disabled: {
      description: "Disables the checkbox if set to true",
      control: "boolean",
    },
    label: {
      description: "Text label for the checkbox",
      control: "text",
    },
    classNames: {
      description: "Custom class names for styling",
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

// Default Checkbox Story
export const Default: Story = {
  args: {
    label: "Default Checkbox",
    color: "primary",
    disabled: false,
  },
};

// Accent Checkbox Story
export const AccentColor: Story = {
  args: {
    label: "Accent Color Checkbox",
    color: "accent",
  },
};

// White Color Checkbox Story
export const WhiteColor: Story = {
  args: {
    label: "White Color Checkbox",
    color: "white",
  },
};

// Disabled Checkbox Story
export const Disabled: Story = {
  args: {
    label: "Disabled Checkbox",
    color: "primary",
    disabled: true,
  },
};

// Checkbox with Rounded Corners
export const RoundedCheckbox: Story = {
  args: {
    label: "Rounded Checkbox",
    color: "primary",
    radius: "md",
  },
};

// Checkbox with Formik Integration
export const WithFormik: Story = {
  args: {
    label: "Formik Checkbox",
    color: "primary",
    name: "formikCheckbox",
  },
  decorators: [
    (Story) => {
      // Formik decorator to provide context
      const { Formik } = require("formik");

      return (
        <Formik
          initialValues={{ formikCheckbox: false }}
          onSubmit={(values: any) => console.log(values)}
        >
          {() => <Story />}
        </Formik>
      );
    },
  ],
};
