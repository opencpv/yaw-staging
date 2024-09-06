import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { cn } from '@/lib/utils';
import Loader from '.';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    position: {
      control: {
        type: 'radio',
        options: ['default', 'center'],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {
    className: '',
  },
};

export const Centered: Story = {
  args: {
    className: '',
    position: 'center',
  },
};
