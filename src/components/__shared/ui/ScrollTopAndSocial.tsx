"use client";
import React from "react";
import FixedSocials from "../../FixedSocials";
import ScrollTop from "./ScrollTop";

type Props = {
  socialHidden?: boolean;
  scrollTopHidden?: boolean;
  thresholdMin?: number;
};

const ScrollTopAndSocial = ({
  scrollTopHidden,
  socialHidden,
  thresholdMin,
}: Props) => {
  return (
    <>
      <div style={{ display: socialHidden ? "none" : "block" }}>
        <FixedSocials thresholdMin={thresholdMin} />
      </div>
      <div style={{ display: scrollTopHidden ? "none" : "block" }}>
        <ScrollTop />
      </div>
    </>
  );
};

export default ScrollTopAndSocial;
