import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SearchInput from '../search-input';

const meta: Meta<typeof SearchInput> = {
  title: 'Components/Form/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
  argTypes: {
    onEnter: { action: 'entered' },
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    placeholder: 'Search...',
  },
};

export const WithCustomClassName: Story = {
  args: {
    placeholder: 'Search...',
    className: 'border border-primary rounded-lg px-4 py-2',
  },
};
