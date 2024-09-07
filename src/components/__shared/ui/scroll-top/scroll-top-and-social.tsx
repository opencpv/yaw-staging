"use client";
import React from "react";
import FixedSocials from "../fixed-socials";
import dynamic from "next/dynamic";
const ScrollTop = dynamic(() => import("."));

type Props = {
  hideSocial?: boolean;
  hideScrollTop?: boolean;
  thresholdMin?: number;
};

/**
 * Displays both Scroll Top and Fixed Socials.
 */
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
