import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/__shared/ui/button/Button";
import StepsModal from "./steps-modal";

const meta: Meta<typeof StepsModal> = {
  title: "Components/Modals/StepsModal",
  component: StepsModal,
  tags: ['autodocs'],

  argTypes: {
    open: {
      description: "Controls whether the modal is open.",
      control: "boolean",
    },
    header: {
      description: "Content for the modal header.",
      control: "text",
    },
    body: {
      description: "Content for the modal body.",
      control: "text",
    },
    footer: {
      description: "Content for the modal footer.",
      control: "text",
    },
    classNames: {
      description: "Custom class names for styling.",
      control: "object",
    },
    onOpenChange: {
      description: "Callback function for when the modal's open state changes.",
      action: "onOpenChange",
    },
  },
};

export default meta;

type Story = StoryObj<typeof StepsModal>;

// Story for the default open state
export const DefaultOpen: Story = {
  render: () => {
    const [open, setOpen] = useState(true);

    const handleOpenChange = (open: boolean) => {
      setOpen(open);
    };

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <StepsModal
          open={open}
          onOpenChange={handleOpenChange}
          header={<h2>Modal Header</h2>}
          body={<p>This is the modal body content.</p>}
          footer={
            <div>
              <Button onClick={() => setOpen(false)}>Close</Button>
            </div>
          }
        />
      </>
    );
  },
};

// Story for the closed state
export const DefaultClosed: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleOpenChange = (open: boolean) => {
      setOpen(open);
    };

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <StepsModal
          open={open}
          onOpenChange={handleOpenChange}
          header={<h2>Modal Header</h2>}
          body={<p>This is the modal body content.</p>}
          footer={
            <div>
              <Button onClick={() => setOpen(false)}>Close</Button>
            </div>
          }
        />
      </>
    );
  },
};

// Story with custom class names
export const WithCustomStyles: Story = {
  render: () => {
    const [open, setOpen] = useState(true);

    const handleOpenChange = (open: boolean) => {
      setOpen(open);
    };

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <StepsModal
          open={open}
          onOpenChange={handleOpenChange}
          header={<h2 className="text-blue-500">Custom Header</h2>}
          body={<p className="text-gray-700">This is the body with custom styles.</p>}
          footer={
            <div className="flex justify-end">
              <Button onClick={() => setOpen(false)} variant="outline" className="mr-2">Close</Button>
            </div>
          }
          classNames={{
            footer: "bg-gray-100",
          }}
        />
      </>
    );
  },
};
