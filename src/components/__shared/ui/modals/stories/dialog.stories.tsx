import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  Modal,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
} from "../dialog";
import { Button } from "@/components/__shared/ui/button/Button";

const meta: Meta = {
  title: "Components/Modals/Modal",
  component: Modal,
  tags: ['autodocs'],

  argTypes: {
    onOpenChange: {
      description: "Callback when modal open state changes.",
      action: "onOpenChange",
    },
    isOpen: {
      description: "Whether the modal is open or closed.",
      control: "boolean",
    },
    body: {
      description: "Content of the modal.",
      control: "text",
    },
    header: {
      description: "Header content of the modal.",
      control: "text",
    },
    footer: {
      description: "Footer content of the modal.",
      control: "text",
    },
    size: {
      description: "Size of the modal.",
      control: {
        type: "select",
        options: ["full", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"],
      },
    },
    closeButton: {
      description: "Custom close button element.",
      control: "text",
    },
    isDismissible: {
      description: "Whether the modal is dismissible.",
      control: "boolean",
    },
    hideCloseButton: {
      description: "Whether to hide the close button.",
      control: "boolean",
    },
    className: {
      description: "Custom class names for styling.",
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

// Default story using the Modal component
export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          header={<DialogTitle>Modal Title</DialogTitle>}
          body={<p>This is the body of the modal.</p>}
          footer={
            <DialogFooter>
              <Button onClick={() => alert("Action clicked")}>Action</Button>
            </DialogFooter>
          }
          closeButton={<Button variant="outline">Close</Button>}
          hideCloseButton={false}
          size="lg"
        >
          <DialogOverlay />
          <DialogContent className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded">
            <DialogHeader>
              <DialogTitle>Modal Title</DialogTitle>
            </DialogHeader>
            <div className="mx-auto w-full">
              <p>This is the content of the modal.</p>
            </div>
            <DialogFooter>
              <Button onClick={() => alert("Action clicked")}>Action</Button>
            </DialogFooter>
          </DialogContent>
        </Modal>
      </div>
    );
  },
};

// Stories for individual components

export const DialogContentStory: Story = {
  render: () => (
    <DialogContent
      className="max-w-md mx-auto p-4 bg-white shadow-lg rounded"
      closeButton={<Button variant="outline">Close</Button>}
      hideCloseButton={false}
    >
      <DialogHeader>
        <DialogTitle>Dialog Title</DialogTitle>
      </DialogHeader>
      <p>This is the content of the dialog.</p>
      <DialogFooter>
        <Button onClick={() => alert("Action clicked")}>Action</Button>
      </DialogFooter>
    </DialogContent>
  ),
};

export const DialogHeaderStory: Story = {
  render: () => (
    <DialogHeader className="p-4 bg-gray-100">
      <DialogTitle>Dialog Header</DialogTitle>
    </DialogHeader>
  ),
};

export const DialogFooterStory: Story = {
  render: () => (
    <DialogFooter className="p-4 bg-gray-100">
      <Button onClick={() => alert("Action clicked")}>Action</Button>
    </DialogFooter>
  ),
};

export const DialogTitleStory: Story = {
  render: () => (
    <DialogTitle className="text-lg font-bold">
      Dialog Title
    </DialogTitle>
  ),
};

export const DialogDescriptionStory: Story = {
  render: () => (
    <DialogDescription className="text-sm text-gray-600">
      This is a description of the dialog. It provides additional context or instructions.
    </DialogDescription>
  ),
};
