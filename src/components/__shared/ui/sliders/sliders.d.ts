type CarouselProps = {
  images: string[];
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

type SliderPaginationOnlyProps = {
  images: SliderPaginationOnlyImage[];
  className?: string;
  classNames?: {
    overlay?: string;
  };
  autoplay?: boolean;
  disabledOnInteraction?: boolean;
};

interface SliderWideProps extends SliderPaginationOnlyProps {
  navigation?: boolean;
  pagination?: boolean;
  loop?: boolean;
  overlay?: boolean;
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
  slidesPerView?: number | "auto";
  breakpoints?: { [key: number]: { [key: any]: any } };
  hasNavAndPagination?: boolean;
  autoplay?: boolean;
  /** class for a swiper slide item */
  swiperSlideClassName?: string;
  centeredSlides?: boolean;
  spaceBetween?: number;
};

type SliderGridProps = {
  items: React.ReactNode[] | undefined;
  slidesPerView?: number;
};
