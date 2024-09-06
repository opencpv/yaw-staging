import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button/Button";
import SaveSearchModal from "./SaveSearchModal";
import { HiSaveAs } from "react-icons/hi";
import { PiShareFat } from "react-icons/pi";
import { LiaTimesSolid } from "react-icons/lia";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { ActionPopover, ActionItem, ActionItemTrigger, ActionContent } from "@/components/__shared/ui/popover/action-popover";
import { PopupModal } from "../alert-dialog";

const meta: Meta<typeof SaveSearchModal> = {
  title: "Components/Modals/SaveSearchModal",
  component: SaveSearchModal,
  tags: ['autodocs'],

  argTypes: {
    className: {
      description: "Optional CSS class to style the SaveSearchModal.",
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof SaveSearchModal>;

// Default story
export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <div>
        <HiSaveAs
          className="cursor-pointer text-[#21A19F]"
          title="saved search"
          size={20}
          onClick={() => setIsOpen(true)}
        />
        <SaveSearchModal
          {...args}
          isOpen={isOpen}
          onOpenChange={(open) => setIsOpen(open)}
          onClose={() => setIsOpen(false)}
        />
      </div>
    );
  },
  args: {
    className: "",
  },
};

// Story for ModalHeader
export const ModalHeaderStory: Story = {
  render: () => {
    return (
      <div className="p-4">
        <h2>Save search</h2>
      </div>
    );
  },
};

// Story for ModalBody
export const ModalBodyStory: Story = {
  render: () => {
    return (
      <div>
        <h3 className="font-normal text-neutral-500">Provide a search Name</h3>
        <div className="mt-4 grid grid-cols-5 gap-2">
          <input
            type="text"
            className="col-span-5 rounded-sm border p-3 outline-none xs:col-span-4"
            placeholder="Bantama search"
          />
          <Button className="col-span-1">Save</Button>
        </div>
        <div className="mt-8 border-t pt-4">
          <h3 className="font-medium">Your saved searches</h3>
          <div className="mt-4 space-y-9 px-1.5 ssm:space-y-5">
            {[1, 2, 4].map((idx) => (
              <div key={idx} className="grid grid-cols-9 gap-6 ssm:items-center">
                <div className="col-span-5 xs:col-span-6 ssm:col-span-4">
                  <p className="truncate font-medium text-shade-300">
                    Bantama Search One
                  </p>
                  {/* shows only on mobile */}
                  <p className="mt-2 text-shade-200 ssm:hidden">30 Jan, 2024</p>
                </div>
                <p className="col-span-2 hidden text-shade-200 ssm:inline-grid">
                  30 Jan, 2024
                </p>
                <Button
                  variant="outline"
                  color="primary"
                  className="col-span-3 px-1 font-normal xs:col-span-2"
                >
                  Run Search
                </Button>
                <ActionPopover>
                  <ActionItemTrigger className="col-span-1 ml-auto p-2">
                    <BiDotsVerticalRounded />
                  </ActionItemTrigger>
                  <ActionContent className="rounded-md bg-[#fefefe]">
                    <ActionItem onClick={() => { /* handle delete */ }}>
                      Delete
                      <FiTrash2 />
                    </ActionItem>
                  </ActionContent>
                </ActionPopover>
                <PopupModal
                  label="Are you sure you want to delete this saved search?"
                  onClose={() => { /* handle close */ }}
                  isOpen={true}
                  onOpenChange={() => { /* handle open change */ }}
                  handleAction={() => { /* handle action */ }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

// Story for ModalFooter
