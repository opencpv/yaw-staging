import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import NoticeModal from ".";




const meta: Meta<typeof NoticeModal> = {
  title: "Components/Modals/NoticeModal",
  component: NoticeModal,
  tags: ['autodocs'],

};

export default meta;

type Story = StoryObj<typeof NoticeModal>;

export const DefaultOpen: Story = {
  render: () => {
    return <NoticeModal />;
  },
};

