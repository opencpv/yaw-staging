import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { PopupModal } from ".";
import { Button } from "../button";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../modals/dialog";

const meta: Meta<typeof PopupModal> = {
  title: "Components/Modals/PopupModal", // Title for the Storybook sidebar
  component: PopupModal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isOpen: {
      control: {
        type: "boolean",
      },
    },
    onOpenChange: {
      type: "function",
    },
    onClose: {
      type: "function",
    },
    onAction: {
      type: "function",
      description:
        "Callback function when the action button <strong>(i.e Yes)</strong> is clicked",
    },
    label: {
      control: {
        type: "text",
      },
    },
    loading: {
      control: {
        type: "boolean",
      },
      description: "Use to indicate loading state of async action",
    },
  },
} satisfies Meta<typeof PopupModal>;

export default meta;

type Story = StoryObj<typeof PopupModal>;

export const Default: Story = {
  args: {
    loading: false,
    label: "Are you sure you want to archive this item?",
    onAction: () => {},
  },
  render: (args) => {
    const { isOpen, onOpenChange, onOpen } = useDisclosure();
    return (
      <>
        <Button onClick={onOpen}>Toggle Modal</Button>
        <PopupModal
          label={args.label}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          onAction={args.onAction}
          loading={args.loading}
        />
      </>
    );
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    label: "Are you sure you want to archive this item?",
    onAction: () => {},
    isOpen: false,
  },
  render: (args) => {
    const { isOpen, onOpenChange, onOpen } = useDisclosure();
    return (
      <>
        <Button onClick={onOpen}>Toggle Modal</Button>
        <PopupModal
          label={args.label}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          onAction={args.onAction}
          loading={args.loading}
        />
      </>
    );
  },
};

/**
 * Use when you need to customize the PopupModal
 */
export const Anatomy: Story = {
  render: () => {
    const { isOpen, onOpenChange, onOpen } = useDisclosure();
    return (
      <>
        <Button onClick={onOpen}>Toggle Modal</Button>
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
          <DialogContent
            className="my-0 p-0"
            hideCloseButton
            onEscapeKeyDown={(e) => e.preventDefault()}
          >
            <DialogHeader className="text-large flex flex-initial flex-col gap-1 px-6 py-4 font-semibold">
              Header
            </DialogHeader>
            <div className="hidden-scrollbar flex h-full flex-1 flex-col justify-center gap-3 overflow-y-auto px-6 py-2">
              This is the body
            </div>
            <DialogFooter className="flex w-full flex-row justify-end space-x-2 border-t px-6 py-4">
              Footer
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    );
  },
};
