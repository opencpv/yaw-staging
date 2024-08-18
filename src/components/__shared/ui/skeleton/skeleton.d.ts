type SkeletonProps = {
  className?: string;
  /** Number of skeletons to display. Eg: count={8} */
  count?: number;
};

type SkeletonListingProps = SkeletonProps & {
  cardType?: 1 | 2;
};
