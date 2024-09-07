import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Select } from '../select';

const meta: Meta<typeof Select> = {
  title: 'Components/Form/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    onValueChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Basic: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    placeholder: 'Select an option...',
    value: '',
  },
};
