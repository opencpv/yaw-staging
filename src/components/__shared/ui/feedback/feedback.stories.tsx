import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Feedback from "./Feedback";
import { Button } from "../button/Button"; // Adjust import path based on your structure
import { Form, Formik } from "formik";

const meta: Meta<typeof Feedback> = {
  title: "Components/Feedback/Feedback",
  component: Feedback,
  tags: ["autodocs"],

  parameters: {
    layout: "centered", // Center the component in the preview
  },
};

export default meta;

type Story = StoryObj<typeof Feedback>;

export const Default: Story = {
  args: {
    children: (
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <Button>Give Feedback</Button>
        </Form>
      </Formik>
    ),
    data: {
      userId: 123,
      feedback: "This is a sample feedback.",
    }, // Provide sample data for the `data` prop
  },
};

export const CustomView: Story = {
  args: {
    children: (
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <Button>Provide Your Feedback</Button>
        </Form>
      </Formik>
    ),
    data: {
      userId: 456,
      feedback: "Here's some additional feedback.",
      additionalInfo: "Additional details here",
    }, // Customize `data` for different scenarios
  },
};
