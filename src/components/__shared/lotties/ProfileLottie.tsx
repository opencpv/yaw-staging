"use client";
import React, { useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "@/lotties/profile.json";

type Props = {};

const ProfileLottie = (props: Props) => {
  const [key, setKey] = React.useState(crypto.randomUUID());

  console.log(key);

  useEffect(() => {
    setInterval(() => {
      setKey(crypto.randomUUID());
    }, 60000);
  }, []);

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
        height={32}
        width={32}
        title="profile"
        key={key}
      />
    </div>
  );
};

export default ProfileLottie;
