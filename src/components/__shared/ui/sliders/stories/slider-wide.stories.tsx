import { Meta, StoryObj } from "@storybook/react";
import SliderWide from "../slider-wide";

const meta: Meta<typeof SliderWide> = {
  tags: ["autodocs"],
  title: "Components/Sliders/SliderWide",
  component: SliderWide,
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
    navigation: {
      description: "Enable navigation buttons.",
    },
    pagination: {
      description: "Enable pagination bullets.",
    },
    autoplay: {
      description: "Enable autoplay.",
    },
    overlay: {
      description: "Whether to show overlay on images.",
    },
    loop: {
      description:
        "Enable loop mode. See https://swiperjs.com/swiper-api to learn how loop works.",
    },
    onSlideChange: {
      description: "Callback for slide change event.",
    },
    onClick: {
      description: "Callback for image click event.",
    },
    classNames: {
      description:
        "Additional class names for specific parts of the component.",
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
    autoplay: true,
  },
};

export const DisableAutoplay: Story = {
  args: {
    ...Default.args,
    autoplay: false,
  },
};

/**
 * Loop slides instead of starting from the beginning
 */
export const LoopSlides: Story = {
  args: {
    ...Default.args,
    loop: true,
  },
};

/**
 * Shows pagination bullets
 */
export const WithPagination: Story = {
  args: {
    ...Default.args,
    pagination: true,
  },
};

/**
 * Show navigation buttons. Caution must be taken when used with <strong>loop</strong>. See https://swiperjs.com/swiper-api
 */
export const WithNavigation: Story = {
  args: {
    ...Default.args,
    navigation: true,
  },
};

export const NoOverlay: Story = {
  args: {
    ...Default.args,
    overlay: false,
  },
};

export const CustomOverlay: Story = {
  args: {
    ...Default.args,
    classNames: {
      overlay: "bg-red-500/20",
    },
  },
};
