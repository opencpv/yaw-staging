import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SelectMobile from '../select-mobile';

const meta: Meta<typeof SelectMobile> = {
  title: 'Components/Form/SelectMobile',
  component: SelectMobile,
  tags: ['autodocs'],
  argTypes: {
    onValueChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof SelectMobile>;

export const Default: Story = {
  args: {
    name: 'example-select',
    value: '',
    options: ['Option 1', 'Option 2', 'Option 3'],
    placeholder: 'Select an option...',
  },
};

export const WithCustomStyles: Story = {
  args: {
    name: 'example-select',
    value: '',
    options: ['Option 1', 'Option 2', 'Option 3'],
    placeholder: 'Select an option...',
    classNames: {
      trigger: 'bg-accent text-white',
    },
  },
};
