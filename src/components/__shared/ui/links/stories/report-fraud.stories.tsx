import { Meta, StoryObj } from "@storybook/react";
import ReportFraud from "../report-fraud";

const meta: Meta<typeof ReportFraud> = {
  title: "Components/Links/ReportFraud",
  component: ReportFraud,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ReportFraud>;

export const Default: Story = {
  args: {
    className: "text-red-500",
  },
};
