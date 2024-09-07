import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SubscribeForm from '../SubscribeForm';

const meta: Meta<typeof SubscribeForm> = {
  title: 'Components/Form/SubscribeForm',
  component: SubscribeForm,
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'submitted' },
  },
};

export default meta;

type Story = StoryObj<typeof SubscribeForm>;

export const Default: Story = {
  args: {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
      console.log('Form submitted:', e);
    },
  },
};
