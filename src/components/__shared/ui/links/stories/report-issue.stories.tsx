import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ReportIssue from '../report-issue';



const meta: Meta<typeof ReportIssue> = {
  title: 'Components/Links/ReportIssue',
  component: ReportIssue,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;

// Stories Configuration
type Story = StoryObj<typeof ReportIssue>;

export const Default: Story = {
  args: {
    className: 'text-blue-500',
  },
};
