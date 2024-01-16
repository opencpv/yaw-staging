"use client";
import React from "react";
import FixedSocials from "../FixedSocials";
import ScrollTop from "../__shared/ScrollTop";

type Props = {
  socialHidden?: boolean;
  scrollTopHidden?: boolean;
  threshHoldMin?: number;
  threshHoldMax?: number;
};

const ScrollTopAndSocial = ({
  scrollTopHidden,
  socialHidden,
  threshHoldMin,
  threshHoldMax,
}: Props) => {
  return (
    <>
      <div style={{ display: socialHidden ? "none" : "block" }}>
        <FixedSocials
          threshHoldMin={threshHoldMin}
          threshHoldMax={threshHoldMax}
        />
      </div>
      <div style={{ display: scrollTopHidden ? "none" : "block" }}>
        <ScrollTop />
      </div>
    </>
  );
};

export default ScrollTopAndSocial;
