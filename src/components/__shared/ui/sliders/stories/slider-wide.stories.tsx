import { Meta, StoryObj } from "@storybook/react";
import SliderWide from "../slider-wide";

const meta: Meta<typeof SliderWide> = {
  tags: ["autodocs"],

  title: "Components/Sliders/SliderWide",
  component: SliderWide,
  argTypes: {
    images: {
      description: "Array of image objects for the slider.",
      control: "object",
    },
    className: {
      description: "Additional CSS class names for styling.",
      control: "text",
    },
    navigation: {
      description: "Enable navigation buttons.",
      control: "boolean",
    },
    pagination: {
      description: "Enable pagination bullets.",
      control: "boolean",
    },
    autoplay: {
      description: "Enable autoplay.",
      control: "boolean",
    },
    overlay: {
      description: "Whether to show overlay on images.",
      control: "boolean",
    },
    loop: {
      description: "Enable loop mode.",
      control: "boolean",
    },
    onSlideChange: {
      description: "Callback for slide change event.",
      action: "slide change",
    },
    onClick: {
      description: "Callback for image click event.",
      action: "image click",
    },
    classNames: {
      description:
        "Additional class names for specific parts of the component.",
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof SliderWide>;

export const Default: Story = {
  args: {
    images: [
      {
        src: "https://picsum.photos/800/800?random=4",
        name: "Image 1",
        href: "#",
      },
      {
        src: "https://picsum.photos/800/800?random=5",
        name: "Image 2",
        href: "#",
      },
      {
        src: "https://picsum.photos/800/800?random=1",
        name: "Image 3",
      },
    ],
    className: "",
    navigation: true,
    pagination: true,
    autoplay: true,
    overlay: true,
    loop: true,
    classNames: {},
  },
};

export const NoAutoplayOnInteraction: Story = {
  args: {
    ...Default.args,
    autoplay: false,
  },
};

export const NoOverlay: Story = {
  args: {
    ...Default.args,
    overlay: false,
  },
};
