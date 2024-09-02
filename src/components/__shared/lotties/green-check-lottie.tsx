"use client";
import React from "react";
//@ts-ignore
import Lottie from "react-lottie";
import animationData from "@/lotties/green-check.json";

type Props = {};

const GreenCheckLottie = (props: Props) => {
  const defaultOptions = {
    loop: false,
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
        height={100}
        width={100}
        title="green check"
        style={{ color: "#0B7371" }}
      />
    </div>
  );
};

export default GreenCheckLottie;
