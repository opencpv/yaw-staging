type CarouselProps = {
  images: { src: string; label?: string }[];
};

type SliderPaginationOnlyProps = {
  images: SliderPaginationOnlyImage[];
  className?: string;
  autoplay?: boolean;
  disabledOnInteraction?: boolean;
};

interface SliderWideProps extends SliderPaginationOnlyProps {
  navigation?: boolean;
  pagination?: boolean;
  onClick?: () => void;
  onSlideChange?: (swiper: Swiper) => void;
}

type SliderPaginationOnlyImage = {
  name: string;
  src: string;
  href?: string;
};

type SliderMultiItemsProps = {
  items: React.ReactNode[] | undefined;
  slidesPerView?: number;
  breakpoints?: { [key: number]: { [key: any]: any } };
  hasNavAndPagination?: boolean;
  autoplay?: boolean;
  /** class for a swiper slide item */
  swiperSlideClassName?: string;
};

type SliderGridProps = {
  items: React.ReactNode[] | undefined;
};
