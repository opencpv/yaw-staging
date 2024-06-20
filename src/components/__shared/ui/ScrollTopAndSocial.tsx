"use client";
import React from "react";
import FixedSocials from "../../FixedSocials";
import ScrollTop from "./ScrollTop";

type Props = {
  hideSocial?: boolean;
  hideScrollTop?: boolean;
  thresholdMin?: number;
};

const ScrollTopAndSocial = ({
  hideScrollTop,
  hideSocial,
  thresholdMin,
}: Props) => {
  return (
    <>
      <div style={{ display: hideSocial ? "none" : "block" }}>
        <FixedSocials thresholdMin={thresholdMin} />
      </div>
      <div style={{ display: hideScrollTop ? "none" : "block" }}>
        <ScrollTop />
      </div>
    </>
  );
};

export default ScrollTopAndSocial;
