"use client";
import React from "react";
import FixedSocials from "../FixedSocials";
import ScrollTop from "../__shared/ScrollTop";

type Props = {
  socialHidden?: boolean;
  scrollTopHidden?: boolean;
};

const ScrollTopAndSocial = ({ scrollTopHidden, socialHidden }: Props) => {
  return (
    <>
      <div style={{ display: socialHidden ? "none" : "block" }}>
        <FixedSocials />
      </div>
      <div style={{ display: scrollTopHidden ? "none" : "block" }}>
        <ScrollTop />
      </div>
    </>
  );
};

export default ScrollTopAndSocial;
