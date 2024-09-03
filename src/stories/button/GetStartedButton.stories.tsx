import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import GetStartedButton from "@/components/__shared/ui/button/GetStartedButton";

// Metadata for the GetStartedButton component
const meta: Meta<typeof GetStartedButton> = {
  title: "Components/Buttons/GetStartedButton", // Title for Storybook sidebar
  component: GetStartedButton, // The component to be documented
  tags: ["autodocs"],

  // ArgTypes to control props
  argTypes: {
    className: { control: "text" }, // Allows setting custom classes
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story for the GetStartedButton
export const Default: Story = {
  render: () => {
    // Mocking the Zustand store state manipulation in Storybook environment
    const mockSetToggle = () => console.log("Menu toggled closed");

    // This simulates the Zustand store behavior within Storybook
    const useMenuStoreMock = () => ({ setToggle: mockSetToggle });

    // Override the original store with the mock
    // jest.mock("@/store/navmenu/useMenuStore", () => ({
    //   useMenuStore: useMenuStoreMock,
    // }));

    return (
      <GetStartedButton />
    );
  },
};

// // Custom class story for the GetStartedButton
// export const CustomClass: Story = {
//   args: {
//     className: "bg-blue-500 text-white", // Custom styling to demonstrate different looks
//   },
// };
