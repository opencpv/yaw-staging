import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Thumbs from "./thumbs";
import { Formik } from "formik";

const meta: Meta<typeof Thumbs> = {
  title: "Components/Feedback/Thumbs",
  component: Thumbs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Thumbs>;

export const Default: Story = {
  render: (args) => {
    const [thumbsUpChecked, setThumbsUpChecked] = useState(false);
    const [thumbsDownChecked, setThumbsDownChecked] = useState(false);

    const handleThumbsUpChecked = () => {
      setThumbsUpChecked(!thumbsUpChecked);
      setThumbsDownChecked(false);
    };
    const handleThumbsDownChecked = () => {
      setThumbsDownChecked(!thumbsDownChecked);
      setThumbsUpChecked(false);
    };

    return (
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Thumbs
          {...args}
          thumbsUpChecked={thumbsUpChecked}
          thumbsDownChecked={thumbsDownChecked}
          handleThumbsUpChecked={handleThumbsUpChecked}
          handleThumbsDownChecked={handleThumbsDownChecked}
        />
      </Formik>
    );
  },
  args: {
    name: "value_c",
  },
};

/**
 * Not used in Formik context
 */
export const ThumbsUpChecked: Story = {
  ...Default.render,
  render: (args) => {
    const [thumbsUpChecked, setThumbsUpChecked] = useState(true);
    const [thumbsDownChecked, setThumbsDownChecked] = useState(false);

    const handleThumbsUpChecked = () => {
      setThumbsUpChecked(!thumbsUpChecked);
      setThumbsDownChecked(false);
    };
    const handleThumbsDownChecked = () => {
      setThumbsDownChecked(!thumbsDownChecked);
      setThumbsUpChecked(false);
    };

    return (
      <Thumbs
        {...args}
        thumbsUpChecked={thumbsUpChecked}
        thumbsDownChecked={thumbsDownChecked}
        handleThumbsUpChecked={handleThumbsUpChecked}
        handleThumbsDownChecked={handleThumbsDownChecked}
      />
    );
  },
};

export const ThumbsDownChecked: Story = {
  render: (args) => {
    const [thumbsUpChecked, setThumbsUpChecked] = useState(false);
    const [thumbsDownChecked, setThumbsDownChecked] = useState(true);

    const handleThumbsUpChecked = () => {
      setThumbsUpChecked(!thumbsUpChecked);
      setThumbsDownChecked(false);
    };
    const handleThumbsDownChecked = () => {
      setThumbsDownChecked(!thumbsDownChecked);
      setThumbsUpChecked(false);
    };

    return (
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Thumbs
          {...args}
          thumbsUpChecked={thumbsUpChecked}
          thumbsDownChecked={thumbsDownChecked}
          handleThumbsUpChecked={handleThumbsUpChecked}
          handleThumbsDownChecked={handleThumbsDownChecked}
        />
      </Formik>
    );
  },
  args: {
    ...Default.args,
  },
};
