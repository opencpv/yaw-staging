"use client"
import React from "react";
import FixedSocials from "../FixedSocials";
import ScrollTop from "../__shared/ScrollTop";

type Props = {};

const ScrollTopAndSocial = (props: Props) => {
  return (
    <>
      <FixedSocials />
      <ScrollTop />
    </>
  );
};

export default ScrollTopAndSocial;
