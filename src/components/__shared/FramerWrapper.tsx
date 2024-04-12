"use client";
import {
  AnimationProps,
  TargetAndTransition,
  VariantLabels,
  motion,
} from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  // whileInView: VariantLabels | TargetAndTransition | undefined
  // viewport: ViewportOptions
};

const FramerWrapper = ({ children, className, ...props }: Props) => {
  return (
    <motion.div {...props} className={className}>
      {children}
    </motion.div>
  );
};

export default FramerWrapper;
