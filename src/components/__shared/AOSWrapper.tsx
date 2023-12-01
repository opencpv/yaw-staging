"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';


type Props = {
  animation: string;
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
    AOS.init();
  }, []);

  return (
    <div
      data-aos={animation}
      data-aos-duration={duration ? duration : "2000"}
      data-aos-delay={delay ? delay : "0"}
      data-aos-offset={offset ? offset : "0"}
      className={className}
    >
      {children}
    </div>
  );
};

export default AOSWrapper;
