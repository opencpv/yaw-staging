import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { E164Number } from 'libphonenumber-js/core';
import PhoneNumberInput from '../phone-number-input';

const meta: Meta<typeof PhoneNumberInput> = {
  title: 'Components/Form/PhoneNumberInput',
  component: PhoneNumberInput,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'valueChanged' },
    onCountryChange: { action: 'countryChanged' },
    onBlur: { action: 'blurred' },
  },
};

export default meta;

type Story = StoryObj<typeof PhoneNumberInput>;

export const Default: Story = {
  args: {
    name: 'phoneNumber',
    placeholder: 'Enter phone number',
  },
};

export const WithValue: Story = {
  args: {
    name: 'phoneNumber',
    value: '+233123456789' as E164Number,
    placeholder: 'Enter phone number',
  },
};

export const Required: Story = {
  args: {
    name: 'phoneNumber',
    required: true,
    placeholder: 'Enter phone number',
  },
};

export const WithError: Story = {
  args: {
    name: 'phoneNumber',
    showError: true,
    placeholder: 'Enter phone number',
  },
};
