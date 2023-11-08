"use client";
import { styled } from "@stitches/react";
import PDHero from "./PDHero";

export default function Page() {
  return (
    <Root className="w-full">
      <PDHero />
    </Root>
  );
}

const Root = styled("div", {});
