import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { LoginButton } from "@/app/login/components/LoginButton";
import { LiaTimesSolid } from "react-icons/lia";
import Image from "next/image";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { action } from "@storybook/addon-actions";
import { Button } from "../button"; // Assuming there's a Button component in your project
import SignInRequiredModal from "./sign-in-required-modal";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";

const meta: Meta<typeof SignInRequiredModal> = {
  title: "Components/Modals/SignInRequiredModal",
  component: SignInRequiredModal,
  tags: ["autodocs"],

  argTypes: {
    open: {
      description: "Whether the modal is open or closed.",
      control: "boolean",
    },
    onOpenChange: {
      description: "Callback when modal open state changes.",
      action: "onOpenChange",
    },
    onClose: {
      description: "Callback for modal close.",
      action: "onClose",
    },
  },
};

export default meta;

type Story = StoryObj<typeof SignInRequiredModal>;

// Default story
export const Default: Story = {
  render: (args) => {
    const { onOpen, isOpen, onOpenChange } = useDisclosure();

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

// Story for ModalBody
export const ModalBodyStory: Story = {
  render: () => {
    const { images } = useAssets(); // Mock the hook if needed

    return (
      <div className="grid md:grid-cols-2">
        <div className="relative h-full w-full max-md:hidden">
          <Image
            src={images.StockImage}
            alt="Room"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex w-full flex-col gap-10 bg-[#FAFAF9] px-10 py-16">
          <div className="space-y-5">
            <div className="flex justify-between">
              <h3>Sign In Required</h3>
              <button>
                <LiaTimesSolid size={16} />
              </button>
            </div>
            <p>Please sign in to continue</p>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6">
            <LoginButton
              text="Continue with Google"
              icon="google"
              className="max-w-full"
            />
            <LoginButton
              text="Continue with Facebook"
              icon="facebook"
              className="max-w-full"
            />
            <LoginButton
              text="Continue with Apple"
              icon="apple"
              className="max-w-full"
            />
          </div>
          <div className="space-y-5">
            <div className="">
              <p className="text-shade-200">
                By signing in, you agree to the following:
              </p>
            </div>
            <div className="flex gap-5">
              {/* <Link href="/terms-of-service"> */}
              <p className="text-neutral-800 underline">Terms of Service</p>
              {/* </Link> */}
              {/* <Link href="/privacy"> */}
              <p className="text-neutral-800 underline">Privacy Policy</p>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    );
  },
};
