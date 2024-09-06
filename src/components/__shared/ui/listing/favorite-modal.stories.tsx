import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import FavoriteModal from "./FavoriteModal";
import { Button } from "../button/Button";
import { useSessionStorage } from "@uidotdev/usehooks";
import { MdOutlineChat } from "react-icons/md";
import toast from "react-hot-toast";

// Mock useAppStore for story
const mockUseAppStore = () => ({
  user: { id: "mockUserId" },
});

const meta: Meta<typeof FavoriteModal> = {
  title: "Components/Listing/FavoriteModal",
  tags: ['autodocs'],

  component: FavoriteModal,
  argTypes: {
    isOpen: {
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

type Story = StoryObj<typeof FavoriteModal>;

// Default story
export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Open Favorite Modal</Button>
        <FavoriteModal
          {...args}
          isOpen={isOpen}
          onOpenChange={(open) => setIsOpen(open)}
          onClose={() => setIsOpen(false)}
        />
      </div>
    );
  },
  args: {
    isOpen: true,
  },
};

// Story for ModalHeader
export const ModalHeaderStory: Story = {
  render: () => {
    const [isLoading, setIsLoading] = useState(false);
    const [shouldOpenModal, setShouldOpenModal] = useSessionStorage<boolean>("shouldOpenModal", true);
    const contactUponFavorite = useSessionStorage("contactUponFavorite", true);

    const handleSaveFavoriteOption = () => {
      toast(
        contactUponFavorite
          ? "👍 Great choice! We've noted that you're open to being contacted by your property owners. Expect to hear from them soon!"
          : "Noted! Your preference for privacy is important to us. Your property owners will not contact you unless necessary.",
      );
    };

    return (
      <div className="flex flex-wrap items-center justify-between gap-5">
        <MdOutlineChat className="shrink-0 text-xl text-primary-200 md:text-4xl" />
        <Button
          variant="outline"
          size="sm"
          radius="full"
          className="border-black text-sm hover:bg-[#E7F8F2]"
          isLoading={isLoading}
          onClick={async () => {
            setIsLoading(true);
            // const { error } = await handleFavoriteDialogSave(
            //   "mockUserId",
            //   contactUponFavorite ? true : false,
            // );
            // if (error) {
            //   toast.error(error.message);
            //   setIsLoading(false);
            //   return;
            // }
            setIsLoading(false);
            handleSaveFavoriteOption();
            setShouldOpenModal(!shouldOpenModal);
            localStorage.removeItem("shouldOpenModal");
          }}
        >
          Save
        </Button>
      </div>
    );
  },
};

// Story for ModalBody
export const ModalBodyStory: Story = {
  render: () => (
    <p className="font-[600] text-primary-200">
      Do you want property owners to contact you when you favorite a home?
    </p>
  ),
};

// Story for ModalFooter
export const ModalFooterStory: Story = {
  render: () => {
    const [contactUponFavorite, setContactUponFavorite] = useSessionStorage("contactUponFavorite", true);

    return (
      <div className="flex w-full items-center justify-end gap-2">
        <Button
          variant={!contactUponFavorite ? "default" : "outline"}
          color="gradient"
          className="py-6"
          onClick={() => setContactUponFavorite(false)}
        >
          No
        </Button>
        <Button
          variant={contactUponFavorite ? "default" : "outline"}
          color="gradient"
          className="py-6"
          onClick={() => setContactUponFavorite(true)}
        >
          Yes
        </Button>
      </div>
    );
  },
};
