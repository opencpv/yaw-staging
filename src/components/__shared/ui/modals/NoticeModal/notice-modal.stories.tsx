import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import NoticeModal from ".";
import { getLocalStorageWithExpiry, setLocalStorageWithExpiry } from "@/lib/utils/localStorage";
import { NOTICE_MODAL_TTL } from "@/constants";



const meta: Meta<typeof NoticeModal> = {
  title: "Components/Modals/NoticeModal",
  component: NoticeModal,
  tags: ['autodocs'],

};

export default meta;

type Story = StoryObj<typeof NoticeModal>;

// Story for the default open state
export const DefaultOpen: Story = {
  render: () => {
    return <NoticeModal />;
  },
};

