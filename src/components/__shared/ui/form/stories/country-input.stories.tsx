// CountryInput.stories.tsx

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Formik } from "formik";
import CountryInput from "../country-input";

// Storybook metadata
const meta: Meta<typeof CountryInput> = {
  title: "Components/Form/CountryInput",
  component: CountryInput,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      description: "Placeholder text for the input",
      control: "text",
    },
    label: {
      description: "Label for the input field",
      control: "text",
    },
    initialValue: {
      description: "Initial value of the input field",
      control: "text",
    },
    name: {
      description: "Name attribute for the input",
      control: "text",
    },
    value: {
      description: "Controlled value of the input",
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CountryInput>;

export const Default: Story = {
  args: {
    label: "Country",
    placeholder: "Select your country",
  },
};

export const WithInitialValue: Story = {
  args: {
    label: "Country",
    placeholder: "Select your country",
    initialValue: "United States",
  },
};

export const WithFormik: Story = {
  args: {
    label: "Country",
    placeholder: "Select your country",
    name: "country",
  },
  decorators: [
    (Story) => {
      return (
        <Formik
          initialValues={{ country: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {() => <Story />}
        </Formik>
      );
    },
  ],
};

export const WithErrorState: Story = {
  args: {
    label: "Country",
    placeholder: "Select your country",
    name: "country",
  },
  decorators: [
    (Story) => {
      return (
        <Formik
          initialValues={{ country: "" }}
          validate={(values) => {
            const errors: any = {};
            if (!values.country) {
              errors.country = "Country is required.";
            }
            return errors;
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({ errors, touched }) => (
            <>
              <Story />
              {touched.country && errors.country && (
                <div style={{ color: "red" }}>{errors.country}</div>
              )}
            </>
          )}
        </Formik>
      );
    },
  ],
};

export const Controlled: Story = {
  args: {
    label: "Country",
    placeholder: "Select your country",
    value: "Canada",
  },
};
