import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ReportFraud from '../report-fraud';


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

// Stories Configuration
type Story = StoryObj<typeof ReportFraud>;

export const Default: Story = {
  args: {
    className: 'text-blue-500',
    onClick: () => console.log('Link clicked!'),
  },
};
