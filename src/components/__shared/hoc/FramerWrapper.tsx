"use client";
import { fadeIn } from "@/lib/animations";
import {
  AnimationProps,
  TargetAndTransition,
  VariantLabels,
  motion,
} from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  // whileInView: VariantLabels | TargetAndTransition | undefined
  // viewport: ViewportOptions
};

const FramerWrapper = ({ children, className, ...props }: Props) => {
  return (
    <motion.div {...fadeIn} {...props} className={className} id={props.id}>
      {children}
    </motion.div>
  );
};

export default FramerWrapper;
