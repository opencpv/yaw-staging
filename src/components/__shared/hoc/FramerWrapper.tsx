"use client";
import { fadeIn } from "@/lib/animations";
import {
  AnimationProps,
  TargetAndTransition,
  VariantLabels,
  motion,
} from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  // whileInView: VariantLabels | TargetAndTransition | undefined
  // viewport: ViewportOptions
};

const FramerWrapper = (
  { children, className, ...props }: Props,
  ref: React.Ref<HTMLDivElement>,
) => {
  return (
    <motion.div
      {...fadeIn}
      {...props}
      className={className}
      id={props.id}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export default React.forwardRef(FramerWrapper);
