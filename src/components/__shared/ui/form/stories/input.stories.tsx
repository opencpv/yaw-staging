import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Input } from '../input';

const meta: Meta<typeof Input> = {
  title: 'Components/Form/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    onBlur: { action: 'blurred' },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Default Input',
    placeholder: 'Enter text',
  },
};

export const WithPrefix: Story = {
  args: {
    label: 'Input with Prefix',
    prefix: '$',
    placeholder: 'Enter amount',
  },
};

export const Required: Story = {
  args: {
    label: 'Required Input',
    required: true,
    placeholder: 'Required field',
  },
};

export const WithTooltip: Story = {
  args: {
    label: 'Input with Tooltip',
    tooltip: 'This is a tooltip',
    placeholder: 'Hover for info',
  },
};

export const WithError: Story = {
  args: {
    label: 'Input with Error',
    placeholder: 'Enter text',
  },
};
