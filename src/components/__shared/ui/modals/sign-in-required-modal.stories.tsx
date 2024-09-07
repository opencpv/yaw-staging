import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button"; // Assuming there's a Button component in your project
import SignInRequiredModal from "./sign-in-required-modal";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";

const meta: Meta<typeof SignInRequiredModal> = {
  title: "Components/Modals/SignInRequiredModal",
  component: SignInRequiredModal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    open: {
      description: "Whether the modal is open or closed.",
    },
    onOpenChange: {
      description: "Callback when modal open state changes.",
    },
    onClose: {
      description: "Callback for modal close.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof SignInRequiredModal>;

// Default story
export const Default: Story = {
  render: (args) => {
    const { isOpen, onOpenChange } = useDisclosure();

    return (
      <div>
        <Button onClick={() => onOpenChange(true)}>Open Sign-In Modal</Button>
        <SignInRequiredModal
          {...args}
          open={isOpen}
          onOpenChange={(open) => onOpenChange(open)}
          onClose={() => onOpenChange(false)}
        />
      </div>
    );
  },
  args: {
    open: true,
  },
};
