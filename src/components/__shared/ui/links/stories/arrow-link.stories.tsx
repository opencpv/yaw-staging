import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ArrowLink from '../arrow-link';

const meta: Meta<typeof ArrowLink> = {
  title: 'Components/Links/ArrowLink',
  component: ArrowLink,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
    arrowPosition: { control: 'radio', options: ['left', 'right'] },
    href: { control: 'text' },
    hideText: { control: 'boolean' },
    className: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

export default meta;

// Stories Configuration
type Story = StoryObj<typeof ArrowLink>;

export const Default: Story = {
  args: {
    text: 'Click Me',
    href: '#',
    arrowPosition: 'right',
    color: '#222',
    hideText: false,
  },
};

export const LeftArrow: Story = {
  args: {
    text: 'Go Back',
    href: '#',
    arrowPosition: 'left',
    color: '#0056b3',
  },
};

export const NoText: Story = {
  args: {
    href: '#',
    arrowPosition: 'right',
    hideText: true,
    color: '#FF5733',
  },
};
