import { Meta, StoryObj } from "@storybook/react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import React from "react";

const meta: Meta<typeof Command> = {
  title: "Components/Command", // Title for the Storybook sidebar
  component: Command,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onValueChange: {
      type: "function",
    },
    children: {
      control: "object",
    },
    className: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Command>;

export const Default: Story = {
  args: {
    onValueChange: () => {},
    className: "max-h-[200px] w-full",
  },
  render: (args) => {
    const countryData = [
      {
        value: "Afghanistan",
        label: "Afghanistan",
      },
      {
        value: "Albania",
        label: "Albania",
      },
      {
        value: "Ghana",
        label: "Ghana",
      },
    ];
    return (
      <Command onValueChange={args.onValueChange} className={args.className}>
        <CommandInput
          className="focus:outline-none"
          placeholder="Search data..."
        />
        <CommandList>
          <CommandEmpty>No data found.</CommandEmpty>
          <CommandGroup>
            {countryData?.map((data) => (
              <CommandItem key={data?.value} onSelect={() => {}}>
                {data?.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    );
  },
};
