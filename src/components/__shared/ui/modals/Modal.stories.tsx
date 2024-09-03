import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/__shared/ui/button/Button";
import { Modal } from "@/components/__shared/ui/modals/dialog";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onOpenChange: { action: "openChange" },
    isOpen: { control: "boolean" },
    header: { control: "text" },
    body: { control: "text" },
    footer: { control: "text" },
    size: {
      control: {
        type: "select",
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
    },
    closeButton: { control: "text" },
    isDismissible: { control: "boolean" },
    scrollBehavior: {
      control: {
        type: "select",
        options: ["inside", "outside"],
      },
    },
    hideCloseButton: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="text-black">
        <Modal
          isOpen={open}
          onOpenChange={setOpen}
          header={<p className="text-black">Header</p>}
          body={<p className="text-black">This is the body of the modal.</p>}
          footer={<div className="text-black">Footer Content</div>}
          size="md"
          closeButton="Close"
          isDismissible={true}
          scrollBehavior="inside"
          hideCloseButton={false}
        />
        <Button onClick={() => setOpen((prev) => !prev)}>Toggle Modal</Button>
      </div>
    );
  },
};

// Large size modal
export const LargeModal: Story = {

  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="text-black">
        <Modal
          isOpen={open}
          onOpenChange={setOpen}
          header={<p className="text-black">Header</p>}
          body={<p className="text-black">This is the body of the modal.</p>}
          footer={<div className="text-black">Footer Content</div>}
          size="lg"
          closeButton="Close"
          isDismissible={true}
          scrollBehavior="inside"
          hideCloseButton={false}
        />
        <Button onClick={() => setOpen((prev) => !prev)}>Toggle Modal</Button>
      </div>
    );
  },
};

// Full-screen modal
export const FullScreenModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="text-black">
        <Modal
          isOpen={open}
          onOpenChange={setOpen}
          header={<p className="text-black">Full Screen Modal header</p>}
          body={<p className="text-black">This is the body of the modal.</p>}
          footer={<div className="text-black">Footer Content</div>}
          size="full"
          closeButton="Close"
          isDismissible={true}
          scrollBehavior="inside"
          hideCloseButton={false}
        />
        <Button onClick={() => setOpen((prev) => !prev)}>Toggle Modal</Button>
      </div>
    );
  },
};

// Modal with custom close button
export const CustomCloseButton: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="text-black">
        <Modal
          isOpen={open}
          onOpenChange={setOpen}
          header={<p className="text-black">Header</p>}
          body={<p className="text-black">This is the body of the modal.</p>}
          footer={<div className="text-black">Footer Content</div>}
          size="md"
          closeButton={<span>Custom Close</span>}
          isDismissible={true}
          scrollBehavior="inside"
          hideCloseButton={false}
        />
        <Button onClick={() => setOpen((prev) => !prev)}>Toggle Modal</Button>
      </div>
    );
  },
};
