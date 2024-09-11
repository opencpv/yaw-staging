import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Form/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'textChanged' },
    onBlur: { action: 'blurred' },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    name: 'textarea',
    label: 'Your Message',
    placeholder: 'Enter your message here',
  },
};

export const WithCharacterLimit: Story = {
  args: {
    name: 'textarea',
    label: 'Your Message',
    placeholder: 'Enter your message here',
    characterLimit: 200,
  },
};

export const Required: Story = {
  args: {
    name: 'textarea',
    label: 'Your Message',
    placeholder: 'Enter your message here',
    required: true,
  },
};

export const WithError: Story = {
  args: {
    name: 'textarea',
    label: 'Your Message',
    placeholder: 'Enter your message here',
    characterLimit: 200,
    // showError: true,
  },
};
