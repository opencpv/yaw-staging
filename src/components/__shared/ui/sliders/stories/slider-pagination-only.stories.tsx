import { Meta, StoryObj } from "@storybook/react";
import SliderPaginationOnly from "../slider-pagination-only";

const meta: Meta<typeof SliderPaginationOnly> = {
  title: "Components/Sliders/SliderPaginationOnly",
  component: SliderPaginationOnly,
  tags: ['autodocs'],

  argTypes: {
    images: {
      description: "Array of image objects for the slider.",
      control: "text",
    },
    className: {
      description: "Additional CSS class names for styling.",
      control: "text",
    },
    disabledOnInteraction: {
      description: "Whether autoplay is disabled on user interaction.",
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof SliderPaginationOnly>;

export const Default: Story = {
  args: {
    images: [
      {
        src: "https://picsum.photos/800/800?random=4",
        name: "Image 1",
        href: "#",
      },
      {
        src: "https://picsum.photos/800/800?random=6",
        name: "Image 2",
        href: "#",
      },
      {
        src: "https://picsum.photos/800/800?random=5",
        name: "Image 3",
      },
    ],
    className: "",
    disabledOnInteraction: false,
  },
};

export const NoAutoplayOnInteraction: Story = {
  args: {
    ...Default.args,
    disabledOnInteraction: true,
  },
};
