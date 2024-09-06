import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import FileInput from '../file-input';

const meta: Meta<typeof FileInput> = {
  title: 'Components/Form/FileInput',
  component: FileInput,
  tags: ['autodocs'],
  argTypes: {
    handleFile: { action: 'fileSelected' },
  },
};

export default meta;

type Story = StoryObj<typeof FileInput>;

export const Default: Story = {
  args: {
    label: 'Upload File',
    placeholder: 'Choose a file',
  },
};

export const Required: Story = {
  args: {
    label: 'Upload File',
    required: true,
    placeholder: 'Choose a file',
  },
};

export const WithVariantPrimary: Story = {
  args: {
    label: 'Upload File',
    variant: 'primary',
    placeholder: 'Choose a file',
  },
};

export const WithVariantAccent: Story = {
  args: {
    label: 'Upload File',
    variant: 'accent',
    placeholder: 'Choose a file',
  },
};

export const WithFile: Story = {
  args: {
    label: 'Uploaded File',
    placeholder: 'Choose a file',
    handleFile: (file: File | null) => {
      console.log('File selected:', file);
    },
  },
};
