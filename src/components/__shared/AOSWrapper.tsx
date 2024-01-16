"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimationStyle } from "./types";

type Props = {
  animation: AnimationStyle
  duration?: string;
  delay?: string;
  offset?: string;
  children: React.ReactNode;
  className?: string;
};

const AOSWrapper = ({
  animation,
  duration,
  delay,
  offset,
  children,
  className,
}: Props) => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div
      data-aos={animation}
      data-aos-duration={duration ? duration : "900"}
      data-aos-delay={delay ? delay : "0"}
      data-aos-offset={offset ? offset : "0"}
      className={className}
    >
      {children}
    </div>
  );
};

export default AOSWrapper;
