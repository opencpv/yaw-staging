import ButtonCall from "@/components/__shared/ui/button/call-button";
import type { Meta, StoryObj } from "@storybook/react";
import { MdOutlinePhone } from "react-icons/md";

// Define metadata for the ButtonCall component
const meta: Meta<typeof ButtonCall> = {
  title: "Components/Buttons/CallButton", // Title for the Storybook sidebar
  component: ButtonCall,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["primary", "accent", "white", "gradient"],
      },
    },
    iconPosition: {
      control: {
        type: "select",
        options: ["left", "right"],
      },
    },
    phoneNumber: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default button call
export const Default: Story = {
  args: {
    phoneNumber: "+1234567890",
    iconPosition: "left",
  },
};

// Icon position right
export const IconPositionRight: Story = {
  args: {
    phoneNumber: "+1234567890",
    iconPosition: "right",
  },
};

// Custom color
export const CustomColor: Story = {
  args: {
    phoneNumber: "+0987654321",
    color: "primary",
    iconPosition: "left",
  },
};

// You can uncomment and configure additional stories if needed
// Example for a loading state or other variations
// export const Loading: Story = {
//   args: {
//     phoneNumber: '+1234567890',
//     iconPosition: 'left',
//     isLoading: true,
//   },
// };
