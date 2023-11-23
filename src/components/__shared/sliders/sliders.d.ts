type SliderPaginationOnlyProps = {
  images: SliderPaginationOnlyImage[];
  className?: string;
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
  hasNavAndPagination?: boolean
};

type SliderGridProps = {
  items: React.ReactNode[];
};
