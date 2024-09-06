import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ReportIssue from '../report-issue';

/**
 * Navigates to contact us page when clicked
 */

const meta: Meta<typeof ReportIssue> = {
  title: 'Components/Links/ReportIssue',
  component: ReportIssue,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof ReportIssue>;

export const Default: Story = {
  args: {
    className: 'text-blue-500',
  },
};
