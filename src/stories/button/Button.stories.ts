import type { Meta, StoryObj } from '@storybook/react';
import { LuLoader2 } from 'react-icons/lu';
import { Button, LinkButton } from '@/components/__shared/ui/button';

// Define metadata for the Button component
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ["autodocs"],

  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'accent'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['default', 'accent', 'white', 'gradient', 'destructive', 'outline', 'ghost', 'link'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['default', 'sm', 'lg', 'fit', 'full', 'icon'],
      },
    },
    radius: {
      control: {
        type: 'select',
        options: ['default', 'lg', 'full'],
      },
    },
    isLoading: { control: 'boolean' },
    asChild: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default button
export const Default: Story = {
  args: {export const LinkButtonStory: Story = {
    //   component: LinkButton,
    //   args: {
    //     children: 'Go to Google',
    //     href: 'https://www.google.com',
    //     variant: 'link',
    //     color: 'primary',
    //   },
    // };
    children: 'Click Me',
  },
};

// Primary button
export const Primary: Story = {
  args: {
    children: 'Primary Button',

  },
};

// Loading button
export const Loading: Story = {
  args: {
    children: 'Loading...',
    isLoading: true,
  },
};

// export const LinkButtonStory: Story = {
//   component: LinkButton,
//   args: {
//     children: 'Go to Google',
//     href: 'https://www.google.com',
//     variant: 'link',
//     color: 'primary',
//   },
// };
