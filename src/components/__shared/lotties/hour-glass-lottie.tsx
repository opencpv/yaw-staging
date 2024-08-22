"use client";
import React from "react";
//@ts-ignore
import Lottie from "react-lottie";
import animationData from "@/lotties/hour-glass.json";

const HourGlassLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        speed={0.8}
        height={150}
        width={150}
        title="hour glass"
        style={{ color: "#11605E" }}
      />
    </div>
  );
};

export default HourGlassLottie;
