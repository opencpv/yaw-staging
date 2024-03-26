type SkeletonProps = {
  /** Number of skeletons to display. Eg: count={8} */
  count: number;
  className?: string;
  display?: "gridy" | "flexy";
  className?: string;
};

type SkeletonListingProps = SkeletonProps & {
  cardType?: 1 | 2;
};
