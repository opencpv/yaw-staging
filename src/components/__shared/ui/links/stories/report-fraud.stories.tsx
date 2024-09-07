import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ReportFraud from '../report-fraud';

/**
 * Navigates to contact us page when clicked
 */
const meta: Meta<typeof ReportFraud> = {
  title: 'Components/Links/ReportFraud',
  component: ReportFraud,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof ReportFraud>;

export const Default: Story = {
  args: {
    className: 'text-blue-500',
    onClick: () => console.log('Link clicked!'),
  },
};
