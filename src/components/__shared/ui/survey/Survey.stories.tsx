import { Meta, StoryObj } from "@storybook/react";
import Survey from ".";

const meta: Meta<typeof Survey> = {
  title: "Components/Survey", // Title for the Storybook sidebar
  component: Survey,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Survey>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className="relative h-[900px] w-full">
        <Survey />
      </div>
    );
  },
};
