type SliderPaginationOnlyProps = {
  images: SliderPaginationOnlyImage[];
  className?: string;
  autoplay?: boolean;
  disabledOnInteraction?: boolean;
};

interface SliderWideProps extends SliderPaginationOnlyProps {}

type SliderPaginationOnlyImage = {
  name: string;
  src: string;
  href?: string;
};

type SliderMultiItemsProps = {
  items: React.ReactNode[];
  slidesPerView?: number;
  breakpoints?: { [key: number]: { [key: any]: any } };
  hasNavAndPagination?: boolean;
  autoplay?: boolean;
};

type SliderGridProps = {
  items: React.ReactNode[];
};
