"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {
  animation:
    | "fade-up"
    | "fade-down"
    | "fade-right"
    | "fade-left"
    | "fade-up-right"
    | "fade-up-left"
    | "fade-down-right"
    | "fade-down-left"
    | "flip-left"
    | "flip-right"
    | "flip-up"
    | "flip-down"
    | "zoom-in"
    | "zoom-in-up"
    | "zoom-in-down"
    | "zoom-in-left"
    | "zoom-in-right"
    | "zoom-out"
    | "zoom-out-up"
    | "zoom-out-down"
    | "zoom-out-right"
    | "zoom-out-left";
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
