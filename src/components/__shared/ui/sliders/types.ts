import { Swiper } from "swiper/types";
export type CarouselProps = {
  images: string[];
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  isCover?: boolean;
};

export type SliderPaginationOnlyProps = {
  images: SliderPaginationOnlyImage[];
  className?: string;
  classNames?: {
    overlay?: string;
  };
  autoplay?: boolean;
  disabledOnInteraction?: boolean;
};

export interface SliderWideProps extends SliderPaginationOnlyProps {
  navigation?: boolean;
  pagination?: boolean;
  loop?: boolean;
  overlay?: boolean;
  onClick?: () => void;
  onSlideChange?: (swiper: Swiper) => void;
}

export type SliderPaginationOnlyImage = {
  name: string;
  src: string;
  href?: string;
};

export type SliderMultiItemsProps = {
  items: React.ReactNode[] | undefined;
  slidesPerView?: number | "auto";
  //@ts-ignore
  breakpoints?: { [key: number]: { [key: any]: any } };
  hasNavAndPagination?: boolean;
  autoplay?: boolean;
  /** class for a swiper slide item */
  swiperSlideClassName?: string;
  centeredSlides?: boolean;
  spaceBetween?: number;
};

export type SliderGridProps = {
  items: React.ReactNode[] | undefined;
  slidesPerView?: number;
};
