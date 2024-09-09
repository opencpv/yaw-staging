import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ReportIssue from "../report-issue";

const meta: Meta<typeof ReportIssue> = {
  title: "Components/Links/ReportIssue",
  component: ReportIssue,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ReportIssue>;

export const Default: Story = {};
