type SliderPaginationOnlyProps = {
    images: SliderPaginationOnlyImage[],
    className?: string;
}

interface SliderWideProps extends SliderPaginationOnlyProps {}

type SliderPaginationOnlyImage = {
    name: string;
    src: string;
}

type SliderMultiItemsProps = {
    items: React.ReactNode[]
}