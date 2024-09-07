import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  Modal,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogPortal,
  Dialog,
} from "../dialog";
import { Button } from "@/components/__shared/ui/button";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";

const meta: Meta = {
  title: "Components/Modals/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onOpenChange: {
      description: "Callback when modal open state changes.",
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
      control: "select",
      options: [
        "full",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
      ],
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

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          {...args}
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          header={<DialogTitle>Modal Title</DialogTitle>}
          body={<p>This is the body of the modal.</p>}
          footer={
            <Button onClick={() => alert("Action clicked")}>Action</Button>
          }
          hideCloseButton={false}
          size="lg"
        />
      </div>
    );
  },
};

export const Anatomy: Story = {
  render: (args) => {
    const { isOpen, onOpenChange } = useDisclosure();

    return (
      <>
        <Button onClick={() => onOpenChange(true)}>Open Modal</Button>

        <Dialog {...args} open={isOpen} onOpenChange={onOpenChange}>
          <DialogPortal>
            <DialogContent
              className="mx-auto max-w-md rounded bg-white p-4 shadow-lg"
              closeButton={
                <Button variant="outline" size={"sm"}>
                  Close
                </Button>
              }
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
          </DialogPortal>
        </Dialog>
      </>
    );
  },
};
