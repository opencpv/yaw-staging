import { Meta, StoryObj } from "@storybook/react";
import SliderPaginationOnly from "../slider-pagination-only";

const meta: Meta<typeof SliderPaginationOnly> = {
  title: "Components/Sliders/SliderPaginationOnly",
  component: SliderPaginationOnly,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    images: {
      description: "Array of image objects for the slider.",
    },
    className: {
      description: "Additional CSS class names for styling.",
    },
    disableOnInteraction: {
      description: "Whether autoplay is disabled on user interaction.",
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
    disableOnInteraction: false,
  },
};

export const DisableAutoplay: Story = {
  args: {
    ...Default.args,
    autoplay: false,
  },
};

export const DisableAutoplayOnInteraction: Story = {
  args: {
    ...Default.args,
    disableOnInteraction: true,
  },
};
