"use client";
// import { Rate as AntRate, RateProps } from "antd";
import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import { motion, animate, stagger } from "framer-motion";

type Props = {
  /** Can also be when to animate the stars */
  shouldAnimateStars?: boolean;
  shouldShowMessage?: boolean;
  message?: string;
} 
// & RateProps;

const Rate: React.FC<Props> = (props) => {
  const variants = {
    show: {
      height: "auto",
      opacity: 1,
      transition: { delay: 1.8 },
    },
    hide: {
      height: 0,
      opacity: 0,
      transitionEnd: {
        display: "none",
      },
    },
  };

  useEffect(() => {
    animate(
      ".ant-rate-star",
      props.shouldAnimateStars ? { scale: [1, 1.5, 1.5, 1] } : { scale: 1 },
      {
        delay: stagger(0.1),
      },
    );
  }, [props.shouldAnimateStars]);

  return (
    <div className="no-print space-y-1">
      {/* <AntRate allowHalf character={<FaStar />} {...props} /> */}
      <motion.div
        variants={variants}
        animate={props.shouldShowMessage ? "show" : "hide"}
        className="bg-success-bg p-2 text-success"
      >
        {props.message || "Thank you for rating"}
      </motion.div>
    </div>
  );
};

export default Rate;
