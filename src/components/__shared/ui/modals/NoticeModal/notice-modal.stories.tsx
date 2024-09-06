import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import NoticeModal from ".";
import { getLocalStorageWithExpiry, setLocalStorageWithExpiry } from "@/lib/utils/localStorage";
import { NOTICE_MODAL_TTL } from "@/constants";



const meta: Meta<typeof NoticeModal> = {
  title: "Components/Modals/NoticeModal",
  component: NoticeModal,
  tags: ['autodocs'],

  argTypes: {
    // You can define custom argTypes here if you need to control props or states
  },
};

export default meta;

type Story = StoryObj<typeof NoticeModal>;

// Story for the default open state
export const DefaultOpen: Story = {
  render: () => {
    // mockGetLocalStorageWithExpiry.mockReturnValue(null); // Simulate that the modal should be open
    return <NoticeModal />;
  },
};

// Story for the closed state (if needed)
export const DefaultClosed: Story = {
  render: () => {
    // mockGetLocalStorageWithExpiry.mockReturnValue("0"); // Simulate that the modal should be closed
    return <NoticeModal />;
  },
};
